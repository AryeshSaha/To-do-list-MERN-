// eslint-disable-next-line react/prop-types
const Heading = ({ label }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-slate-700 uppercase">
        {label}
      </h1>
    </>
  );
};

export default Heading;
