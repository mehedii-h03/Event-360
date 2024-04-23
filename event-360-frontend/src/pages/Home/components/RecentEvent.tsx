import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import UseGetApi from "@/hooks/UseGetApi";
import bgPurple from "@/assets/images/background/purple.png";

type TRecentEvent = {
  _id: string;
  imageLink: string;
};

const RecentEvent = () => {
  const urlGet = "https://event-360-server-two.vercel.app/recent-events";
  const { data: recentEvents } = UseGetApi(urlGet, "recent-events");
  return (
    <section className="relative mt-20 pt-20">
      <div className="absolute -top-0 left-0 -z-10">
        <img
          className="opacity-25 rotate-180 object-none h-auto max-w-full"
          src={bgPurple}
          alt="Background Purple"
        />
      </div>
      <Container className="flex flex-col lg:flex-row justify-between  lg:items-center gap-10">
        <div className="grid grid-cols-3 gap-5 mx-auto lg:mx-0">
          {Array.isArray(recentEvents?.data) &&
            recentEvents?.data?.map((e: TRecentEvent) => (
              <img key={e._id} src={e.imageLink} />
            ))}
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-6">Recent Events</h3>
          <p className="max-w-[55ch] text-secondary-light mb-10">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <Button>Learn More</Button>
        </div>
      </Container>
      
    </section>
  );
};

export default RecentEvent;
