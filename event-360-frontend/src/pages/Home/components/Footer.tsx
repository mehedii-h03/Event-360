import Container from "@/components/Container";
import { Link } from "react-router-dom";
import world from "@/assets/images/footer/world.svg";
import euro from "@/assets/images/footer/euro.svg";
import arrow from "@/assets/images/footer/arrow-right.svg";
import accessibility from "@/assets/images/footer/accessibility.svg";
import bgOrange from "@/assets/images/background/orange.png";
import bgPurple from "@/assets/images/background/purple.png";

export const Footer = () => {
  return (
    <footer className="relative mt-24 bg-[#111617] bg-opacity-90 backdrop-filter backdrop-blur-3xl z-10">
      <div className="absolute -top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between -z-10">
        <img
          className="object-cover w-full md:w-1/2 h-full opacity-20 "
          src={bgOrange}
          alt="Background Orange"
        />
        <img
          className="object-cover w-full md:w-1/2 h-full opacity-25"
          src={bgPurple}
          alt="Background Purple"
        />
      </div>
      <Container>
        <div className="grid gap-12 row-gap-4 lg:grid-cols-6 py-16">
          <div className="md:max-w-md lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center text-3xl font-extrabold gap-3"
            >
              <span className="text-white">Event </span>{" "}
              <span className="text-primary">360</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-12 row-gap-4 lg:col-span-5 md:grid-cols-5 ">
            <div>
              <p className="font-semibold tracking-wide text-white">Product</p>
              <ul className="mt-2 space-y-2 text-secondary-light">
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Browse
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Solution</p>
              <ul className="mt-2 space-y-2 text-secondary-light">
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Brainstorming
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Ideation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Wireframing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Research
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Resources
              </p>
              <ul className="mt-2 space-y-2 text-secondary-light">
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Support</p>
              <ul className="mt-2 space-y-2 text-secondary-light">
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Company</p>
              <ul className="mt-2 space-y-2 text-secondary-light">
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[#E2E8F0] transition-colors duration-300 hover:text-deep-purple-accent-400 flex gap-1"
                  >
                    Request Demo <img src={arrow} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between py-6 border-t sm:flex-row">
          <p className="text-[#E2E8F0]">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <ul className="flex flex-col gap-4 sm:flex-row items-center mt-4 space-x-4 sm:mt-0 text-secondary-light">
            <li className="text-[#E2E8F0]">Terms</li>
            <li className="text-[#E2E8F0]">Privacy</li>
            <li className="text-[#E2E8F0]">Contact</li>
            <li className="flex gap-1 text-[#E2E8F0]">
              EN
              <img src={world} alt="" />
            </li>
            <li className="flex gap-1 text-[#E2E8F0]">
              EUR
              <img src={euro} alt="" />
            </li>
            <li className="text-[#E2E8F0]">
              <img src={accessibility} alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
