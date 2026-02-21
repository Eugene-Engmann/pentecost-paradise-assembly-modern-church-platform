import React from 'react';
import { EventsData, ServiceTimes } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { Calendar as CalendarIcon, MapPin, Clock, Star } from 'lucide-react';
export default function EventsPage() {
  return (
    <div className="pb-24">
      <section className="bg-secondary/5 py-24 mb-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-display">Church Calendar</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay updated with our special conventions, community programs, and weekly fellowships.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Upcoming Special Events */}
        <section className="space-y-12">
          <div className="flex items-center space-x-2">
            <Star className="text-secondary fill-secondary" />
            <h2 className="text-3xl font-display font-bold">Upcoming Programs</h2>
          </div>
          <div className="space-y-8">
            {EventsData.map((event, idx) => (
              <IllustrativeCard key={event.id} className={`p-8 hover:shadow-xl transition-all ${idx % 2 === 0 ? 'rotate-0' : 'rotate-1'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground illustrative-border w-32 h-32 flex-shrink-0">
                    <span className="text-4xl font-bold">{event.day}</span>
                    <span className="font-bold tracking-widest">{event.month}</span>
                  </div>
                  <div className="space-y-4 flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h3 className="text-2xl font-display font-bold">{event.title}</h3>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-bold rounded-full border border-accent/20 h-fit">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg italic">"{event.description}"</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
                      <div className="flex items-center text-muted-foreground"><CalendarIcon className="w-4 h-4 mr-2 text-secondary" /> {event.date}</div>
                      <div className="flex items-center text-muted-foreground"><MapPin className="w-4 h-4 mr-2 text-secondary" /> {event.location}</div>
                    </div>
                  </div>
                </div>
              </IllustrativeCard>
            ))}
          </div>
        </section>
        {/* Weekly Activities */}
        <section className="bg-muted p-12 sketch-card">
          <div className="text-center mb-12">
            <h2 className="text-display text-3xl">Weekly Activities</h2>
            <p className="text-muted-foreground">Join us regularly as we build our spiritual foundations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ServiceTimes.map((service, idx) => (
              <div key={idx} className="bg-white/50 p-6 rounded-2xl border-2 border-dashed border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                    {service.day}
                  </span>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </div>
                <h4 className="font-display font-bold text-xl mb-2">{service.title}</h4>
                <p className="text-secondary font-bold text-sm">{service.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}