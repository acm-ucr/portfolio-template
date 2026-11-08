import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props: {
  title: string;
  picture: string;
  link: string;
  skills: string[];
}) => {
  return (
    <div className="w -1/4 relative z-0 flex items-center">
      <div className="flex justify-center">
        <Image
          className="relative z-10 rounded-2xl"
          src={props.picture}
          alt="photo"
          width={750}
          height={700}
        />
      </div>
      <div className="absolute z-20 mt-107 ml-6 flex w-15/16 justify-center rounded-xl bg-white p-10">
        <p className="font-inter -translate-x-68 -translate-y-5 text-xl font-bold">
          {props.title}
        </p>
      </div>

      <Link href={props.link} className="absolute right-15 z-30 -mt-12">
        <div className="absolute mt-2 -ml-2.5 translate-y-55 rounded-full border-1 border-black p-5"></div>
        <Image
          className="translate-y-60"
          src="/arrow.webp"
          alt={props.title}
          width={20}
          height={50}
        />
      </Link>

      <div className="absolute z-20 mt-115 flex translate-x-11 gap-4">
        {props.skills.map((skill, index) => (
          <div
            key={index}
            className="font-inter rounded-full border-1 border-black p-1 text-xs"
          >
            {props.skills[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
