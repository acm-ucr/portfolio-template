const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 justify-self-center bg-red-100 p-8">
      <div className="color1 flex w-1/2 items-center justify-center p-5 text-left text-2xl">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-10">
        <div className="flex w-1/2 flex-row gap-1 text-2xl">
          <div className="color2 flex w-full items-center justify-center rounded-full p-5 text-left">
            {props.text2}
          </div>
        </div>

        <div className="flex w-1/2 flex-row gap-1 text-2xl">
          <div className="color2 flex w-full items-center justify-center rounded-full p-5 text-left">
            {props.text2}
          </div>
        </div>
      </div>

      <div className="color3 flex w-1/2 items-center justify-center p-5 text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
