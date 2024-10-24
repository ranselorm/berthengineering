interface ButtonProps {
  text: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-none w-1/4 border bg-secondary py-3 transition duration-150 capitalize rounded text-white">
      {text}
    </button>
  );
};

export default Button;
