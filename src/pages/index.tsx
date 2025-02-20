import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeUI from "./HomeUI/page";
import CurvaBianca from "@/components/CurvaBiancaUpUI/page";
import AboutMeUI from "./AboutMeUI/page";
import ProjectsUI from "./ProjectsUI/page";
import CurvaBiancaBottomUI from "@/components/CurvaBiancaBottomUI/page";
import CurvaBiancaUpUI from "@/components/CurvaBiancaUpUI/page";
import ContactsUI from "@/pages/ContactsUI/page";
import FooterUI from "@/components/FooterUI";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <main>
        <HomeUI />
        {/* <CurvaBiancaUpUI /> */}
        {/* <CurvaBianca /> */}
        <AboutMeUI />
        <ProjectsUI />
        <ContactsUI />
        <FooterUI />
      </main>
  );
}
