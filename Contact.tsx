import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../Downloads/Plastering Services Website/src/components/ui/card';
import { Button } from '../Downloads/Plastering Services Website/src/components/ui/button';
import { Input } from '../Downloads/Plastering Services Website/src/components/ui/input';
import { Textarea } from '../Downloads/Plastering Services Website/src/components/ui/textarea';
import { Label } from '../Downloads/Plastering Services Website/src/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    toast.success('Quote request sent successfully! We\'ll contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(07) 3000 0000",
      link: "tel:+61730000000"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ewplastering.com.au",
      link: "mailto:info@ewplastering.com.au"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Brisbane & Greater QLD",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 7AM-5PM\nSat: 8AM-4PM",
      link: null
    }
  ];

  const services = [
    "Residential Plastering",
    "Commercial Projects", 
    "Repairs & Maintenance",
    "Decorative Finishes",
    "Emergency Repairs",
    "Other"
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your plastering project? Contact us today for a free consultation 
            and detailed quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = info.link ? (
                    <a href={info.link} className="text-primary hover:underline">
                      {info.content}
                    </a>
                  ) : (
                    <span className="whitespace-pre-line">{info.content}</span>
                  );
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{info.title}</h4>
                        <div className="text-sm text-muted-foreground mt-1">
                          {content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose Us Quick Points */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
              <h4 className="font-semibold mb-4">Why Choose EW Plastering?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Free detailed quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">15+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Fully licensed & insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Quality guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Local Brisbane team</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Quote</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(07) 0000 0000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project, including the size of the area, type of work needed, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Quote Request
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => window.open('tel:+61730000000', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12">
          <Card className="p-6 bg-destructive/5 border-destructive/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Emergency Plastering Repairs</h3>
                <p className="text-muted-foreground">
                  Water damage? Urgent repairs needed? We offer 24/7 emergency plastering services.
                </p>
              </div>
              <Button variant="destructive" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Line
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}