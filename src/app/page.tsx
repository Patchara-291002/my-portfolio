import Image from "next/image";
import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import Project from "./component/Project/Project";
import GetInTouch from "./component/GetInTouch/GetInTouch";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <Project />
      <GetInTouch />
      <Footer />
    </>
  );
}
