'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


export default function AboutMeUI() {
  const [activeTab, setActiveTab] = useState<string>("skills");
  const [isSkillsClicked, setIsSkillsClicked] = useState<boolean>(false);
  // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  // const [mobileInView, setMobileInView] = useState(isMobile);
  const [isMobile, setIsMobile] = useState(false);
  const MotionImage = motion(Image);


useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  useEffect(() => {
    console.log("isMobile aggiornato:", isMobile);
  }, [isMobile]);
  

  const { ref: leftRef, inView: isLeftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: rightRef, inView: isRightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  interface Skills {
    src:string;
    alt:string;
  }

  const skills:Skills[] = [
    { src: "/html5.png", alt: "img-html" },
    { src: "/css.png", alt: "img-css" },
    { src: "/bootstrap.png", alt: "img-bootstrap" },
    { src: "/tailwind.png", alt: "img-tailwind" },
    { src: "/js.png", alt: "img-js" },
    { src: "/react.png", alt: "img-react" },
    { src: "/git.png", alt: "img-git" },
    { src: "/node.png", alt: "img-node" },
  ];

  interface Button {
    id:number;
    icon:string;
    iconBlack:string,
    alt:string,
    title:string
  }

  const buttons:Button[] = [
    {
      id: 1,
      icon: "/skills.png",
      iconBlack: "/skillsB.png",
      alt: "img-skills",
      title: "Tecnologie",
    },
    {
      id: 2,
      icon: "/certifications.png",
      iconBlack: "/certificationsB.png",
      alt: "img-certifications",
      title: "Certificazione",
    },
    {
      id: 3,
      icon: "/experience.png",
      iconBlack: "/experienceB.png",
      alt: "img-experience",
      title: "Professione",
    },
  ];

  const tabChange = (id: number) => {
    if (id === 1) {
      setActiveTab("skills");
      setIsSkillsClicked(true);
      // setTimeout(() => setIsSkillsClicked(false), 1000);
    } else if (id === 2) {
      setActiveTab("certifications");
    } else if (id === 3) {
      setActiveTab("experience");
    }
  };



  // <div className="w-[300px] md:w-auto">

  return (
    <>
      <span id="about" className="text-transparent">
        mi presento
      </span>
      <div className="flex flex-col items-center">
        <div className="max-w-screen-lg border-b border-gray-900/20 pb-20 ">
          <div className="flex flex-col items-center justify-center max-w-screen-lg mt-14">
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
              {[..."Mi presento"].map((char, index) => (
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
           <div className="w-[300px] md:w-auto ">

            <p className="pt-3 text-center sm:text-left">
              Sono un appassionato di front-end development e mi piace
              realizzare progetti semplici, esteticamente piacevoli e facili da
              usare.
            </p>
            <p className="pt-3 text-center sm:text-left">
              Nel tempo libero, mi piace allenarmi (o almeno ci provo!), in
              particolare {`all'aria`} aperta. <br /> Dopo ogni sessione, mi concedo
              sempre un pò di stretching per rilassare corpo e mente, tutto
              questo, mentre ascolto della buona musica come il Pop Rock 🎵.
            </p>
            <p className="pt-3 text-center sm:text-left">
              Inoltre, il mio hobby preferito è viaggiare ✈️: amo scoprire nuovi
              luoghi, immergermi in culture affascinanti e assaggiare del buon cibo locale.
            </p>
            </div>
          </div>

          <div className="flex flex-col justify-evenly max-w-screen-lg mt-20 md:flex-row ">
            <motion.div
              ref={leftRef}
              className="flex flex-col gap-5 order-first md:order-none justify-between md:w-1/4 w-full"
              initial={{ opacity: 0, transform: 'translateX(-200px)' }} // Modifica qui per il movimento
          animate={isLeftInView ? { opacity: 1, transform: 'translateX(0)' } : { opacity: 0, transform: 'translateX(-200px)' }}
              // initial={{ x: -200, opacity: 0 }}
              // animate={{
              //   x: isLeftInView ? 0 : -200,
              //   opacity: isLeftInView ? 1 : 0,
              // }}
              // animate={isLeftInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              style={{ visibility: isLeftInView ? "visible" : "hidden" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {buttons.map((btn) => (
                <button
                  key={btn.id}
                  className="bg-[rgb(31,41,55)] text-white flex items-center gap-5 pl-20 md:pl-10 rounded-xl h-[50px] hover:bg-sky-100 hover:text-black focus:bg-sky-100 focus:text-black transition-colors duration-500 hover:scale-105 transition-transform duration-500 relative group border border-transparent hover:border-3 hover:border-gray-300 focus:border-3 focus:border-gray-300 shadow-[10px_0px_20px_0px_rgba(120,120,120,0.6)] hover:shadow-none focus:shadow-none before:absolute before:inset-0 before:rounded-xl before:border-[3px] before:border-transparent before:bg-gradient-to-r before:from-transparent before:to-gray-300 before:opacity-0 group-hover:before:opacity-100 group-focus:before:opacity-100 before:transition-opacity before:duration-500"
                  onClick={() => tabChange(btn.id)}
                >
                  <Image
                    key={btn.id + 10}
                    src={btn.icon}
                    alt={btn.alt}
                    className="w-8 absolute transition-opacity duration-500 opacity-100 group-hover:opacity-0 group-focus:opacity-0"
                    width={32}
                    height={32}
                  />
                  <Image
                    key={btn.id + 20}
                    src={btn.iconBlack}
                    alt={btn.alt}
                    className="w-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100"
                    width={32}
                    height={32}
                  />
                  <p>{btn.title}</p>
                </button>
              ))}
            </motion.div>

            {/* <motion.div
              key={isMobile ? "mobile" : "desktop"}
              ref={rightRef}
              className="gap-10 p-4 overflow-hidden  rounded-3xl shadow-[5px_0px_10px_5px_rgba(150,150,150,0.3)] "
              initial={isMobile ? { y: 200, opacity: 0 } : { x:200, opacity: 0 }}
              
              
              animate={
                isRightInView
                  ? { y: 0, x: 0, opacity: 1 }
                  : isMobile
                  ? { y: 200, opacity: 0 }
                  : { x: 200, opacity: 0 }
              }
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >

              {activeTab === "skills" && (
                <motion.div
                  className="grid md:grid-cols-4 grid-cols-3 h-full gap-5 md:gap-0"
                  key="skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {skills.map((skill, index) => (
                    
                    <MotionImage
                      key={index}
                      src={skill.src}
                      alt={skill.alt}
                      width={64}
                      height={64}
                      className="w-14 h-14 m-auto"
                    
                      initial={{ scale: 1 }}
                      animate={{
                        x: isMobile ? 0 : isRightInView || isSkillsClicked ? 0 : 100,
                        y: isMobile ? (isRightInView || isSkillsClicked ? 0 : 100) : 0,
                        scale: isRightInView  ? [1, 1.3, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <div className="flex flex-col justify-between mt-auto h-full ">
                    <div className="flex justify-center pt-5">
                      <Image
                        src="/aulab.png"
                        alt="logo-aulab"
                        className="w-32 h-auto"
                        width={128}
                        height={128}
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-center items-center  pt-3 gap-2 md:gap-0">
                      <div>
                        <p className="text-3xl">2024</p>
                      </div>
                      <div className="flex flex-col pl-5 items-center md:items-baseline">
                        <motion.h1
                          className="font-semibold text-lg"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 1 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.05 },
                            },
                          }}
                        >
                          {"Specializzazione React.js"
                            .split("")
                            .map((char, index) => (
                              <motion.span
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                        </motion.h1>
                        <a href="certificato.png" target="blank">
                          <motion.p
                            className="text-[rgb(230,215,0)] text-md md:text-sm cursor-pointer font-normal hover:text-sky-800 transition-colors duration-300"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: { opacity: 1 },
                              visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.10 },
                              },
                            }}
                          >
                            {"Vedi Certificato".split("").map((char, index) => (
                              <motion.span
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </motion.p>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeTab === "experience" && (
                <div className="flex flex-col justify-between mt-auto h-full">
                  <div className="flex justify-center pt-5">
                    <Image
                      src="/kibernetes.png"
                      alt="logo-aulab"
                      className="w-32 h-auto"
                      width={128}
                      height={128}
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center md:pt-0 pt-4">
                  <motion.p
                          className="text-xl font-medium font-semibold"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 1 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.05 },
                            },
                          }}
                        >
                          {"Maggio 2023 - Presente"
                            .split("")
                            .map((char, index) => (
                              <motion.span
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                        </motion.p>

                        <motion.p
                          className="text-xl font-medium font-bold"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 1 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.10 },
                            },
                          }}
                        >
                          {"Jr. Developer"
                            .split("")
                            .map((char, index) => (
                              <motion.span
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, y: 10 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                        </motion.p>
                  </div>
                </div>
              )}
            </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
}
