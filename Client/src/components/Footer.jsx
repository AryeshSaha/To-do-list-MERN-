const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className=" fixed bottom-3 w-full">
        <p className="text-lg text-center text-white">Copyright &copy; Aryesh | {year}</p>
      </footer>
    </>
  );
};

export default Footer;
