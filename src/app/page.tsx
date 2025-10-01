import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import ProjectPage from "./component/project/ProjectPage";
import GetInTouchPage from "./component/get-in-touch/GetInTouchPage";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <ProjectPage />
      <GetInTouchPage />
      <Footer />
    </>
  );
}
