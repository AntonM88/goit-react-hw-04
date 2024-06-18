export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className="flex justify-center ">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none  m-5"
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
};
