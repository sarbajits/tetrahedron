import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const CalltoAction = () => {
    return (
        <div className="bg-indigo-700 dark:bg-indigo-900">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-extrabold text-white sm:text-4xl"
                >
                    <span className="block">Ready to join us?</span>
                    <span className="block">Start your journey to academic excellence today.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lg leading-6 text-indigo-200"
                >
                    Admissions open for +2 Science with PCB+IT, PCB+Geology, PCMB, PCM+IT streams.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/contact"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white
                           transition-all duration-300 ease-in-out
                           hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto"
                    >
                        Contact for Admission
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default CalltoAction;
