import Container from "@/components/Container";
import { Check } from "lucide-react";
import image1 from "@/assets/images/gallery/image1.png";
import image2 from "@/assets/images/gallery/image2.png";
import image3 from "@/assets/images/gallery/image3.png";
import image4 from "@/assets/images/gallery/image4.png";
import image5 from "@/assets/images/gallery/image5.png";
import image6 from "@/assets/images/gallery/image6.png";
import image7 from "@/assets/images/gallery/image7.png";
import image8 from "@/assets/images/gallery/image8.png";
import image9 from "@/assets/images/gallery/image9.png";
import image10 from "@/assets/images/gallery/image10.png";
import star from "@/assets/images/gallery/Star.svg";

const Gallery = () => {
  return (
    <section className="my-16">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div>
          <h3 className="text-4xl font-bold">Gallery</h3>
          <p className="text-secondary-light max-w-[55ch] text-lg my-9 leading-7">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#E7F5E8] p-1 rounded-full">
                <Check className="text-[#6FCF97] h-3 w-3" />
              </div>
              <p className="text-[#42526B]">One day pas access all lecture</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#E7F5E8] p-1 rounded-full">
                <Check className="text-[#6FCF97] h-3 w-3" />
              </div>
              <p className="text-[#42526B]">Lunch and Snack</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#E7F5E8] p-1 rounded-full">
                <Check className="text-[#6FCF97] h-3 w-3" />
              </div>
              <p className="text-[#42526B]">Meet Event Speaker</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#E7F5E8] p-1 rounded-full">
                <Check className="text-[#6FCF97] h-3 w-3" />
              </div>
              <p className="text-[#42526B]">Front Seat</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#E7F5E8] p-1 rounded-full">
                <Check className="text-[#6FCF97] h-3 w-3" />
              </div>
              <p className="text-[#42526B]">One day pas access all lecture</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* 1 */}
          <div className="relative">
            <img src={star} className="absolute -top-1/3 left-1/4 -z-50" />
            <img src={image3} className="ml-auto -z-10" />
            <img src={image6} className="ml-auto" />
          </div>
          {/* 2 */}
          <div>
            <img src={image10} className="z-10" />
            <img src={image4} />
            <img src={image5} />
          </div>
          {/* 3 */}
          <div>
            <img src={image1} />
            <img src={image9} />
            <img src={image7} />
          </div>
          {/* 4 */}
          <div>
            <img src={image2} />
            <img src={image8} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
