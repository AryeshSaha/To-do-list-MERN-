// eslint-disable-next-line react/prop-types
const CreateButton = ({ label }) => {
    return (
      <>
        <div className="mt-6">
          <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-emerald-700 rounded-md hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
            {label}
          </button>
        </div>
      </>
    );
  };
  
  export default CreateButton;
  