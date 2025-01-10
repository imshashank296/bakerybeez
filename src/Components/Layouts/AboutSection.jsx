import { IoArrowForward } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Button } from "../Elements/Button";
import { SectionTitle } from "../Elements/SectionTitle";

export const AboutSection = () => {
  return (
    <section id="about" className="px-5 pt-24 lg:px-20">
      <div className="flex flex-col gap-5 md:gap-10 md:flex-row">
        <div className="bg-[url(../images/about-img.webp)] bg-center bg-cover rounded-2xl overflow-hidden w-full shadow-md">
          <div className="flex h-[400px] bg-dark/40 bg-gradient-to-r from-dark">
            <div className="self-center text-white px-10 lg:px-20">
              <h5 className="font-serif pb-3">Bakery Beez </h5>
              <p>
                Every Yaadi Ramawat creation is a reflection of beauty,
                tenderness, and deliciousness. We invite you to explore the
                infinite world of flavors with us and celebrate every moment
                with the beauty and deliciousness of our cakes..
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <SectionTitle>About Us</SectionTitle>

          <p className="pb-5">
            <span className="font-bold">Bakery Beez</span> was founded in 2024.
            We prioritize service excellence and the needs of our customers by
            building the most effective delivery and customer service team to
            achieve our goal of becoming an online cake shop with reliable {""}
            <span className="font-bold">one-click-away-service</span> which is
            reliable.
          </p>

          <div className="pb-10 flex items-center gap-3">
            <div className="p-3 bg-light rounded-full">
              <FaPhone className="fill-pink w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">(+91) 1800-1800</p>
              <p>Contact Us</p>
            </div>
          </div>

          <Button variant="bg-pink text-white">
            More
            <IoArrowForward className="fill-white h-5 w-5 group-hover:translate-x-1 transition-all" />
          </Button>
        </div>
      </div>
    </section>
  );
};
