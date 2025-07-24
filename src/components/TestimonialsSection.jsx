import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Suman Rout',
        role: 'NEET Aspirant',
        avatar: 'https://placehold.co/100/3b82f6/ffffff?text=SR',
        text: 'The integrated coaching for NEET at Tetrahedron has been exceptional. The faculty\'s dedication and the study environment have helped me improve my rank significantly.'
    },
    {
        name: 'Priya Mohanty',
        role: 'JEE Aspirant',
        avatar: 'https://placehold.co/100/3b82f6/ffffff?text=PM',
        text: 'The self-study rooms with faculty support are a game-changer. I can focus better and get my doubts cleared immediately. The JEE coaching is top-notch.'
    },
    {
        name: 'Amit Patra',
        role: '+2 Science Student',
        avatar: 'https://placehold.co/100/3b82f6/ffffff?text=AP',
        text: 'The residential facilities are excellent. The disciplined environment helps me stay focused on my studies while also participating in extracurricular activities.'
    }
];

const TestimonialsSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-indigo-50 dark:bg-gray-800 py-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        What our students say
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-200">
                                "{testimonial.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
