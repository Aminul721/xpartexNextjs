import Footer from "@/components/footer";
import Header from "@/components/header";
import Brand from "@/components/sections/brand";
import Construction from "@/components/sections/construction";
import CreateWebsite from "@/components/sections/createWebsite";
import DesignEngineering from "@/components/sections/designEngineering";
import DigitalExp from "@/components/sections/digitalExp";
import MockUP from "@/components/sections/mockUP";
import Portfolio from "@/components/sections/portfolio";
import WeDo from "@/components/sections/weDo";
import Image from "next/image";

export default function Home() {
  return (
    <div id="wrapper">
      <Header/>
      <main className="main">
        <CreateWebsite/>
        <DesignEngineering/>
        <Portfolio/>
        <Brand/>
        <Construction/>
        <WeDo/>
        <MockUP/>
        <DigitalExp/>
      </main>
      <Footer/>
    </div>
  );
}
