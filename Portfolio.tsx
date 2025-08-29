import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Living Room Renovation",
      category: "residential",
      location: "Paddington, Brisbane",
      description: "Complete interior plastering for a contemporary home renovation.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NDM1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Commercial Office Fit-out",
      category: "commercial",
      location: "CBD, Brisbane",
      description: "Professional plastering for a high-end office space renovation.",
      image: "https://images.unsplash.com/photo-1628615613709-9642d17dbb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBsYXN0ZXJlZCUyMHdhbGx8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Heritage Home Restoration",
      category: "restoration",
      location: "New Farm, Brisbane",
      description: "Careful restoration of original plaster work in a heritage-listed property.",
      image: "https://images.unsplash.com/photo-1686987537277-516791dabf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlbm92YXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU2NDcxNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "New Build Family Home",
      category: "residential",
      location: "Chermside, Brisbane",
      description: "Complete internal and external plastering for a new family home.",
      image: "https://images.unsplash.com/photo-1567238563567-b99d8ac66e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGVyaW5nJTIwY29uc3RydWN0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc1NjQ4NzUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Retail Space Makeover",
      category: "commercial",
      location: "Fortitude Valley, Brisbane",
      description: "Modern plastering and decorative finishes for a boutique retail space.",
      image: "https://images.unsplash.com/photo-1687062013633-f2d1a2686f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMHBsYXN0ZXJpbmd8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Water Damage Repair",
      category: "restoration",
      location: "Indooroopilly, Brisbane",
      description: "Expert repair and restoration of water-damaged ceilings and walls.",
      image: "https://images.unsplash.com/photo-1628615613709-9642d17dbb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBsYXN0ZXJlZCUyMHdhbGx8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'restoration', label: 'Restoration' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent projects across Brisbane. Quality craftsmanship 
            you can see and trust.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-2">{project.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Contact us today for a free consultation and detailed quote for your plastering project.
          </p>
          <Button size="lg" onClick={scrollToContact}>
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}