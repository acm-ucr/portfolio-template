import Image from "next/image";
import { clients } from "../../data/home/clients";

const ClientsCard = () => {
  return (
    <div className="mx-auto flex min-h-80 w-full max-w-6xl rounded-2xl border border-gray-400 bg-gray-50 text-gray-900">
      <div className="flex w-2/5 flex-col justify-center border-r border-gray-400 p-16">
        <p className="text-sm font-bold">Clients</p>
        <h2 className="mt-2 text-2xl font-bold">
          Focused to create a thoughtful and unique visual craft for brands
        </h2>
      </div>
      <div className="flex w-3/5 items-center justify-center p-8">
        <div className="flex w-96 flex-wrap justify-center gap-x-6 gap-y-12">
          {clients.map(({ name, logo }) => (
            <div key={name} className="flex w-28 items-center justify-center">
              <Image src={logo} alt={name} className="h-8 w-auto grayscale" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
