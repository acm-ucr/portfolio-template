import socials from "@/data/socials";
import Link from "next/link";

function Footer() {
  return (
    <div className="grid h-60 w-full grid-cols-2 place-content-center gap-x-25 gap-y-8 bg-orange-300 p-12">
      <p className="col-span-2 text-5xl font-bold">hello@conor.io</p>
      <div className="flex flex-row gap-3 text-sm">
        {socials.map(({ name, link }, index) => (
          <Link href={link} key={index}>
            {name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-3 text-sm font-bold">
        <a href="/">Home</a>
        <a href="/">Case Studies</a>
        <a href="/">About</a>
        <a href="/">Content</a>
      </div>
    </div>
  );
}

export default Footer;
