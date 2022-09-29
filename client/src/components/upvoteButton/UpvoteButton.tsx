import ArrowIcon from '../others/ArrowIcon';

interface IProps {
  handleClick: () => unknown;
  total: number;
  isVoted: boolean;
}

const UpvoteButton = ({ handleClick, total, isVoted }: IProps) => {
  return (
    <button onClick={handleClick}
      className={` hover text-cyanGreen-100 transition-colors bg-cyanGreen-100/10  rounded-xl py-2 px-4 w-max h-max cursor-pointer upvote-button transition-opacity gap-3 flex flex-row ${
        isVoted && 'bg-cyanGreen-100 text-white'
      }`}
    >
      <ArrowIcon />
      <span> {total}</span>
    </button>
  );
};

export default UpvoteButton;

/*

we'll need th user id 

## toggleBlogVote reducer
- it receive the user id and if it's exist w'll downvote otherwise we upvote. and then will remove the userid from the liked users array
- the we use tht splice method th put the new blog at the same position
- w'll we add the is-voted class to the blog if the userid is one inside on the liked users

*/
