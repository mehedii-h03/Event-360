import Container from "@/components/Container";
import { useState, useRef, useEffect } from "react";

type TItem = {
  title: string;
  children: string;
};

const Item = ({ title, children }: TItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.height = isOpen ? `${contentHeight}px` : "0";
    }
  }, [isOpen]);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-height duration-500"
      >
        <p className="text-gray-700 p-4 pt-0">{children}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="mt-32">
      <Container>
        <div className="mb-16">
          <h2 className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-secondary-light md:text-lg mx-auto text-center max-w-[60ch]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          <Item title="What is Event 360?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Why should I hire you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>

          <Item title="How does Event 360 works?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="What is the procedure to book a event?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
