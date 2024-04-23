import Container from "@/components/Container";
import companyLogo from "@/assets/images/clients/Company logo.svg";
import companyLogo1 from "@/assets/images/clients/Company logo (1).svg";
import companyLogo2 from "@/assets/images/clients/Company logo (2).svg";
import companyLogo3 from "@/assets/images/clients/Company logo (3).svg";
import companyLogo4 from "@/assets/images/clients/Company logo (4).svg";
import companyLogo5 from "@/assets/images/clients/Company logo (5).svg";
import companyLogo6 from "@/assets/images/clients/Company logo (6).svg";
import companyLogo7 from "@/assets/images/clients/Company logo (7).svg";

const Clients = () => {
  return (
    <section className="pt-20 pb-32 mb-14 bg-[#fcfcfc]">
      <Container>
        <h3 className="text-4xl text-center font-bold mb-20">
          Our Valuable Client
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-between place-items-center gap-24">
          <img src={companyLogo} className="w-ful h-full" />
          <img src={companyLogo1} className="w-ful h-full" />
          <img src={companyLogo2} className="w-ful h-full" />
          <img src={companyLogo3} className="w-ful h-full" />
          <img src={companyLogo4} className="w-ful h-full" />
          <img src={companyLogo5} className="w-ful h-full" />
          <img src={companyLogo6} className="w-ful h-full" />
          <img src={companyLogo7} className="w-ful h-full" />
        </div>
      </Container>
    </section>
  );
};

export default Clients;
