import { Button } from '../Downloads/Plastering Services Website/src/components/ui/button';
import { Card } from '../Downloads/Plastering Services Website/src/components/ui/card';
import { ImageWithFallback } from '../Downloads/Plastering Services Website/src/components/figma/ImageWithFallback';
import { CheckCircle, Star, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1634841999653-dad28648a43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzU2NDg3NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern construction and plastering work"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent"></div>
        
        {/* Decorative floating elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-18 h-18 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm border border-primary/30 shadow-lg">
                <MapPin className="w-4 h-4" />
                <span>Serving Brisbane & Surrounds</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight drop-shadow-lg">
                Professional 
                <span className="text-primary drop-shadow-lg"> Plastering</span> Services
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto drop-shadow-md">
                Quality craftsmanship and reliable service for all your plastering needs. 
                From residential homes to commercial projects, we deliver exceptional results.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="drop-shadow-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="drop-shadow-sm">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="drop-shadow-sm">Local Brisbane Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                View Our Work
              </Button>
            </div>

            {/* Social Proof & Stats */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Outstanding quality and professional service. Highly recommended!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">- Sarah M., Brisbane</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-primary/20 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <p className="text-sm text-muted-foreground mb-2">Projects Completed</p>
                  <p className="text-xs text-muted-foreground">Quality Guaranteed on Every Project</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}