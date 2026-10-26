const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex flex-col w-2/3 items-center gap-10 justify-self-center bg-red-100 p-8">
      <div className="flex w-1/2 color1 p-5 text-left text-2xl items-center justify-center">{props.text1}</div>

      <div className="flex flex-row w-1/2 gap-10">
        <div className="flex w-1/2 flex-row gap-1 text-2xl">
          <div className="flex rounded-full w-full color2 p-5 text-left items-center justify-center">{props.text2}</div>
        </div>

        <div className="flex w-1/2 flex-row gap-1 text-2xl">
          <div className="flex rounded-full w-full color2 p-5 text-left items-center justify-center">{props.text2}</div>
        </div>
      </div>

      <div className="flex w-1/2 color3 p-5 text-2xl items-center justify-center">{props.text3}</div>
    </div>
  );
};

export default Example;
