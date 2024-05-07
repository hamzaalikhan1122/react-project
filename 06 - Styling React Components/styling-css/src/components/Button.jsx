function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-800 bg-amber-400 hover:bg-amber-500 shadow"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
