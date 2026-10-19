const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-dark-green flex w-2/3 flex-col items-center gap-10 justify-self-center rounded-2xl p-8">
      <div className="bg-pastel-blue font-display w-1/2 p-5 text-center text-2xl">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-7">
        <div className="font-display w-1/2 rounded-full bg-green-200 p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="font-display w-1/2 rounded-full bg-green-200 p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>

      <div className="bg-pastel-blue font-display w-1/2 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
