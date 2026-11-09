import socials from "@/data/socials/socials";

const ContactHeader = () => {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        I&apos;m always looking for new opportunities and collaborations. Feel
        free to reach out!
      </p>

      <div>
        {socials.map((social) => (
          <a key={social.name} href={social.href}>
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;
