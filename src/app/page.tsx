import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import Project from "./component/project/Project";
import GetInTouch from "./component/getInTouch/GetInTouch";
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
