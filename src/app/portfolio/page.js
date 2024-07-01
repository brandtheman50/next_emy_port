import { PageHeader } from "../components/PageHeader";

export default function Portfolio() {
  return (
    <div>
      <PageHeader
        firstTitle={"DESIGN"}
        secondTitle={"PORTFOLIO"}
        introTitle={`Welcome`}
        introP={`I have completed a diverse range of projects in UI/UX design, graphic design, and digital and print marketing. 
        From crafting intuitive user interfaces to developing eye-catching marketing materials, each project reflects my 
        dedication to exceeding expectations. Explore my work and discover how I bring ideas to life through thoughtful 
        design and strategic marketing solutions.`}
        introImg={null}
        introBtn={"Let's work together"} />
    </div>
  );
}