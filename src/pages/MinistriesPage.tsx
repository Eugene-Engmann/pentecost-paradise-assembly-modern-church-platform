import React from 'react';
import { MinistriesData } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
export default function MinistriesPage() {
  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="bg-primary/5 py-24 mb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <h1 className="text-display">Our Ministries</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            There is a place for everyone at PPA. Join a community that resonates with your heart and walk.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MinistriesData.map((ministry, idx) => (
            <IllustrativeCard 
              key={ministry.id} 
              className={`relative overflow-hidden group ${idx % 2 !== 0 ? 'rotate-1' : '-rotate-1'}`}
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-2xl illustrative-border ${ministry.color}`}>
                  <ministry.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-display font-bold">{ministry.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {ministry.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-secondary">
                    <Clock className="w-4 h-4 mr-2" />
                    {ministry.meetingTimes}
                  </div>
                  <Button variant="outline" className="illustrative-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              {/* Decorative background shape */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 opacity-5 rounded-full ${ministry.color.split(' ')[0]}`} />
            </IllustrativeCard>
          ))}
        </div>
        {/* Call to Action */}
        <section className="mt-24 p-12 bg-secondary/10 sketch-card text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">Not sure where to start?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our welcome team is happy to help you find the right ministry for your gifts and interests.
          </p>
          <Button className="illustrative-border px-8 py-6 h-auto text-lg bg-primary">
            Speak with a Counselor
          </Button>
        </section>
      </div>
    </div>
  );
}