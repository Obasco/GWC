import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext } from "react";

const ModalContext = createContext();

export function Modal({ open, onOpenChange, children }) {
  return (
    <ModalContext.Provider value={{ open, onOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ children }) {
  const { onOpenChange } = useContext(ModalContext);

  return (
    <div onClick={() => onOpenChange(true)} className="inline-block cursor-pointer">
      {children}
    </div>
  );
}

export function ModalBody({ children }) {
  const { open, onOpenChange } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ModalContent({ children, className = "" }) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-2xl p-6 relative ${className}`}
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  );
}
