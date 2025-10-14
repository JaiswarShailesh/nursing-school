import ContactUsSection from "../components/ContactUsSection";

const ContactUsPage = () => {
  return (
    <>
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 text-center pt-42">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            Contact
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              Us
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            We’re here to assist you — reach out for any queries or information.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>
      <ContactUsSection />
    </>
  );
};

export default ContactUsPage;
