interface ButtonProps {
  text: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="w-5/12 border border-secondary bg-transparent text-black py-3 transition duration-50 capitalize rounded hover:bg-secondary hover:text-white">
      {text}
    </button>
  );
};

export default Button;
