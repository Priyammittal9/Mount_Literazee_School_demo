
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
            <h3 className="text-2xl font-bold text-primary">Mount Literazee School</h3>
            <p className="text-gray-300 leading-relaxed">
              Nurturing young minds and building bright futures through quality education and holistic development in Tikamgarh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 p-2 rounded-full hover:bg-primary/30 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
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
                  <a href={program.href} className="text-gray-300 hover:text-primary transition-colors">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Tikamgarh, Madhya Pradesh, India - 472001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300 text-sm">info@mountliterazee.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Mount Literazee School Tikamgarh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
