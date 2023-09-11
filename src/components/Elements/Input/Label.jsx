const Label = (props) => {
  const { htmlFor, children: text } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">
      {text}
    </label>
  );
};

export default Label;
