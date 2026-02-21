import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceTimes, ChurchInfo } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { motion } from 'framer-motion';
export function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border-secondary border-2 illustrative-border text-secondary font-bold text-sm mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Welcome to Pentecost Paradise Assembly</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display max-w-4xl mx-auto"
          >
            A Place of <span className="text-secondary italic">Restoration</span> and <span className="text-primary italic">Divine Fellowship</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join a vibrant community of believers dedicated to the undiluted Word of God and the transforming power of the Holy Spirit.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="illustrative-border bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto" asChild>
              <Link to="/contact">Plan A Visit <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="illustrative-border border-2 text-lg px-8 py-6 h-auto" asChild>
              <Link to="/sermons"><Play className="mr-2 w-5 h-5 fill-current" /> Watch Online</Link>
            </Button>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </section>
      {/* Service Times Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-display text-4xl">Service Times</h2>
          <p className="text-muted-foreground">We are always ready to welcome you into our presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ServiceTimes.map((service, idx) => (
            <IllustrativeCard key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-muted rounded-full">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display">{service.title}</h3>
              <div className="space-y-1">
                <p className="font-bold text-secondary uppercase tracking-widest text-sm">{service.day}</p>
                <p className="text-muted-foreground">{service.time}</p>
              </div>
            </IllustrativeCard>
          ))}
        </div>
      </section>
      {/* Pastor's Welcome */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary/5 py-24 rounded-3xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 illustrative-border overflow-hidden rotate-2 bg-muted aspect-[4/5] max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1544168190-79c17527004f?w=600&h=800&fit=crop" 
                alt="Head Pastor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-4 border-secondary illustrative-border -rotate-2 -z-0 max-w-md mx-auto" />
          </div>
          <div className="space-y-6">
            <h2 className="text-display text-4xl">A Word from our Pastor</h2>
            <blockquote className="text-2xl italic font-display text-primary leading-relaxed">
              "Beloved, our assembly is not just a building, but a sanctuary of love and spiritual growth. We believe in the transformative power of God's Word and are committed to walking with you in your spiritual journey."
            </blockquote>
            <div className="space-y-1">
              <p className="text-xl font-bold">Rev. Dr. Samuel Addo</p>
              <p className="text-muted-foreground">Head Pastor, PPA</p>
            </div>
            <Button variant="link" className="text-secondary p-0 text-lg group" asChild>
              <Link to="/about">Learn about our history <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}