
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-300 mt-2 ml-10 md:ml-[60%] mr-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center md:justify-end text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} FareHarbor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;