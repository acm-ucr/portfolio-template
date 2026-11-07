import { boxes } from "./whychoosemeData";

const WhyChooseMe = () => {
  return (
    <div className="flex min-h-screen w-full justify-between">
      <div className="w-1/3 p-13">
        <h2 className="mb-8 text-2xl font-bold">↳Why Choose Me?</h2>
      </div>

      <div className="flex w-2/3 flex-col p-12">
        <h2 className="mb-8 text-5xl font-bold">
          I'm dedicated and love making a change through design
        </h2>

        <div className="grid grid-cols-2 gap-5">
          {boxes.map((item) => (
            <div
              key={item.id}
              className="mb-5 flex h-80 flex-col rounded-2xl bg-gray-300 p-6"
            >
              <div>
                <div className="bg-pastel-blue flext mb-4 h-12 w-12 items-center justify-center rounded-xl">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-black">
                  {item.name}
                </h3>
              </div>

              <p className="text-md text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
