type ProjectHeaderProps = {
  description: string;
  client: string;
  role: string;
  date: string;
  preview: string;
};

const ProjectsHeader = ({
  description,
  client,
  role,
  date,
  preview,
}: ProjectHeaderProps) => {
  return (
    <div className="bg-charcoal flex h-full w-full flex-col gap-y-8 p-6 md:p-20">
      <h1 className="font-inter text-cream text-5xl leading-[104px] font-semibold tracking-[-4.5px] md:text-[98px]">
        Projects
      </h1>
      <p className="font-inter text-cream text-[34px] leading-[40px] font-semibold tracking-[-1px]">
        {description}
      </p>
      <div className="text-cream text-[16px] leading-[26px] font-normal tracking-[0px]">
        <div className="flex justify-between border-b-1 py-4">
          <p>Client:</p>
          <p>{client}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4">
          <p>Role:</p>
          <p>{role}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4">
          <p>Date:</p>
          <p>{date}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4">
          <p>Preview:</p>
          <p>{preview}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
