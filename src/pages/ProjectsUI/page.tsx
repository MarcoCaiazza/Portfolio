'use client'

// import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function ProjectsUI() {
  const [imageClickedId, setImageClickedId] = useState<number>(0);

  const showImageClicked = (id: number) => {
    setImageClickedId(id);
  };

  const closeImage = (): void => {
    setImageClickedId(0);
  };

  interface Project {
    id:number;
    img:string;
    alt: string;
    title: string;
    description: string;
    github?: string;
    repository?: string;
  }

  const projects:Project[] = [
    {
      id: 1,
      img: "/calcolatrice.png",
      alt: "img-calculator",
      title: "Calcolatrice",
      description:
        "Ho sviluppato un progetto iniziale creando una calcolatrice utilizzando HTML, CSS e JavaScript. La logica principale dell'app si basa su una serie di funzioni, ognuna delle quali corrisponde ad una specifica operazione matematica (somma, sottrazione, moltiplicazione, divisione). Per calcolare il risultato finale, ho utilizzato il costrutto switch-case, che valuta il tipo di operazione selezionata dall'utente. Si tratta di un progetto semplice ma significativo, che ha rappresentato un ottimo punto di partenza per sviluppare le mie competenze nella programmazione",
      github: "https://github.com/MarcoCaiazza/Calculator?tab=readme-ov-file",
      repository: "https://marcocaiazza.github.io/Calculator/",
    },
    {
      id: 2,
      img: "/appmeteo.png",
      alt: "img-wheaterapp",
      title: "AppMeteo",
      description:
        "L'applicazione Meteo è un progetto sviluppato utilizzando tecnologie front-end come HTML, CSS e JavaScript. L'obiettivo dell'app è consentire agli utenti di consultare le previsioni meteo per diverse città in modo semplice e intuitivo. Per ottenere i dati meteorologici, l'app interroga l'API di Openweathermap, sfruttando le potenzialità delle funzioni asincrone di JavaScript tramite Async/Await.",
      github: "https://github.com/MarcoCaiazza/WeatherApp",
      repository: "https://marcocaiazza.github.io/WeatherApp/",
    },

    {
      id: 3,
      img: "/calcolatrice.png",
      alt: "img-calculator",
      title: "Games",
      description:
        "L'applicazione Games è un progetto sviluppato con React e bootstrap per lo styling. E' una piattaforma che consente di fare ricerche avanzate per trovare giochi, ed ogni pagina di gioco include descrizioni, immagini e informazioni sul genere ricercato. I dati vengono recuperati  dall'API di Rawg.io, mentre per la gestione dei dati degli utenti, utilizzo Supabase.",
    },
    {
      id: 4,
      img: "/bestmovies.png",
      alt: "img-bestmovies",
      title: "BestMovies",
      description:
        "L'applicazione BestMovies è un progetto sviluppato utilizzando tecnologie front-end come HTML, CSS e JavaScript. L'obiettivo dell'app è consentire agli utenti di consultare le previsioni meteo per diverse città in modo semplice e intuitivo. Per ottenere i dati meteorologici, l'app interroga l'API di Openweathermap, sfruttando le potenzialità delle funzioni asincrone di JavaScript tramite Async/Await.",
      github: "https://github.com/MarcoCaiazza/Marco-Caiazza-Progetto-Finale",
      repository: "https://bestmovies-marco-caiazza.vercel.app/",
    },
    {
      id: 5,
      img: "/appmeteo.png",
      alt: "img-portfolio",
      title: "Portfolio",
      description:
        "L'applicazione Meteo è un progetto sviluppato utilizzando tecnologie front-end come HTML, CSS e JavaScript. L'obiettivo dell'app è consentire agli utenti di consultare le previsioni meteo per diverse città in modo semplice e intuitivo. Per ottenere i dati meteorologici, l'app interroga l'API di Openweathermap, sfruttando le potenzialità delle funzioni asincrone di JavaScript tramite Async/Await.",
    },
  ];

  const selectedProject = projects.find((p) => p.id === imageClickedId);


  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-transparent " id="projects">i miei progetti</div>
        <div className="max-w-screen-lg border-b border-gray-900/20 pt-14 pb-20 w-[90%] md:w-auto">
          <div className="flex flex-col items-center justify-center max-w-screen-lg ">
            <h1
              className="md:text-5xl text-4xl font-medium md:font-normal"
              // ref={ref}
              // initial={{ opacity: 0 }}
              // animate={{
              //   opacity: inView ? 1 : 0,
              //   transition: {
              //     opacity: { duration: 0.5 },
              //     staggerChildren: 0.05,
              //   },
              // }}
            >
              {[..."I miei progetti"].map((char, index) => (
                <span
                  key={index}
                  // initial={{ opacity: 0, x: 20 }}
                  // animate={{
                  //   opacity: inView ? 1 : 0,
                  //   x: inView ? 0 : 20,
                  //   transition: {
                  //     delay: index * 0.1,
                  //     type: "spring",
                  //     stiffness: 50,
                  //   },
                  // }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <p className="pt-3 text-sm md:text-base">Una raccolta di progetti su cui ho lavorato.</p>
          </div>

          {/* <div className="sm:grid sm:grid-cols-3 mt-0 sm:mt-16 gap-10 bg-red-600 " */}

          <div className="flex flex-col md:grid md:grid-cols-3 md:mt-16 p-9 md:p-0 gap-20 md:gap-10"

          >
            {projects.map((project:Project) => (
              <div
                key={project.id}
                className="p-2 rounded-2xl flex flex-col shadow-[0px_0px_40px_rgba(200,200,200,1)] mt-5 sm:mt-0 hover:scale-105 transition-transform duration-300 items-center "
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    width={2400}
                    height={2400}
                    className="rounded-lg object-cover w-full h-[200px] transform transition-transform duration-500 ease-out hover:scale-110 cursor-pointer"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                    onClick={() => showImageClicked(project.id)}
                  />
                </div>

                <div className=" mt-10">
                  <h1 className="font-semibold text-xl ">{project.title}</h1>
                </div>

                {/* icone */}
                <div className="pt-3 pl-2 flex gap-3 mt-auto ">
                  <a href={project.github} target="blank">
                    {" "}
                    <Image
                      src="/githubblack.png"
                      alt="img-github"
                      className="block hover:scale-110 transition-transform duration-300"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href={project.repository} target="blank">
                    {" "}
                    <Image
                      src="/linkprogetto.png"
                      alt="img-link-progetto"
                      className="block hover:scale-110 transition-transform duration-300"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* sopra */}
        </div>

        {/* <AnimatePresence> */}
          {imageClickedId > 0 && (
            // div gradnde chiaro
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-70 "
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ duration: 0.3 }}
              onClick={closeImage}
            >
              {/* div piccolo contenente img */}
              <div
                className="relative flex flex-col justify-center items-center max-w-screen-sm border-2 rounded-lg p-2 bg-white"
                // initial={{ scale: 0.8, opacity: 0 }}
                // animate={{ scale: 1, opacity: 1 }}
                // exit={{ scale: 0.8, opacity: 0 }}
                // transition={{ duration: 0.3 }}
              >
                <div>
                  <Image
                    src={projects.find((p) => p.id === imageClickedId)?.img || "/fallback-image.jpg"}
                    alt={projects.find((p) => p.id === imageClickedId)?.alt || "image-default"}
                    className="rounded-lg object-cover w-auto h-auto cursor-pointer"
                    width={2400}
                    height={2400}
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0.1))",

                      // WebkitMaskImage:
                      //   "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                    }}
                  />
                  {selectedProject && (
                    <div>
                    <h1 className="font-semibold text-xl p-1 pt-2">{selectedProject.title}</h1>
                    <p className="p-1 font-light">{selectedProject.description}</p>
                    </div>
                  )}
                  {/* <h1 className="font-semibold text-xl p-1 pt-2">{projects.find((p) => p.id === imageClickedId)?.title}</h1>
                  <p className="p-1 font-light ">
                    {projects.find((p) => p.id === imageClickedId)?.description}@
                  </p> */}
                </div>
              </div>
            </div>
          )}
        {/* </AnimatePresence> */}
      </div>
    </>
  );
}
