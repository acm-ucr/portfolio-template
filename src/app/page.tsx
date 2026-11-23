import Example from "@/components/home/example";
import ServicesAndSkills from "@/components/home/servicesandskills";
import ProjectPage from "@/components/projects/projectpageinfo";

const Home = () => {
  return (
    <div>
      <Example text1="Some" text2="Props" text3="Here" />
      <ServicesAndSkills />
      <ProjectPage />
      <div className="flex h-screen w-screen items-center justify-center"></div>
    </div>
  );
};

export default Home;
