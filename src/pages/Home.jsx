import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Whatsapp from '../components/home/Whatsapp';
import { motion } from 'framer-motion';
import CalltoAction from '../components/home/CalltoAction';

const Home = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeatureSection />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Call to Action */}
            <CalltoAction />

            <Whatsapp />

        </div>
    );
};

export default Home;