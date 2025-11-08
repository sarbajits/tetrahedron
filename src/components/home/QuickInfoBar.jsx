"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const QuickInfoBar = () => {
    const infoItems = [
        {
            icon: <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            label: "Location",
            value: "Tangi, Cuttack",
        },
        {
            icon: <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            label: "Contact",
            value: "+91-7008222977",
            href: "tel:+917008222977",
        },
        {
            icon: <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            label: "Email",
            value: "info@tetrahedrontangi.com",
            href: "mailto:info@tetrahedrontangi.com",
        },
        {
            icon: <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            label: "Office Time",
            value: "8:00 AM – 5:00 PM",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white shadow-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
                    {infoItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center justify-center sm:justify-start gap-3 bg-white/10 dark:bg-white/5 rounded-xl px-4 py-2 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                        >
                            <div className="flex-shrink-0 bg-white dark:bg-indigo-950 p-2 rounded-full shadow-sm">
                                {item.icon}
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-xs text-white/80 font-medium tracking-wide uppercase">
                                    {item.label}
                                </span>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="text-sm font-semibold text-white hover:text-yellow-300 transition-all duration-200"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="text-sm font-semibold text-white">
                                        {item.value}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default QuickInfoBar;
