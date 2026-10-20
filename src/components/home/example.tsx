const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="font-courier flex w-2/3 flex-col items-center gap-12 justify-self-center rounded-sm bg-red-100 p-8">
      <div className="bg-grey-blue w-1/2 p-5 text-center text-3xl">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-6">
        <div className="bg-deep-mauve w-full rounded-full p-5 text-center text-3xl">
          {props.text2}
        </div>
        <div className="bg-light-purple w-full rounded-full p-5 text-center text-3xl">
          {props.text2}
        </div>
      </div>

      <div className="bg-muted-green w-1/2 p-5 text-center text-3xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
