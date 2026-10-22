interface ExampleProps {
  top_text: string;
  left_text: string;
  right_text: string;
  bottom_text: string;
}

const Example = ({
  top_text,
  left_text,
  right_text,
  bottom_text,
}: ExampleProps) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 justify-self-center rounded-lg bg-red-200 p-8">
      <div className="m-5 w-1/2 bg-blue-200 p-5 text-center text-3xl">
        {top_text}
      </div>

      <div className="m-5 flex w-1/2 flex-row gap-1 space-x-4">
        <div className="w-1/2 rounded-full bg-blue-400 p-5 text-center text-3xl">
          {left_text}
        </div>
        <div className="w-1/2 rounded-full bg-blue-400 p-5 text-center text-3xl">
          {right_text}
        </div>
      </div>

      <div className="m-5 w-1/2 bg-blue-600 p-5 text-center text-3xl text-white">
        {bottom_text}
      </div>
    </div>
  );
};

export default Example;
