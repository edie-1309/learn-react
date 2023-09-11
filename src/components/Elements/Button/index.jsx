const Button = (props) => {
  const { children = "...", classname = "bg-slate-800" } = props;
  return (
    <button className={`h-10 px-6 font-bold rounded-md ${classname} text-white`} type="submit">
      {children}
    </button>
  );
};

export default Button;
