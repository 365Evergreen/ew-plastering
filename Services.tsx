import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Home, Building, Wrench, Sparkles, CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Plastering",
      description: "Interior and exterior plastering for homes, including new builds and renovations.",
      features: ["Wall plastering", "Ceiling repairs", "Texture finishes", "Crack repairs"],
      image: "https://images.unsplash.com/photo-1628615613709-9642d17dbb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBsYXN0ZXJlZCUyMHdhbGx8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Professional plastering services for offices, retail spaces, and commercial buildings.",
      features: ["Large scale projects", "Quick turnaround", "Minimal disruption", "Professional finish"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NDM1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "Expert repair services for damaged walls, ceilings, and existing plaster work.",
      features: ["Crack repairs", "Water damage restoration", "Patch repairs", "Surface preparation"],
      image: "https://images.unsplash.com/photo-1687062013633-f2d1a2686f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMHBsYXN0ZXJpbmd8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Sparkles,
      title: "Decorative Finishes",
      description: "Specialized decorative plastering and custom texture applications.",
      features: ["Textured walls", "Decorative cornices", "Venetian plaster", "Custom designs"],
      image: "https://images.unsplash.com/photo-1686987537277-516791dabf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlbm92YXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU2NDcxNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive plastering solutions for residential and commercial properties across Brisbane
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative h-48 md:h-full">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Every project is unique. Contact us to discuss your specific plastering requirements 
              and get a tailored quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Detailed Quote</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No Obligation</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}