import Example from "@/components/home/example";
import Footer from "@/components/home/footer";

const Home = () => {
  return (
    <div>
      <Example text1="Some" text2="Props" text3="Here" />
      <Footer />
      <div className="flex h-screen w-screen items-center justify-center"></div>
    </div>
  );
};

export default Home;
