import Container from "@/components/Container";
import { Check } from "lucide-react";
import UseGetApi from "@/hooks/UseGetApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type TService = {
  _id: string;
  title: string;
  imageLink: string;
  features: [
    features1: string,
    features2: string,
    features3: string,
    features4: string,
    features5: string
  ];
  description: string;
};

const OurServices = () => {
  const [isHover, setIsHover] = useState<number | null>(null);

  const urlGet = "https://event-360-server-two.vercel.app/services";
  const { data: services } = UseGetApi(urlGet, "services");

  return (
    <section className="pb-40 relative" id="services">
      <div
        className="absolute -top-14 right-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(1, 229, 215, 0.2) 0%, transparent 50%)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute top-10 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 0% 40%, rgba(209, 76, 242, 0.2) 0%, transparent 20%)",
          backgroundSize: "cover",
        }}
      />

      <Container>
        <div className="mb-14">
          <h3 className="text-4xl text-center font-bold mb-3">Our Service</h3>
          <p className="text-secondary-light text-center max-w-[70ch] mx-auto text-lg">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        <div>
          {/* cards */}
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-4 row-auto items-stretch">
            {Array.isArray(services?.data) &&
              services?.data?.map((s: TService, i: number) => (
                <div
                  key={s?._id}
                  className="px-6 pt-6 pb-7  rounded-md transition-all
                flex flex-col items-center justify-between duration-500 z-10"
                  style={{ background: "rgba(0, 0, 0, 0.05)" }}
                  onMouseEnter={() => setIsHover(i)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <div>
                    <div>{isHover !== i && <img src={s.imageLink} />}</div>
                    <div className="mt-6">
                      <h4 className="text-3xl font-bold mb-4">{s.title}</h4>
                      {isHover === i && (
                        <p className="mb-8 text-secondary-light leading-normal">
                          {s.description}
                        </p>
                      )}
                      <div className="space-y-4">
                        {s.features?.map((f: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 plus-font"
                          >
                            <div className="bg-white p-1 rounded-full">
                              <Check className="text-[#6FCF97] h-3 w-3" />
                            </div>
                            <p className="text-lg">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {isHover === i && (
                    <div className="w-full">
                      <Button className="w-full">Checkout</Button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
