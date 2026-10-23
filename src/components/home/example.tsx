const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-7/8 flex-col items-center gap-6 justify-self-center rounded-lg bg-red-200 p-8">
      <div className="bg-light-red w-1/2 p-4 text-center font-serif">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-med-red w-1/2 rounded-full p-4 text-center font-bold">
          {props.text2}
        </div>
        <div className="bg-med-red w-1/2 rounded-full p-4 text-center font-bold">
          {props.text2}
        </div>
      </div>

      <div className="bg-dark-red w-1/2 p-4 text-center font-mono text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
