import Example from "@/components/home/example";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example
        top_text="Some"
        left_text="Props"
        right_text="Props"
        bottom_text="Here"
      />
    </div>
  );
};

export default Home;
