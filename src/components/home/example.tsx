const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-8 justify-self-center rounded-lg bg-red-100 p-8 text-center text-xl">
      <div className="bg-skyblue w-1/2 p-5">{props.text1}</div>

      <div className="flex w-1/2 flex-row gap-4">
        <div className="bg-blue w-full rounded-full p-5">{props.text2}</div>
        <div className="bg-blue w-full rounded-full p-5">{props.text2}</div>
      </div>

      <div className="bg-darkblue w-1/2 p-5 text-white">{props.text3}</div>
    </div>
  );
};

export default Example;
