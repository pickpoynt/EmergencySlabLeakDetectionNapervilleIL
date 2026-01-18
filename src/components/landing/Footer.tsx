const Footer = () => {
  return (
    <footer className="bg-navy py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-copper flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SL</span>
              </div>
              <div>
                <span className="text-xl font-bold font-heading">Naperville Slab Leak</span>
                <p className="text-xs text-primary-foreground/60">Detection Experts</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Your trusted partner for non-invasive slab leak detection and repair in Naperville and DuPage County.
              Preserving your home's foundation with 24/7 expert service.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Electronic Leak Detection</li>
              <li>Foundation Repair</li>
              <li>Pipe Rerouting</li>
              <li>Water Damage Restoration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Naperville, IL</li>
              <li>DuPage County</li>
              <li>(877) 792-1410</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Naperville Slab Leak Detection. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
