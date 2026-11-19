import ContactHeader from "@/components/contact/ContactHeader";
import AboutUs from "@/components/about/AboutUs";
import ClientsCard from "@/components/home/clientscard";

const Home = () => {
  return (
    <div>
      <ContactHeader />
      <AboutUs />
      <ClientsCard />
    </div>
  );
};

export default Home;
