const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral py-8 mt-16">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="font-heading text-lg font-semibold text-white">Richter's Restorations</p>
        <p className="font-mono text-xs uppercase tracking-wide text-white/40">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
