import { Card, CardContent } from '../Downloads/Plastering Services Website/src/components/ui/card';
import { ImageWithFallback } from '../Downloads/Plastering Services Website/src/components/figma/ImageWithFallback';
import { CheckCircle, Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional results on every project, using premium materials and proven techniques."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "As Brisbane locals, we understand the unique requirements of our climate and building standards."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We respect your time and property, completing projects on schedule with minimal disruption."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete peace of mind with comprehensive insurance coverage and professional licensing."
    }
  ];

  const certifications = [
    "Licensed Building Contractor",
    "QBCC Licensed",
    "Public Liability Insurance",
    "WorkCover Queensland",
    "Master Builders Association"
  ];

  return (
    <section id="about" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About EW Plastering</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over 15 years, EW Plastering has been Brisbane's trusted partner for 
                  professional plastering services. What started as a small family business 
                  has grown into one of the region's most respected plastering contractors.
                </p>
                <p>
                  We specialize in both residential and commercial projects, from simple 
                  repairs to large-scale renovations. Our team combines traditional 
                  craftsmanship with modern techniques to deliver results that exceed expectations.
                </p>
                <p>
                  Based in Brisbane and serving the greater Queensland area, we understand 
                  the local climate challenges and building requirements that affect plastering 
                  work in our region.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Why Choose EW Plastering?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <Card className="p-6 bg-white/50">
              <h4 className="font-semibold mb-4">Licenses & Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1711080222192-cab50dc56ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmlzYmFuZSUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc1NjQ4NzUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Brisbane skyline - our local area"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Proudly Brisbane Based</h4>
                <p className="text-sm opacity-90">Serving our local community</p>
              </div>
            </div>

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567238563567-b99d8ac66e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGVyaW5nJTIwY29uc3RydWN0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc1NjQ4NzUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional plasterer at work"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687062013633-f2d1a2686f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMHBsYXN0ZXJpbmd8ZW58MXx8fHwxNzU2NDg3NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional plastering tools"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* Testimonial Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-sm mb-2">
                      "EW Plastering transformed our home renovation. Professional, 
                      reliable, and the quality exceeded our expectations. Highly recommended!"
                    </p>
                    <div>
                      <p className="font-semibold text-sm">John & Diana Miller</p>
                      <p className="text-xs text-muted-foreground">Ashgrove, Brisbane</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}