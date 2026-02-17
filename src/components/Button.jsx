const Button = ({ text, type = "button", className, icon, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
