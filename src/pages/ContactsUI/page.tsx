import emailjs from "emailjs-com";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Toaster, toast } from "sonner";
import Image from "next/image";


export default function ContactsUI() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const message = form.current.message.value.trim();
      console.log(message);
      // IMPLEMENTARE IL BLOCCO DELL'INVIO DELLA MAIL SE NON CONTIENE MESSAGGI
      if (message !== "")
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
                toast.success("Messaggio Inviato!");
              }
            },
            (error) => {
              console.log("FAILED...", error.text);
              toast.error("Messaggio Fallito!");
            }
          );
    }
  };

  return (
    <>
      <div id="contacts" className="text-transparent" >
        contatti
      </div>
      <div className="flex flex-col items-center pt-14">
        {/* titolo */}
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl"
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
            {[..."Contatti"].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: inView ? 1 : 0, 
                  x: inView ? 0 : 20, 
                  transition: {
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-sm md:text-base text-center md:text-justify p-3">
            Sentiti libero di contattarmi inviando il modulo sottostante e ti
            risponderò il prima possibile.
          </p>
        </div>



        {/* EMAIL */}
        <div className="max-w-screen-lg mx-auto w-full flex flex-col gap-7 mt-10 rounded-lg p-10 bg-white">

          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <Toaster />
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex-1 flex flex-col">
                <label className="pb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="border border-gray-800 rounded-lg p-2 bg-[rgb(235,240,243)]"
                  required
                />
                <label className="mt-5 pb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="border border-gray-800 rounded-lg p-2 bg-[rgb(235,240,243)]"
                  required
                />
              </div>

              <div className="flex-1 flex flex-col" >
                <label className="pb-2">Message</label>
                <textarea
                  name="message"
                  className="h-[200px] md:h-full border border-gray-800 rounded-lg p-2 focus:border-grey-500 hover:border-gray-800 transition-colors duration-300 bg-[rgb(235,240,243)]"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                value="Send"
                className="bg-[rgb(31,41,55)] text-white flex items-center gap-5 p-5 rounded-xl h-[20px] md:h-[50px]
                 hover:bg-sky-100 hover:text-black focus:bg-sky-100 
                 focus:text-black transition-colors duration-500 hover:scale-105 
                 transition-transform duration-500 group border border-transparent 
                 hover:border-3 hover:border-gray-300 focus:border-3 focus:border-gray-300 
                 shadow-[10px_0px_20px_0px_rgba(120,120,120,0.6)] hover:shadow-none 
                 focus:shadow-none"
              >
                Invia Email
              </button>
            </div>
          </form>

        </div>
        <a href="#top" className="pt-10 animate-bounce">
            <Image src="freccia.png" alt="image-to-Top" />
          </a>
      </div>
    </>
  );
}
