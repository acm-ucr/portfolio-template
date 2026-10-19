const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-custom-pink flex w-2/3 flex-col items-center justify-center gap-8 rounded-xl p-8">
      <div className="bg-custom-light-blue w-2/3 p-5 text-center text-2xl">
        {" "}
        {props.text1}{" "}
      </div>

      <div className="flex w-2/3 flex-row gap-5">
        <div className="bg-custom-blue flex-1 rounded-full p-5 text-center text-2xl">
          {" "}
          {props.text2}{" "}
        </div>

        <div className="bg-custom-blue flex-1 rounded-full p-5 text-center text-2xl">
          {" "}
          {props.text3}{" "}
        </div>
      </div>

      <div className="bg-custom-dark-blue w-2/3 p-5 text-center text-2xl text-white">
        {" "}
        {props.text4}{" "}
      </div>
    </div>
  );
};

export default Example;
