const LoadMoreButton = ({ handleClick }: { handleClick: () => unknown }) => (
  <button
    onClick={handleClick}
    className=" px-2 py-1 my-7 mx-auto border-2 rounded-md border-cyanGreen-100 text-cyanGreen-100 block"
  >
    load more
  </button>
);

export default LoadMoreButton;
