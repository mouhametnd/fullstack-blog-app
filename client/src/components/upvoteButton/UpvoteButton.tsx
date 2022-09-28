import ArrowIcon from '../others/ArrowIcon';
import './upvoteButton.scss';

interface IProps {
  handleClick: () => unknown;
  total: number;
}

const UpvoteButton = ({ handleClick, total }: IProps) => {
  return (
    <button>
      <ArrowIcon />
      <span> {total}</span>
    </button>
  );
};

export default UpvoteButton;
