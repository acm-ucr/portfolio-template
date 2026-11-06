import Example from "@/components/home/example";
import ServicesAndSkills from "@/components/home/servicesandskills";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="Some" text2="Props" text3="Here" />
      <ServicesAndSkills />
    </div>
  );
};

export default Home;
