interface HelloModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelloModal({ isOpen, onClose }: HelloModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full m-4">
        <h2 className="text-2xl font-bold mb-4">Hello World</h2>
        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
} 