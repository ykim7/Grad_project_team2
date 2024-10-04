const Button = ({ name, onClick, submit }) => {
  return (
    <button
      className="bg-button-color rounded-3xl w-24 h-10 p-2 text-white font-bold"
      onClick={onClick}
      type={submit ? "submit" : ""}
    >
      {name}
    </button>
  );
};

export default Button;
