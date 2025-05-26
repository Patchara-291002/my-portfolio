import Image from "next/image";
import Introduction from "./component/Introduction";
import TechStack from "./component/TechStack";

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
    </>
  );
}
