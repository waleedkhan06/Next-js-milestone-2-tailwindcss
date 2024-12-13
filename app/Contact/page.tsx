import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
     <Navbar />
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/bg1.jpg')", backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto h-full px-4 relative z-10
           text-white flex flex-col justify-between flex-grow">
           
           <h1 className="text-4xl text-center font-bold mt-6 mb-6">
           
             <span className="text-cyan-400 hover:text-blue-500 
             hover:underline hover:scale-110 transition-all duration-300">Contact</span>{' '}
             <span className="text-blue-500 hover:text-cyan-400 
             hover:underline hover:scale-110 transition-all duration-300">Me</span>
              </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
              {/*Contact Form */}
              <div className="bg-black p-8 border border-blue-600
               rounded-lg shadow-lg space-y-6">
                <h2 className="text-2xl font-semibold
                 text-gradient-to-r from-blue-500 to-cyan-400 mb-6
                  bg-clip-text text-transparent">
                  Send Me a Message
                </h2>
                <form className="space-y-4">
                  <div>
                  <label className="text-2xl font-semibold bg-gradient-to-r
                   from-blue-500 to-cyan-400 text-transparent bg-clip-text 
                   mb-2">
                   Name
                   </label>
                    <input
                      type="text"
                      className="w-full border border-blue-600 bg-black
                       text-cyan-500 p-3 rounded"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="text-2xl font-semibold bg-gradient-to-r
                     from-blue-500 to-cyan-400 text-transparent 
                     bg-clip-text mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full border border-blue-600 bg-black
                       text-cyan-500 p-3 rounded"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="text-2xl font-semibold bg-gradient-to-r
                     from-blue-500 to-cyan-400 text-transparent 
                     bg-clip-text mb-2">Message</label>
                    <textarea
                      className="w-full border border-blue-600 bg-black
                       text-cyan-500 p-3 rounded"
                      placeholder="Your Message"
                      rows={5}
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500
                   to-cyan-400 text-black px-6 py-3 rounded
                    hover:from-cyan-400 hover:to-blue-500 transition 
                    duration-300">
                    Send Message
                  </button>
                </form>
              </div>

               
           {/*Information and Map */}
              <div className="bg-black p-8 border border-blue-600 
              rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-semibold bg-gradient-to-r
                 from-blue-500 to-cyan-400 text-transparent bg-clip-text
                  mb-2">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  You can reach out to me through the form or by using the
                   contact details below:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">
                      Phone:</span> +92 3352121689
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Email:</span> contact@waleedkhan.com
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Address:</span> Karachi, Pakistan
                  </li>
                </ul>

                {/*Google Map*/}
                <div className="mt-6">
                  <h3 className="text-3xl font-semibold bg-gradient-to-r
                   from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-2">
                    Our Location
                  </h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.470718497418!2d67.02132781500495!3d24.86073488405283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6c62e7fb8f%3A0xb5e66f0f60dd8ef2!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693427299621!5m2!1sen!2s"
                      className="w-full h-full rounded-lg"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Contact;
