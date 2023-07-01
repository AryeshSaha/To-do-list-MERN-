// eslint-disable-next-line react/prop-types
const UpdateButton = ({ label, onClick }) => {
    return (
      <>
        <div className="mt-6">
          <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={onClick}>
            {label}
          </button>
        </div>
      </>
    );
  };
  
  export default UpdateButton;
  