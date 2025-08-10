import Swal from 'sweetalert2';

const Contact = () => {

    //static forms
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append("accessKey", "sf_71ieh8ndm403kc9c1l7khbfm");

        try {
            await fetch("https://api.staticforms.xyz/submit", {
                method: "POST",
                body: formData
            });
            //alert("Message sent successfully!");
            Swal.fire({
                icon: "success",
                title: "Wow...",
                text: "Message sent successfully!"
            });
            form.reset();
        } catch (err) {
            //alert("Something went wrong!");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });
            console.error(err);
        }
    };




    return (
        <div className="pt-16 bg-white dark:bg-gray-900 font-sans"> {/* Added font-sans for consistent typography */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Contact <span className="text-indigo-600 dark:text-indigo-400">Us</span>
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
                        We'd love to hear from you. Reach out for admissions, queries or feedback.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Address</h4>
                                    <p className="mt-1 text-gray-600 dark:text-gray-300">H234+H88 Tangi, Odisha</p>
                                    <div className="mt-4">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.6893689315225!2d85.99573007378208!3d20.55988680372037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a196c0e3c53f1c9%3A0x297acb1a709adc68!2sTetrahedron%20College!5e0!3m2!1sen!2sin!4v1753408339096!5m2!1sen!2sin"
                                            width="100%"
                                            height="200"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            className="rounded-lg shadow"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                                    <a className="mt-1 text-gray-600 dark:text-gray-300" href="tel:+917008222977">7008222977</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                                    <p className="mt-1 text-gray-600 dark:text-gray-300">info@tetrahedrontangi.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Office Hours</h4>
                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Open 24 hours (Residential College)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required // Added required attribute
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    // required // Added required attribute
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    required // Added required attribute
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required // Added required attribute
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4" // Increased rows for better usability
                                    required // Added required attribute
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-150 ease-in-out"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe5urZXF1DkCuz3nDYdyIgOWIoK8yGqRoQAwDFJDuIoZt3oKw/viewform?embedded=true" className="h-screen w-full md-h-full">Loading…</iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;