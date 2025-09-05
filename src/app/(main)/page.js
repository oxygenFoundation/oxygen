'use client';
import React, {useState } from "react";
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import 'boxicons/css/boxicons.min.css';
import Gallery from '@/components/Gallery';
 import About from '@/components/About';
import Contact from '@/components/Contact';
import Donate from '@/components/Donate';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Home() {
const router= useRouter();

  return (
    <React.Fragment>
       <Hero/>
      <Mission/>
      <Gallery/>
      <About/>
      <Donate/>
      <Contact/>
    </React.Fragment>
  );
}
