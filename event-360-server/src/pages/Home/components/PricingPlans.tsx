import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Check, MoveRight } from "lucide-react";
import rocketSvg from "@/assets/images/pricing/RocketLaunch.svg";
import stackSvg from "@/assets/images/pricing/Stack.svg";
import packageSvg from "@/assets/images/pricing/Package.svg";
import bgTurquoiseDark from "@/assets/images/background/turquoise-dark.png";

const PricingPlans = () => {
  return (
    <section className="my-32 relative ">
      <div
        className="absolute -top-16 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 0% 20%, rgba(209, 76, 242, 0.2) 0%, transparent 50%)",
          backgroundSize: "cover",
        }}
      />
      <Container>
        <div className="mb-20">
          <h3 className="text-4xl text-center font-bold mb-3">
            Explore our pricing plans
          </h3>
          <p className="text-secondary-light text-center max-w-[110ch] mx-auto text-lg">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between place-items-center md:gap-5 gap-12">
          {/* card 1 */}
          <div className="inline-block bg-white border-2 border-[#f5f6f7] rounded-3xl inter-font z-10 overflow-hidden">
            <div className="border-t-4 border-[#F249C8] py-5">
              <div className="flex justify-between mb-8 p-5">
                <div className="p-5 bg-[#FEEDFA] rounded-md">
                  <img src={packageSvg} alt="" />
                </div>
                <h5 className="text-5xl text-[#F249C8] font-bold">$21</h5>
              </div>
              <div className="p-5">
                <h6 className="font-semibold text-2xl mb-2 text-[#061C3D]">
                  Standard
                </h6>
                <p className="max-w-[40ch] text-[#42526B]">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button className="mt-6 mb-8 gap-2" variant="outline">
                  Get this package
                  <MoveRight />
                </Button>
              </div>
              <div className="border-t border-[#E6E8EC] pt-8 px-5 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">User Dashboard</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Post 3 Ads per week</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Multiple images & videos</p>
                </div>
                <div className="flex items-center gap-3 opacity-40">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B] line-through">
                    Basic customer support
                  </p>
                </div>
                <div className="flex items-center gap-3 opacity-40">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B] line-through">
                    Special ads badge
                  </p>
                </div>
                <div className="flex items-center gap-3 opacity-40">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B] line-through">
                    Max 12 team members
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="relative">
            <div className="bg-primary px-4 py-2 rounded-t-lg absolute left-1/2 transform -translate-x-1/2 -top-9">
              <p className="text-base font-medium text-white ">Recommended</p>
            </div>
            <div className="inline-block bg-white border-2 border-[#f5f6f7] rounded-3xl inter-font z-10 overflow-hidden">
              <div className="border-t-4 border-primary py-5">
                <div className="flex justify-between mb-8 p-5">
                  <div className="p-5 bg-[#FEEDFA] rounded-md">
                    <img src={stackSvg} alt="" />
                  </div>
                  <h5 className="text-5xl text-primary font-bold">$49</h5>
                </div>
                <div className="p-5">
                  <h6 className="font-semibold text-2xl mb-2 text-[#061C3D]">
                    Premium
                  </h6>
                  <p className="max-w-[40ch] text-[#42526B]">
                    Quisque auctor erat velit, quis ultrices nisi vestibulum at.
                    Donec vitae purus lorem.
                  </p>
                  <Button className="mt-6 mb-8 gap-2" variant="outline">
                    Get this package
                    <MoveRight />
                  </Button>
                </div>
                <div className="border-t border-[#E6E8EC] pt-8 px-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B]">User Dashboard</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B]">Post 3 Ads per week</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B]">Multiple images & videos</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B]">Basic customer support</p>
                  </div>
                  <div className="flex items-center gap-3 opacity-40">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B] line-through">
                      Special ads badge
                    </p>
                  </div>
                  <div className="flex items-center gap-3 opacity-40">
                    <div className="bg-[#E7F5E8] p-1 rounded-full">
                      <Check className="text-[#6FCF97] h-3 w-3" />
                    </div>
                    <p className="text-[#42526B] line-through">
                      Max 12 team members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card-3 */}
          <div className="inline-block bg-white border-2 border-[#f5f6f7] rounded-3xl inter-font z-10 overflow-hidden">
            <div className="border-t-4 border-[#E54545] py-5">
              <div className="flex justify-between mb-8 p-5">
                <div className="p-5 bg-[#FEEDFA] rounded-md">
                  <img src={rocketSvg} alt="" />
                </div>
                <h5 className="text-5xl text-[#E54545] font-bold">$21</h5>
              </div>
              <div className="p-5">
                <h6 className="font-semibold text-2xl mb-2 text-[#061C3D]">
                  Business
                </h6>
                <p className="max-w-[40ch] text-[#42526B]">
                  In ornare ligula lorem, sit amet faucibus velit vehicula eget.
                </p>
                <Button className="mt-6 mb-8 gap-2" variant="outline">
                  Get this package
                  <MoveRight />
                </Button>
              </div>
              <div className="border-t border-[#E6E8EC] pt-8 px-5 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">User Dashboard</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Post 3 Ads per week</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Multiple images & videos</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Basic customer support</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Special ads badge</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7F5E8] p-1 rounded-full">
                    <Check className="text-[#6FCF97] h-3 w-3" />
                  </div>
                  <p className="text-[#42526B]">Max 12 team members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute  -z-10 top-0 right-0">
        <img src={bgTurquoiseDark} className="opacity-60" alt="" />
      </div>
    </section>
  );
};

export default PricingPlans;
