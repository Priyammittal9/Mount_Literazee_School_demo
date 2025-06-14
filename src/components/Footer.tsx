import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#programs' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Admissions', href: '#contact' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Primary Education', href: '#programs' },
    { name: 'Middle School', href: '#programs' },
    { name: 'Secondary Education', href: '#programs' },
    { name: 'Co-curricular Activities', href: '#programs' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            {/* Logo */}
            <img
              src="/logo.jpg"
              alt="Mount Literazee School Logo"
              className="h-14 w-auto mb-2"
            />
            <h3 className="text-2xl font-bold text-primary">Mount Literazee School</h3>
            <p className="text-gray-300 leading-relaxed">
              Nurturing young minds and building bright futures through quality education and holistic development in Tikamgarh.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gray-100 hover:bg-primary/10 transition-colors px-2 py-1 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-gray-100 hover:bg-primary/10 transition-colors px-2 py-1 rounded"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons line by line with name */}
          <div className="flex flex-col items-end justify-between h-full space-y-4 mt-2">
            <a
              href="#"
              className="flex items-center space-x-3 bg-primary/20 p-2 rounded-full transition-colors duration-200 shadow hover:bg-blue-400 text-white hover:text-black  w-fit"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="text-gray-200 hover:text-black font-medium">Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-primary/20 p-2 rounded-full transition-colors duration-200 shadow hover:bg-blue-300 text-white hover:text-black  w-fit"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              <span className="text-gray-200 hover:text-black font-medium">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-primary/20 p-2 rounded-full transition-colors duration-200 shadow hover:bg-pink-300 text-white hover:text-black  w-fit"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-gray-200 hover:text-black font-medium">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 bg-primary/20 p-2 rounded-full transition-colors duration-200 shadow hover:bg-red-400 text-white hover:text-black  w-fit"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
              <span className="text-gray-200 hover:text-black font-medium">Youtube</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Mount Literazee School Tikamgarh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gray-100 hover:bg-primary/10 transition-colors px-2 py-1 rounded">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100 hover:bg-primary/10 transition-colors px-2 py-1 rounded">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100 hover:bg-primary/10 transition-colors px-2 py-1 rounded">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
