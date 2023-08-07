interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?:boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onClick , disabled}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    {title}
  </button>
);

export default Button;
