import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ChurchInfo } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactSchema>;
export function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast.success("Thank you for reaching out! We will get back to you soon.");
    reset();
  };
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-secondary/5 py-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-display">Connect With Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a prayer request or a question? We're here to listen and pray with you.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Whether you're looking for a spiritual home or simply visiting, our doors and hearts are always open.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl illustrative-border text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-muted-foreground">{ChurchInfo.location}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-xl illustrative-border text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-muted-foreground">{ChurchInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-xl illustrative-border text-accent-foreground">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-muted-foreground">{ChurchInfo.email}</p>
                </div>
              </div>
            </div>
            {/* Mock Map Placeholder */}
            <div className="w-full aspect-video bg-muted illustrative-border overflow-hidden relative border-4 border-muted flex items-center justify-center group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800')] bg-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="relative z-10 text-center bg-white/90 p-6 rounded-xl shadow-lg border-2 border-primary rotate-1">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce" />
                  <p className="font-bold">Find us in Accra</p>
               </div>
            </div>
          </div>
          {/* Contact Form */}
          <IllustrativeCard className="h-fit">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="text-primary" />
                <h3 className="text-2xl font-display font-bold">Send a Message</h3>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                <Input 
                  {...register('name')}
                  placeholder="Your Full Name"
                  className="bg-muted/50 illustrative-border"
                />
                {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                <Input 
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  className="bg-muted/50 illustrative-border"
                />
                {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                <Input 
                  {...register('subject')}
                  placeholder="Prayer Request, Inquiry, etc."
                  className="bg-muted/50 illustrative-border"
                />
                {errors.subject && <p className="text-destructive text-sm">{errors.subject.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <Textarea 
                  {...register('message')}
                  placeholder="How can we help or pray for you?"
                  className="min-h-[150px] bg-muted/50 illustrative-border"
                />
                {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full illustrative-border bg-primary py-6 text-lg"
              >
                {isSubmitting ? "Sending..." : (
                  <>Send Message <Send className="ml-2 w-5 h-5" /></>
                )}
              </Button>
            </form>
          </IllustrativeCard>
        </div>
      </div>
    </div>
  );
}