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
    <div className="flex h-full w-full flex-col gap-y-8 bg-[#282828] p-6 md:p-20">
      <h1 className="font-inter text-5xl leading-[104px] font-semibold tracking-[-4.5px] text-[#FFF0E3] md:text-[98px]">
        Projects
      </h1>
      <p className="font-inter text-[34px] leading-[40px] font-semibold tracking-[-1px] text-[#FFF0E3]">
        {description}
      </p>
      <div>
        <div className="flex justify-between border-b-1 py-4 text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFF0E3]">
          <p>Client:</p>
          <p>{client}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4 text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFF0E3]">
          <p>Role:</p>
          <p>{role}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4 text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFF0E3]">
          <p>Date:</p>
          <p>{date}</p>
        </div>

        <div className="flex justify-between border-b-1 py-4 text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFF0E3]">
          <p>Preview:</p>
          <p>{preview}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
