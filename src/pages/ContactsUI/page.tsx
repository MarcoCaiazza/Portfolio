import emailjs from "emailjs-com";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactsUI() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();


    if (form.current) {
      emailjs
        .sendForm(
          "service_do7xk7c",
          "template_mrwtit4",
          form.current,
          "qZZamaI2RzhHQm9mV"
        )
        .then(
          
          () => {
            console.log("SUCCESS!");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };



  return (
    <div className="flex flex-col items-center pt-16">
      {/* titolo */}
      <div className="">
        <motion.h1 className="text-5xl"
        id="contacts"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: {
            opacity: { duration: 0.5 },
            staggerChildren: 0.05,
          },
        }}
            >
              {[... "Contacts"].map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: inView ? 1 : 0, // Cambia opacità quando il titolo è visibile
              x: inView ? 0 : 20, // Scivola verso la posizione iniziale
              transition: { delay: index * 0.1, type: "spring", stiffness: 50 }
            }}
          >
            {char}
          </motion.span>
        ))}
        </motion.h1>
      </div>

      {/* icone e foto */}

      <div className="flex justify-center max-w-screen-lg mx-auto w-full border-b border-gray-900/10 pb-12 pt-10">
        <div className="max-w-screen-lg flex flex-col items-center md:flex-row w-full">
          <section className="flex flex-col w-full md:w-1/2 md:text-left text-center order-last md:order-first pl-0 gap-5 h-full justify-between">
            <h2 className="text-2xl">
              Contattami tramite social media.
            </h2>
            <div className="flex gap-5 ">
              <a href="https://www.linkedin.com/in/marco-caiazza-8898a3266/" target="blank">
              <img
                src="linkedin.png"
                alt="img-linkedin"
                className="w-16 h-16"
                />
                </a>

                <a href="https://github.com/MarcoCaiazza/MarcoCaiazza" target="blank">
              <img
                src="githubContacts.png"
                alt="img-github"
                className="w-16 h-16"
                />
                </a>
            </div>
          </section>

{/* foto */}
          <div className="flex justify-end items-center w-full">
            <img
              src="fotoContatti.jpg"
              alt="img-profile"
              className="w-full max-w-[150px] w-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* EMAIL */}
      <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-7 mt-9">
        <div>
          <h1 className="text-2xl">Oppure inviami una mail.</h1>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col"
        >
          <div className="flex gap-10">

          <div className="flex-1 flex flex-col ">
            <label className="pb-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="border border-gray-800 rounded-lg p-2"
              required
            />
            <label className="mt-5 pb-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="border border-gray-800 rounded-lg p-2"
              required
            />
          </div>


          <div className="flex-1 flex flex-col ">
            <label className="pb-2">Message</label>
            <textarea
              name="message"
              className="h-full border border-gray-800 rounded-lg p-2 focus:border-grey-500 hover:border-gray-800 transition-colors duration-300"
            />
          </div>

          </div>


          <div className="mt-5 flex justify-end">
            <button type="submit" value="Send" className="bg-[rgb(31,41,55)] text-white p-4 rounded-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 hover:text-black transition-colors duration-300 w-1/6 text-lg">Invia Email</button>
          </div>
        </form>
      </div>
    </div>
  );
}
