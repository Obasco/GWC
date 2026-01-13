import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

/* ---------- MEDIA QUERY HOOK ---------- */
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex(q => window.matchMedia(q).matches)] ??
    defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q =>
      window.matchMedia(q).addEventListener("change", handler)
    );
    return () =>
      queries.forEach(q =>
        window.matchMedia(q).removeEventListener("change", handler)
      );
    // eslint-disable-next-line
  }, []);

  return value;
};

/* ---------- MEASURE HOOK ---------- */
const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

/* ---------- IMAGE PRELOADER ---------- */
const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

/* ---------- MASONRY COMPONENT ---------- */
const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  /* ---------- INITIAL ANIMATION POSITION ---------- */
  const getInitialPosition = item => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -150 };
      case "bottom":
        return { x: item.x, y: window.innerHeight * 0.8 };
      case "left":
        return { x: -150, y: item.y };
      case "right":
        return { x: window.innerWidth * 0.8, y: item.y };
      case "center":
        return {
          x: rect.width / 2 - item.w / 2,
          y: rect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 80 };
    }
  };

  /* ---------- PRELOAD IMAGES ---------- */
  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  /* ---------- GRID CALCULATION ---------- */
  const grid = useMemo(() => {
    if (!width) return [];

    const gap = 16;
    const colHeights = new Array(columns).fill(0);
    const columnWidth = (width - gap * (columns - 1)) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));

      const height =
        columns === 1
          ? child.height * 0.6
          : columns === 2
          ? child.height * 0.55
          : child.height * 0.5;

      const x = col * (columnWidth + gap);
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  /* ---------- GSAP ANIMATION ---------- */
  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto"
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line
  }, [grid, imagesReady]);

  /* ---------- HOVER EFFECTS ---------- */
  const handleMouseEnter = id => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = id => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  /* ---------- CONTAINER HEIGHT FIX ---------- */
  const containerHeight =
    Math.max(...grid.map(i => i.y + i.h), 0) || "auto";

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: containerHeight }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => window.open(item.img, "_blank", "noopener")}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {colorShiftOnHover && (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-pink-500/40 to-sky-500/40 opacity-0" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
