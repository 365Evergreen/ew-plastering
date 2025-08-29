import { Card } from './ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EW</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">EW Plastering</h3>
                <p className="text-sm opacity-80">Brisbane, QLD</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional plastering services for residential and commercial properties 
              across Brisbane and Greater Queensland. Quality craftsmanship guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm opacity-80">Residential Plastering</span>
              <span className="text-sm opacity-80">Commercial Projects</span>
              <span className="text-sm opacity-80">Repairs & Maintenance</span>
              <span className="text-sm opacity-80">Decorative Finishes</span>
              <span className="text-sm opacity-80">Emergency Repairs</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <a href="tel:+61730000000" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  (07) 3000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:info@ewplastering.com.au" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  info@ewplastering.com.au
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 opacity-80 mt-0.5" />
                <span className="text-sm opacity-80">
                  Brisbane & Greater Queensland
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 opacity-80 mt-0.5" />
                <div className="text-sm opacity-80">
                  <div>Mon-Fri: 7AM-5PM</div>
                  <div>Sat: 8AM-4PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} EW Plastering. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <span>QBCC Licensed</span>
              <span>Fully Insured</span>
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}