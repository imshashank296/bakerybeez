import { Button } from "../Elements/Button";

export const ContactOrder = () => {
  return (
    <>
      <div id="contact" className="px-5 pt-20 pb-10 text-center lg:px-20">
        <div className="rounded-3xl shadow-md overflow-hidden bg-[url(../images/order-img.webp)] bg-center bg-cover">
          <div className="text-white py-14 bg-dark/70">
            <p>Contact Us For</p>
            <h4 className="font-serif font-semibold tracking-wider pb-1">
              Online Delivery
            </h4>
            <p className="pb-5">(+91) 18000-1800</p>

            <a
              href="https://www.instagram.com/bakerybeez?igsh=MWxmcW5zdXF1MjBybQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="bg-transparant border-2 border-white text-whte mx-auto active:scale-100 active:text-dark active:bg-white">
                Order Now!
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-5 pb-1 text-sm lg:px-20">
        <div className="flex gap-2 items-center">
          <img className="w-4 h-4" src="logo.png" alt="Logo" />
          <p className="font-serif tracking-wider">Bakery Beez</p>
        </div>
        <p className="text-xs">© 2024 | Developed by Shashank Mahawar.</p>
      </div>
    </>
  );
};
