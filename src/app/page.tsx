import Header from "@/components/header";
import Brand from "@/components/sections/brand";
import Construction from "@/components/sections/construction";
import CreateWebsite from "@/components/sections/createWebsite";
import DesignEngineering from "@/components/sections/designEngineering";
import Portfolio from "@/components/sections/portfolio";
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
        {/* <Image className=''
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      </main>
      <footer >
        footer
      </footer>
    </div>
  );
}
