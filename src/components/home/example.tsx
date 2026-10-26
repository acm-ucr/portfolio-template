const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-coral flex w-2/3 flex-col items-center gap-4 justify-self-center rounded-lg p-8">
      <div className="bg-skyblue w-1/2 p-5 text-center text-lg">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-mint w-full rounded-full p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="bg-mint w-full rounded-full p-5 text-center text-lg">
          {props.text3}
        </div>
      </div>

      <div className="bg-butter w-1/2 p-5 text-center text-lg text-white">
        {props.text4}
      </div>
    </div>
  );
};

export default Example;
