import Container from "@/components/Container";
import user1 from "@/assets/images/testimonial/user1.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  return (
    <section>
      <Container>
        {/* card */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="relative">
            <h3 className="text-4xl font-bold mb-20">
              What Our Client Said about us
            </h3>
            <div className="absolute top-28 left-12 sm:top-20 lg:top-6 lg:left-[93%] flex items-center">
              <CarouselPrevious className="w-12 h-12 opacity-30 hover:opacity-100" />
              <div className="w-5"></div>
              <CarouselNext className="w-12 h-12 opacity-30 hover:opacity-100" />
            </div>
          </div>
          <CarouselContent>
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3">
              <div className="bg-[#F8F9FF] hover:bg-primary hover:text-white inline-block p-4 md:p-10 rounded-3xl transition-all duration-500">
                <div className="flex items-center mb-4 gap-2 md:gap-5">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={user1}
                  />
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                      Amelia Joseph
                    </h5>
                    <h6 className="text-lg">Chief Manager</h6>
                  </div>
                </div>
                <p className="opacity-80 max-w-[28ch] md:max-w-[45ch] leading-8">
                  My vision came alive effortlessly. Their blend of casual and
                  professional approach made the process a breeze. Creativity
                  flowed, and the results were beyond my expectations.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3">
              <div className="bg-[#F8F9FF] hover:bg-primary hover:text-white inline-block p-4 md:p-10 rounded-3xl transition-all duration-500">
                <div className="flex items-center mb-4 gap-2 md:gap-5">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={user1}
                  />
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                      Amelia Joseph
                    </h5>
                    <h6 className="text-lg">Chief Manager</h6>
                  </div>
                </div>
                <p className="opacity-80 max-w-[28ch] md:max-w-[45ch] leading-8">
                  My vision came alive effortlessly. Their blend of casual and
                  professional approach made the process a breeze. Creativity
                  flowed, and the results were beyond my expectations.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3">
              <div className="bg-[#F8F9FF] hover:bg-primary hover:text-white inline-block p-4 md:p-10 rounded-3xl transition-all duration-500">
                <div className="flex items-center mb-4 gap-2 md:gap-5">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={user1}
                  />
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                      Amelia Joseph
                    </h5>
                    <h6 className="text-lg">Chief Manager</h6>
                  </div>
                </div>
                <p className="opacity-80 max-w-[28ch] md:max-w-[45ch] leading-8">
                  My vision came alive effortlessly. Their blend of casual and
                  professional approach made the process a breeze. Creativity
                  flowed, and the results were beyond my expectations.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3">
              <div className="bg-[#F8F9FF] hover:bg-primary hover:text-white inline-block p-4 md:p-10 rounded-3xl transition-all duration-500">
                <div className="flex items-center mb-4 gap-2 md:gap-5">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    src={user1}
                  />
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                      Amelia Joseph
                    </h5>
                    <h6 className="text-lg">Chief Manager</h6>
                  </div>
                </div>
                <p className="opacity-80 max-w-[28ch] md:max-w-[45ch] leading-8">
                  My vision came alive effortlessly. Their blend of casual and
                  professional approach made the process a breeze. Creativity
                  flowed, and the results were beyond my expectations.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
