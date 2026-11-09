import { Link } from "lucide-react";
import socials from "@/data/socials/socials";

const ContactHeader = () => {
  return (
    <div className="min-h-screen bg-[#252525] px-12 py-24 text-[#F5F0E8]">
      <h1 className="mb-6 text-6xl font-bold">Contact</h1>

      <p className="mb-16 max-w-xl text-lg leading-relaxed">
        I believe that good design can make a real difference in the world — It
        can help businesses attract new customers, build stronger relationships,
        and create a more positive brand image.
      </p>

      <div className="max-w-3xl">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-b border-[#777777] py-7 text-xl"
          >
            <Link size={20} strokeWidth={1.5} />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;