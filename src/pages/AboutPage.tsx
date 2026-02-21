import React from 'react';
import { ChurchInfo, LeadershipTeam } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { Heart, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
export function AboutPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary/5 py-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-display">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated to the service of God and humanity since 1985.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* History & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {ChurchInfo.history}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Through decades of devotion, Pentecost Paradise Assembly has stood as a pillar of faith in the community. We are more than a congregation; we are a family bound by the love of Christ.
            </p>
          </div>
          <IllustrativeCard className="bg-secondary/5 border-secondary/20 rotate-1">
            <h3 className="text-2xl font-display font-bold text-secondary mb-4">Our Vision</h3>
            <p className="text-xl italic text-foreground leading-relaxed">
              "{ChurchInfo.vision}"
            </p>
          </IllustrativeCard>
        </section>
        {/* Mission Values */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-display text-3xl">Core Values</h2>
            <p className="text-muted-foreground">The principles that guide our walk with Christ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IllustrativeCard className="text-center space-y-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-red-600" />
              </div>
              <h4 className="font-display font-bold text-xl">Love First</h4>
              <p className="text-muted-foreground">We embrace everyone with the unconditional love of God.</p>
            </IllustrativeCard>
            <IllustrativeCard className="text-center space-y-4 rotate-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="text-blue-600" />
              </div>
              <h4 className="font-display font-bold text-xl">Integrity</h4>
              <p className="text-muted-foreground">Living a life that reflects the holiness of our calling.</p>
            </IllustrativeCard>
            <IllustrativeCard className="text-center space-y-4 -rotate-1">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="text-yellow-600" />
              </div>
              <h4 className="font-display font-bold text-xl">Power</h4>
              <p className="text-muted-foreground">Believing in the manifestation of the Holy Spirit's gifts.</p>
            </IllustrativeCard>
          </div>
        </section>
        {/* Leadership Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-display text-3xl">Our Leadership</h2>
            <p className="text-muted-foreground">Guided by shepherds after God's own heart.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {LeadershipTeam.map((leader, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="space-y-4 text-center"
              >
                <div className="aspect-square rounded-full illustrative-border overflow-hidden max-w-[240px] mx-auto border-4 border-primary/10 p-2">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-display font-bold">{leader.name}</h4>
                  <p className="text-secondary font-bold uppercase text-xs tracking-widest">{leader.role}</p>
                </div>
                <p className="text-sm text-muted-foreground px-4 italic">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}