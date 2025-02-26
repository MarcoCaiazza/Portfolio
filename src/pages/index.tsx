'use client'

import HomeUI from "./HomeUI/page";
import AboutMeUI from "./AboutMeUI/page";
import ProjectsUI from "./ProjectsUI/page";
import ContactsUI from "@/pages/ContactsUI/page";
import FooterUI from "@/components/FooterUI";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
      <main>
        <HomeUI />
        <AboutMeUI />
        <ProjectsUI />
        <ContactsUI />
        <FooterUI />
      </main>
  );
}
