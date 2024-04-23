import Container from "@/components/Container";
import UseGetApi from "@/hooks/UseGetApi";
import useScrollAnimation from "@/hooks/UseScrollAnimation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TEvents = {
  title: string;
  imageLink: string;
};

const EventItems = () => {
  const urlGet = "https://event-360-server-two.vercel.app/events";
  const { data: events } = UseGetApi(urlGet, "events");
  const { scaleValues, opacityValues, componentRef } = useScrollAnimation();

  return (
    <section>
      <Container>
        <div className="mb-14">
          <h3 className="text-4xl text-center font-bold mb-3">Event items</h3>
          <p className="text-secondary-light text-center max-w-[70ch] mx-auto text-lg">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        {/*cards */}
        <motion.div
          ref={componentRef}
          style={{ scale: scaleValues, opacity: opacityValues }}
          className="grid grid-cols-12 gap-4"
        >
          {Array.isArray(events?.data) &&
            events?.data?.map((e: TEvents, i: number) => (
              <div
                key={i}
                className={cn("p-6 bg-[#8682B01F] rounded-md", {
                  "col-span-12 lg:col-span-4": i === 0,
                  "col-span-12 md:col-span-6 lg:col-span-4": i === 1,
                  "col-span-12 lg:col-span-4  md:col-span-6 row-span-2":
                    i === 2,
                  "col-span-6 md:col-span-3 lg:col-span-2": i === 3,
                  "col-span-6 lg:col-span-2 md:col-span-3": i === 4,
                  "lg:col-span-4 col-span-12 ": i === 5,
                })}
              >
                <img src={e.imageLink} alt="" className="w-full" />
                <h5 className="text-xl font-semibold mt-3">{e.title}</h5>
              </div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default EventItems;
