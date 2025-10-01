import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import ProjectPage from "./component/project/ProjectPage";
import GetInTouchPage from "./component/get-in-touch/GetInTouchPage";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <section id="about">
        <Introduction />
      </section>
      <TechStack />
      <section id="projects">
        <ProjectPage />
      </section>
      <section id="contact">
        <GetInTouchPage />
      </section>
      <Footer />
    </>
  );
}
