
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 bg-black px-16 py-16 text-white flex-row gap-12 px-24 py-24"
    >
      <div className="w-1/2">
        <p className="text-lg font-medium text-xl">About me</p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-6xl">
          Solving big user experience problems
        </h2>

        <p className="mt-6 text-base text-gray-300 text-lg">
          I believe that good design can make a real difference in the world. It can help businesses attract new customers, build stronger relationships, and create a more positive brand image. 
        </p>
      </div>

      <div className="w-1/2">
        <Image
          src="/about/about.webp" 
          alt="image"
          width={600}
          height={700}
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;