// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
  return (
    <>
      <div className="mt-6">
        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600">
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
