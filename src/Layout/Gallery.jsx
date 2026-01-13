import React from "react";
import Masonry from "../component/Masonry";
import Navbar from "../Navbar";
import Footer from "./Home/Footer";


const Gallery = () => {


  
  const images = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/11/f0/47/11f047723da32d7cd10701deeffa9de7.jpg",
      height: 700,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/df/41/4b/df414b96b3b1373dd46b6923274132f3.jpg",
      height: 680,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/16/e4/d7/16e4d726f228e7e2c5cbd11655f9d094.jpg",
      height: 460,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/01/2f/46/012f46a4d523087bc09bbdcf1c7cdc8e.jpg",
      height: 740,
    },
    {
      id: 5,
      img: "https://i.pinimg.com/1200x/d1/06/c0/d106c0b63f14e8667ca7a36f61155629.jpg",
      height: 600,
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/05/df/a5/05dfa5f0de62e9c7a40f20c149c4b958.jpg",
      height: 820,
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/1d/9c/46/1d9c46fcd2ec4937b7007c74d66f80df.jpg",
      height: 500,
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/0c/6c/13/0c6c13e1cf73da226e7fe58b8016f96c.jpg",
      height: 690,
    },
    {
      id: 9,
      img: "https://i.pinimg.com/736x/82/f6/d3/82f6d31ddf93f0309c477cc878fcaaf0.jpg",
      height: 560,
    },
    {
      id: 10,
      img: "https://i.pinimg.com/736x/8e/6d/ab/8e6dabeb3999708e65370476ba2aa52c.jpg",
      height: 780,
    },
    {
      id: 11,
      img: "https://i.pinimg.com/736x/36/19/6b/36196b2fb916865f9d8d75588af937d7.jpg",
      height: 480,
    },
    {
      id: 12,
      img: "https://i.pinimg.com/736x/83/2c/d0/832cd03c7b2fe5656f6b94be764b5b54.jpg",
      height: 720,
    },
    {
      id: 13,
      img: "https://i.pinimg.com/736x/30/5d/2b/305d2b29ca9cd93c10b08199a653681f.jpg",
      height: 610,
    },
    {
      id: 14,
      img: "https://i.pinimg.com/736x/bc/13/5f/bc135f3a1cc7d111172cdbbdce1144d7.jpg",
      height: 850,
    },
    {
      id: 15,
      img: "https://i.pinimg.com/1200x/f5/0b/3b/f50b3bcaec8f158c3fd8d89f080991ba.jpg",
      height: 530,
    },
    {
      id: 16,
      img: "https://i.pinimg.com/736x/11/f0/47/11f047723da32d7cd10701deeffa9de7.jpg",
      height: 760,
    },
    {
      id: 17,
      img: "https://i.pinimg.com/1200x/60/82/cf/6082cf4210c63d6bdd17d695d1d04c4d.jpg",
      height: 490,
    },
    {
      id: 18,
      img: "https://i.pinimg.com/736x/30/5d/2b/305d2b29ca9cd93c10b08199a653681f.jpg",
      height: 810,
    },
    {
      id: 19,
      img: "https://i.pinimg.com/1200x/c3/80/bb/c380bb315acded86daf20b9c8a63ac31.jpg",
      height: 570,
    },
    {
      id: 20,
      img: "https://i.pinimg.com/736x/82/f6/d3/82f6d31ddf93f0309c477cc878fcaaf0.jpg",
      height: 700,
    },
    {
      id: 21,
      img: "https://i.pinimg.com/736x/78/d2/a7/78d2a79c49318fdd93f4544584a810ae.jpg",
      height: 540,
    },
    {
      id: 22,
      img: "https://i.pinimg.com/736x/36/19/6b/36196b2fb916865f9d8d75588af937d7.jpg",
      height: 790,
    },
    {
      id: 23,
      img: "https://i.pinimg.com/736x/cb/e5/d8/cbe5d84552a78396b7e7f746fc4d6e09.jpg",
      height: 460,
    },
    {
      id: 24,
      img: "https://i.pinimg.com/736x/e7/36/ca/e736ca2c522c8d6199d8da11b4c19cd1.jpg",
      height: 730,
    },
    {
      id: 25,
      img: "https://i.pinimg.com/736x/1d/9c/46/1d9c46fcd2ec4937b7007c74d66f80df.jpg",
      height: 610,
    },
  ];
  return (
    <>
      <section className="mt-4 min-h-screen px-4 md:px-8 lg:px-16">
        <Navbar className="mb-40" />

        <h2 className="text-4xl font-semibold text-center mb-12 mt-8">Gallery
         <span className="block h-1 w-24 bg-black mx-auto mt-2 mb-16"></span>
        </h2>

        <Masonry items={images} className="mt-19" />
        <br />
        <br />
      </section>
      
  

      
      <Footer />
      {/* <Footer  /> */}
    </>
  );
};

export default Gallery;
