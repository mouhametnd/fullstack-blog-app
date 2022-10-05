import ArrowIcon from '../icons/ArrowIcon';

interface IProps {
  handleClick: () => unknown;
  total: number;
  hasUserVoted: boolean;
}

const UpvoteButton = ({ handleClick, total, hasUserVoted }: IProps) => (
  <button
    onClick={handleClick}
    className={` hover text-cyanGreen-100 transition-colors bg-cyanGreen-100/10  rounded-xl py-2 px-4 w-max h-max cursor-pointer upvote-button transition-opacity gap-3 flex flex-row  ${
      hasUserVoted && 'bg-cyanGreen-100 text-white'
    }`}
  >
    <ArrowIcon />
    <span> {total}</span>
  </button>
);

export default UpvoteButton;
