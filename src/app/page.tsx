import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import Project from "./component/project/ProjectPage";
import GetInTouch from "./component/getInTouch/GetInTouchPage";
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
