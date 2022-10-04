import './hamburger.scss';

interface IProps {
  handleClick: () => unknown;
  isActive: boolean;
}

const Hamburger = ({ handleClick, isActive }: IProps) => {
  return (
    <div className="hover relative z-20">
      <button
        onClick={handleClick}
        className={`hamburger hamburger--emphatic hover:opacity-70 transition-opacity ${isActive && 'is-active'} `}
        type="button"
      >
        <span className="hamburger-box hamburger__span">
          <span className="hamburger-inner hamburger__span"></span>
        </span>
      </button>
    </div>
  );
};

export default Hamburger;
