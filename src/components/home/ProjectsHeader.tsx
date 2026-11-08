

type ProjectHeaderProps = {
    description: string;
    client: string;
    role: string;
    date: string;
    preview: string;
}


const ProjectsHeader = ({description, client, role, date, preview}:ProjectHeaderProps) => {
    return (
        <div className='flex w-full h-full p-6 md:p-20 flex-col bg-[#282828] gap-y-8'>
            <h1 className='font-inter font-semibold text-5xl md:text-[98px] leading-[104px] tracking-[-4.5px] text-[#FFF0E3]'>Projects</h1>
            <p className='font-inter font-semibold text-[34px] leading-[40px] tracking-[-1px] text-[#FFF0E3]'>{description}</p>
            <div>
                <div className='flex justify-between font-normal text-[16px] leading-[26px] tracking-[0px] text-[#FFF0E3] py-4 border-b-1'>
                    <p>Client:</p>
                    <p>{client}</p>
                </div>

                <div className='flex justify-between font-normal text-[16px] leading-[26px] tracking-[0px] text-[#FFF0E3] py-4 border-b-1'>
                    <p>Role:</p>
                    <p>{role}</p>
                </div>

                <div className='flex justify-between font-normal text-[16px] leading-[26px] tracking-[0px] text-[#FFF0E3] py-4 border-b-1'>
                    <p>Date:</p>
                    <p>{date}</p>
                </div>

                <div className='flex justify-between font-normal text-[16px] leading-[26px] tracking-[0px] text-[#FFF0E3] py-4 border-b-1'>
                    <p>Preview:</p>
                    <p>{preview}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsHeader