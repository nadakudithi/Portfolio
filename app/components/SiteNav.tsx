"use client";

import { BriefcaseBusiness, FileText, House, MessageCircleMore, UserRound } from 'lucide-react';
import { NavBar } from '@/app/components/NavBar';

const navItems = [
  { name: 'Home', url: '#hero', icon: House },
  { name: 'Work', url: '#work', icon: BriefcaseBusiness },
  { name: 'About', url: '#about', icon: UserRound },
  { name: 'Contact Me', url: '#contact', icon: MessageCircleMore },
  { name: 'Resume', url: '#', icon: FileText }
];

export function SiteNav() {
  return <NavBar items={navItems} />;
}
