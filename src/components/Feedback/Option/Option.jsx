export const Options = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <>
      <div className="flex gap-3 justify-center mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          onClick={onGoodClick}
        >
          Good
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
          onClick={onNeutralClick}
        >
          Neutral
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          onClick={onBadClick}
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default Options;
