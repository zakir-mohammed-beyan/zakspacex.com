import FormField from "./FormField";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col w-full h-fit bg-transparent items-center justify-center"
    >
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full max-w-3xl pt-5 pb-10 px-10 my-12 rounded-lg shadow-lg">
          <form action="#">
            <fieldset
              className="border border-gray-300 
            rounded-md px-10 space-y-8 "
            >
              <legend className="text-xl font-bold px-5 text-center">
                Get in touch with us
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  label="Full Name"
                  placeholder="Enter your name"
                />
                <FormField
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone number"
                />
                <FormField
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                />
                <FormField
                  id="subject"
                  label="Email Subject"
                  placeholder="Enter the subject"
                />
              </div>
              <FormField
                id="message"
                label="Message"
                placeholder="Write your message here"
                isTextArea={true}
              />
              <div className="flex justify-center pb-8">
                <button
                  type="submit"
                  className="w-fit  px-6 py-4 bg-indigo-400
                   text-white font-semibold rounded-md
                   hover:bg-indigo-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
