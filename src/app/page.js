import { PageHeader } from "./components/PageHeader";

export default function Home() {
  const firstTitle = "UI/UX"
  const secondTitle = "DESIGNER"
  return (
    <div>
      <PageHeader
        firstTitle={"UI/UX"}
        secondTitle={"DESIGNER"}
        introTitle={`Hello, I'm Emersyn`}
        introP={`I design engaging and user-friendly experiences for websites, mobile interfaces, and emerging technologies. 
        With a background in psychology and digital marketing, I approach every challenge from the user's perspective, 
        ensuring inclusive and enjoyable interactions.`}
        introImg={"/profile_pic_4.png"}
        introBtn={"Need a designer?"}/>
    </div>
  );
}
