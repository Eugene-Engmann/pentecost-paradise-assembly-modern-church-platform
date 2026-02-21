import React, { useState } from 'react';
import { SermonsData } from '@/lib/mockData';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Play, Search, Mic2, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const featuredSermon = SermonsData[0];
  const filteredSermons = SermonsData.filter(sermon => 
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="pb-24">
      <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-1">Featured Sermon</Badge>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                {featuredSermon.title}
              </h1>
              <div className="flex items-center space-x-6 text-primary-foreground/80">
                <div className="flex items-center"><Mic2 className="w-4 h-4 mr-2" /> {featuredSermon.speaker}</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {featuredSermon.date}</div>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 illustrative-border h-auto py-4 px-8 text-lg">
                <Play className="mr-2 w-6 h-6 fill-primary" /> Watch Latest Message
              </Button>
            </div>
            <div className="relative group">
               <div className="illustrative-border overflow-hidden rotate-2 border-white/20 aspect-video">
                 <img src={featuredSermon.thumbnail} alt="Sermon Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
               </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-display font-bold">Sermon Archive</h2>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search by title or speaker..." 
              className="pl-10 illustrative-border bg-muted/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <IllustrativeCard key={sermon.id} className="p-0 overflow-hidden group flex flex-col h-full">
              <div className="relative aspect-video">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {sermon.duration}
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="border-secondary text-secondary">{sermon.category}</Badge>
                  <span className="text-xs text-muted-foreground">{sermon.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors flex-1">
                  {sermon.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">{sermon.speaker}</p>
                <div className="pt-4 flex gap-2">
                  <Button variant="ghost" size="sm" className="w-full border-2 illustrative-border hover:bg-primary hover:text-white">
                    Watch
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full border-2 illustrative-border hover:bg-secondary hover:text-white">
                    Listen
                  </Button>
                </div>
              </div>
            </IllustrativeCard>
          ))}
        </div>
      </div>
    </div>
  );
}