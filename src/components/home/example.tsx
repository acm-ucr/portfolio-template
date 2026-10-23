const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-slate flex w-2/3 flex-col items-center gap-5 justify-self-center rounded-lg py-10">
      <div className="bg-sky-blue w-1/4 p-5 text-center text-2xl">
        {props.text1}
      </div>

      <div className="flex w-1/4 gap-4">
        <div className="bg-blue flex-1 rounded-full p-5 text-center text-xl">
          {props.text2}
        </div>
        <div className="bg-indigo flex-1 rounded-full p-5 text-center text-xl text-white">
          {props.text2}
        </div>
      </div>

      <div className="bg-navy w-1/4 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
