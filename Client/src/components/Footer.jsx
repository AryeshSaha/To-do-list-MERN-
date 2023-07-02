const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-slate-900 fixed bottom-0 py-2 w-full">
        <p className="text-lg text-center text-slate-100">Copyright &copy; Aryesh | {year}</p>
      </footer>
    </>
  );
};

export default Footer;
