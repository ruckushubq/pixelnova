const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="signature-text text-lg">Sahil Lulla</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Post by Sahil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
