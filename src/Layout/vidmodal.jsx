"use client";

import { useState } from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "../components/animatedmodal"; // adjust path if needed
import { PlayCircleIcon } from "lucide-react";


export default function VidModal() {
  const [open, setOpen] = useState(false);
  

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <button className="bg-black text-white px-6 flex gap-1 lg:px-50 py-3  rounded-lg hover:bg-gray-900 transition">
          <PlayCircleIcon />View Directions Video
        </button>
      </ModalTrigger>

      <ModalBody>
        <ModalContent className="max-w-3xl w-full">
          <div className="relative pt-[60%]"> {/* 16:9 wrapper */}

            {open && (
              <>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/wG3YkkxjJxA"
                title="Directions to Car Wash"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <button className="bg-gray-300 rounded-lg text-black text-lg uppercase  absolute py-4 px-6 mt-2 text-end" onClick={() => setOpen(!open)} >
                Cancel
              </button>
              </>
            )}
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
