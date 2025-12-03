import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Right Modal
      </button>

      <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)} modal>
        <div
          className={`
            fixed top-0 right-0 h-screen w-80 bg-white p-5 shadow-lg
            transform transition-transform duration-500 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <h2 className="text-xl font-bold">Right Side Modal</h2>
          <p className="mt-2">This modal slides in smoothly from the right!</p>

          <button
            onClick={() => setOpen(false)}
            className="px-3 py-2 bg-red-500 text-white rounded mt-4"
          >
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
}
