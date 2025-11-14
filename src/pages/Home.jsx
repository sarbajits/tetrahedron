import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Whatsapp from '../components/home/Whatsapp';
import { motion } from 'framer-motion';
import CalltoAction from '../components/home/CalltoAction';
import styled, { createGlobalStyle } from "styled-components";
import QuickInfoBar from '../components/home/QuickInfoBar';
import Blogs from '../components/home/Blogs';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Info Bar */}
      <QuickInfoBar />

      {/* Features Section */}
      <FeatureSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blogs Section */}
      <Blogs />

      {/* Call to Action */}
      <CalltoAction />
      <Whatsapp />


    </div>
  );
};

export default Home;