import Image from "next/image";
import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";
import Project from "./component/project/Project";
import GetInTouch from "./component/GetInTouch/GetInTouch";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <Project />
      <GetInTouch />
    </>
  );
}
