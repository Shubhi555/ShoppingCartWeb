import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModel: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // hides until user clicks icon

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* MODAL BOX */}
      <div className="bg-white p-6 rounded-xl w-[350px] relative shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white w-7 h-7 rounded-full flex justify-center items-center text-lg"
        >
          ✕
        </button>

        <h2 className="text-center text-2xl font-semibold mb-5">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded-lg mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded-lg mb-4"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
          Login
        </button>

        <p className="text-center mt-3 text-sm">
          Don’t have an account? <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModel;