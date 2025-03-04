import React from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  // eslint-disable-next-line
  const [name, setName] = React.useState("");
  // eslint-disable-next-line
  const [email, setEmail] = React.useState("");
  // eslint-disable-next-line
  const [message, setMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // template_a6xw1fv service_vga1zef fIH415Mggf_Q2FylC 

    emailjs.sendForm('service_2azjalg', 'template_84pkviq', e.target, '4grrKH2QmY9Wd42z2')
      .then((result) => {
          alert("Email sent Sucessfully!!")
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <section id="contact" className="relative  text-white">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLQRlIUf9EogR7xuhqJPidd8&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                <br/>
                WestLafayette, Indiana, USA <br/>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              {/* <a href="mailto:chandrika.mjee@gmail.com" className="text-indigo-400 leading-relaxed"> */}
              <a href="mailto:chandms.usa@gmail.com" className="text-indigo-400 leading-relaxed">
              EMAIL
              </a>
            </div>
          </div>
        </div>
        <form
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid? */}
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="text-black w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-black w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="text-black w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
