import Container from "@/components/Container";
import bannerImg from "@/assets/images/banner/banner-img.jpg";
import { Button } from "@/components/ui/button";
import softStar from "@/assets/images/banner/svg/Soft-Star.svg";
import star from "@/assets/images/banner/svg/Star.svg";
import loveBlueish from "@/assets/images/banner/svg/love-blueish.svg";
import loveYellow from "@/assets/images/banner/svg/love-yellow.svg";
import loveCyan from "@/assets/images/banner/svg/love-cyan.svg";
import bannerBg from "@/assets/images/banner/bannerBg.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Banner = () => {
  const titleDescAnimate = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.6 }
    },
  };
  const titleDescChildren = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  const cardParent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const cardChild = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const animateControl = useAnimation();

  useEffect(() => {
    if (inView) {
      animateControl.start("visible");
    } else {
      animateControl.start("hidden");
    }
  }, [inView, animateControl]);

  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="bg-cover bg-no-repeat pt-24 pb-16"
    >
      <Container>
        {/* Title & Description */}
        <div className="flex flex-col lg:flex-row justify-between md:items-center gap-4">
          <motion.div
            variants={titleDescAnimate}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={titleDescChildren}>
              <h1 className="text-5xl md:text-6xl font-bold">
                Brand New <br /> event Packages
              </h1>
              <h2 className="mt-2 gradient-text text-[56px] font-bold leading-none">
                For Winter
              </h2>
            </motion.div>
            <motion.p
              variants={titleDescChildren}
              className="max-w-[50ch] text-secondary-dark text-xl my-8 leading-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.
            </motion.p>
            <motion.div variants={titleDescChildren}>
              <Button>Explore</Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="rounded-[800px] border-black border p-12 relative mx-auto lg:mx-0 my-3 lg:my-0"
          >
            <img className="w-24 absolute -top-6 sm:top-6" src={star} />
            <img
              className="w-24 absolute right-0 bottom-1 sm:bottom-16"
              src={softStar}
            />
            <img className="rounded-[800px]" src={bannerImg} />
          </motion.div>
        </div>
        {/* Cards */}
        <motion.div
          ref={ref}
          variants={cardParent}
          initial="hidden"
          animate={animateControl}
          className="flex flex-col md:flex-row mx-auto lg:mx-0 gap-6 items-center"
        >
          {/* Card1 */}
          <motion.div
            variants={cardChild}
            className="py-6 px-4 border-[3px] border-white rounded-3xl inline-block "
          >
            <div className="bg-[#685FD459] p-4 w-14 h-14 rounded-full flex justify-center items-center">
              <img className="w-10 h-10" src={loveBlueish} />
            </div>
            <p className="font-light text-secondary mt-8 max-w-[25ch] late-font leading-6">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </p>
          </motion.div>
          {/* Card2 */}
          <motion.div
            variants={cardChild}
            className="py-6 px-4 border-[3px] border-white rounded-3xl inline-block"
          >
            <div className="bg-[#F2C94C59] p-4 w-14 h-14 rounded-full flex justify-center items-center">
              <img className="w-6 h-6" src={loveYellow} />
            </div>
            <p className="font-light text-secondary mt-8 max-w-[25ch] late-font leading-6">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </p>
          </motion.div>
          {/* Card3 */}
          <motion.div
            variants={cardChild}
            className="py-6 px-4 border-[3px] border-white rounded-3xl inline-block"
          >
            <div className="bg-[#685FD459] p-4 w-14 h-14 rounded-full flex justify-center items-center">
              <img className="w-6 h-6" src={loveCyan} />
            </div>
            <p className="font-light text-secondary mt-8 max-w-[25ch] late-font leading-6">
              Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
              imperdiet sed id.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Banner;
