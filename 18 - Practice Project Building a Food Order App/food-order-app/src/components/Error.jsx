function Error({ title, message }) {
  return (
    <div className="bg-red-300 flex flex-col p-8 rounded-md text-left shadow-lg gap-3 border-3">
      <h2 className="text-red-700 font-bold text-xl mr-10">{title}</h2>
      <p className="text-red-600 font-semibold ">{message}</p>
    </div>
  );
}

export default Error;
