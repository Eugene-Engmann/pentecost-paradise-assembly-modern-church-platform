import { Users, Heart, Shield, Baby, BookOpen, Music, Mic2, Calendar } from "lucide-react";
export const ChurchInfo = {
  name: "Pentecost Paradise Assembly",
  location: "Paradise Avenue, Accra, Ghana",
  phone: "+233 24 123 4567",
  email: "info@ppa-church.org",
  mission: "To spread the undiluted word of God and nurture a vibrant community of Christ-centered believers.",
  vision: "A world transformed by the power of the Holy Spirit, one soul at a time.",
  history: "Founded in 1985, Pentecost Paradise Assembly started as a small prayer group and has grown into a beacon of hope and spiritual growth for the entire region."
};
export const ServiceTimes = [
  { day: "Sunday", time: "8:00 AM - 11:30 AM", title: "Main Worship Service" },
  { day: "Tuesday", time: "6:00 PM - 8:00 PM", title: "Bible Studies" },
  { day: "Friday", time: "6:00 PM - 9:00 PM", title: "Prayer Tower" },
];
export const LeadershipTeam = [
  {
    name: "Rev. Dr. Samuel Addo",
    role: "Head Pastor",
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=400&h=400&fit=crop",
    bio: "Rev. Dr. Samuel Addo has served in ministry for over 25 years with a passion for teaching the word."
  },
  {
    name: "Elder Margaret Mensah",
    role: "Presiding Elder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Elder Margaret provides administrative and spiritual guidance to the Assembly's leadership."
  },
  {
    name: "Pastor John Tetteh",
    role: "Youth Pastor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Pastor John is dedicated to empowering the next generation of believers."
  }
];
export const NavigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];
export const MinistriesData = [
  {
    id: "youth",
    name: "PEMEM Youth",
    description: "Empowering young people to lead Christ-centered lives through fellowship, worship, and training.",
    icon: Users,
    meetingTimes: "Saturdays at 4:00 PM",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "women",
    name: "Women's Movement",
    description: "A community of virtuous women dedicated to prayer, family, and spiritual excellence.",
    icon: Heart,
    meetingTimes: "Mondays at 6:00 PM",
    color: "bg-pink-100 text-pink-600"
  },
  {
    id: "men",
    name: "Men's Fellowship",
    description: "Building strong men of integrity through brotherhood and the study of the Word.",
    icon: Shield,
    meetingTimes: "Wednesdays at 7:00 PM",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    id: "children",
    name: "Children's Service",
    description: "Nurturing our little ones in the ways of the Lord with fun and biblical teachings.",
    icon: Baby,
    meetingTimes: "Sundays at 8:00 AM",
    color: "bg-yellow-100 text-yellow-600"
  }
];
export const SermonsData = [
  {
    id: "s1",
    title: "Walking in Divine Purpose",
    speaker: "Rev. Dr. Samuel Addo",
    date: "May 12, 2024",
    category: "Faith",
    thumbnail: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?w=800&q=80",
    duration: "45:20"
  },
  {
    id: "s2",
    title: "The Power of Persistent Prayer",
    speaker: "Pastor John Tetteh",
    date: "May 05, 2024",
    category: "Prayer",
    thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&q=80",
    duration: "38:15"
  },
  {
    id: "s3",
    title: "Abiding in His Presence",
    speaker: "Elder Margaret Mensah",
    date: "April 28, 2024",
    category: "Spiritual Growth",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
    duration: "52:10"
  },
  {
    id: "s4",
    title: "Victory Over Limitations",
    speaker: "Rev. Dr. Samuel Addo",
    date: "April 21, 2024",
    category: "Grace",
    thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80",
    duration: "41:05"
  }
];
export const EventsData = [
  {
    id: "e1",
    title: "National Prayer Convention",
    date: "June 15-20, 2024",
    description: "A powerful week of intercession and spiritual warfare for the nation.",
    location: "Main Sanctuary",
    type: "Convention",
    day: "15",
    month: "JUN"
  },
  {
    id: "e2",
    title: "Youth Leadership Summit",
    date: "July 02, 2024",
    description: "Developing the next generation of leaders in our community and church.",
    location: "Conference Hall",
    type: "Seminar",
    day: "02",
    month: "JUL"
  },
  {
    id: "e3",
    title: "Community Outreach Day",
    date: "July 25, 2024",
    description: "Extending the hands of Christ to our neighbors through service and love.",
    location: "Paradise District",
    type: "Outreach",
    day: "25",
    month: "JUL"
  }
];