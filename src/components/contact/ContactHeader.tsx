import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import socials from "@/data/socials/socials";

const ContactHeader = () => {
  return (
    <div className="bg-contact-bg text-contact-text min-h-screen px-12 py-24">
      <h1 className="mb-6 text-7xl font-bold">Contact</h1>

      <p className="mb-7 max-w-4xl text-2xl leading-relaxed font-semibold">
        I believe that good design can make a real difference in the world — It
        can help businesses attract new customers, build stronger relationships,
        and create a more positive brand image.
      </p>

      <div className="max-w-screen-8xl">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-b border-neutral-500 py-7 text-xl"
          >
            <LinkIcon size={20} strokeWidth={1.5} />
            <div>{social.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;
