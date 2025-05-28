export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-border/40 bg-background/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Product Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg border border-border/40 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-medium hover:from-primary/90 hover:to-primary transition-all shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookies
            </a>
          </div>
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Docket Technologies Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}