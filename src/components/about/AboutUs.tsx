import Image from "next/image";
import aboutImage from "@/public/about/about.webp";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col flex-row items-center gap-8 gap-12 bg-black px-16 px-24 py-16 py-24 text-white"
    >
      <div className="w-1/2">
        <p className="text-lg text-xl font-medium">About me</p>

        <h2 className="mt-4 text-4xl text-6xl leading-tight font-bold">
          Solving big user experience problems
        </h2>

        <p className="mt-6 text-base text-lg text-gray-300">
          I believe that good design can make a real difference in the world. It
          can help businesses attract new customers, build stronger
          relationships, and create a more positive brand image.
        </p>
      </div>

      <div className="w-1/2">
        <Image
          src={aboutImage}
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
