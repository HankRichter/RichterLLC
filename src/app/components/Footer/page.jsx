const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-semibold">Richter's Restorations</p>
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
