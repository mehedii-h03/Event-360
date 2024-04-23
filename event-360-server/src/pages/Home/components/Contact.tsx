import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="ezy__contact10 light mt-32 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 order-2 mb-4 lg:mb-0">
              <div
                className="bg-center bg-no-repeat bg-cover min-h-[150px] w-full h-full rounded-lg hidden lg:block"
                style={{
                  backgroundImage: `url(https://orlandosydney.com/wp-content/uploads/2019/12/Event-Photography-by-orlandosydney.com-OS2_5654.jpg)`,
                }}
              >
                <div className="flex flex-col justify-center h-full -ml-14">
                  <div className="bg-gray-100 shadow dark:bg-gray-800 max-w-[300px] mt-6 flex items-center rounded-xl p-3">
                    <Mail />
                    <a className="text-lg font-medium ml-4">
                      event360@mail.com
                    </a>
                  </div>
                  <div className="bg-gray-100 shadow dark:bg-gray-800 max-w-[300px] mt-6 flex items-center rounded-xl p-3">
                    <Phone />
                    <a className="text-lg font-medium ml-4">+1 4151234567</a>
                  </div>
                  <div className="bg-gray-100 shadow dark:bg-gray-800 max-w-[300px] mt-6 flex items-center rounded-xl p-3">
                    <Link />
                    <a className="text-lg font-medium ml-4">event360.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white dark:bg-[#162231] rounded-xl border-[3px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl leading-none font-bold mb-4">
                  Contact Us
                </h2>
                <p className="text-lg mb-8 text-secondary-light">
                  Ut posuere felis arcu tellus tempus in in ultricies. Gravida
                  id nibh ornare viverra. Ultrices faucibus.
                </p>

                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-lg focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <Button className="rounded-lg">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
