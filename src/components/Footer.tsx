import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Interior Design Studio</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Creating elegant, sophisticated spaces that inspire confidence and reflect your unique style.
            </p>
            <p className="text-sm text-neutral-600">
              Premium interior design services for residential and commercial projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-neutral-600 hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="block text-sm text-neutral-600 hover:text-accent transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="block text-sm text-neutral-600 hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-sm text-neutral-600 hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-neutral-600 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>
                <span className="block font-medium">Email</span>
                <a href="mailto:hello@interiordesignstudio.com" className="hover:text-accent transition-colors">
                  hello@interiordesignstudio.com
                </a>
              </p>
              <p>
                <span className="block font-medium">Phone</span>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <span className="block font-medium">Address</span>
                123 Design Street<br />
                Creative City, ST 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-600">
            © 2024 Interior Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}