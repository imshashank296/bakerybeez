import { IoArrowForward } from "react-icons/io5";
import { SectionTitle } from "../Elements/SectionTitle";
import { CardMenu } from "../Fragments/CardMenu";

let menus = [
  {
    id: 1,
    name: "Choco Truffle Cake ",
    // image: "images/menu/matcha.jpg",
    image: "images/menu/cake1.jpeg",
    stars: 4.4,
    description: `A rich, moist chocolate cake layered with smooth, creamy chocolate ganache.`,
    price: 700,
  },
  {
    id: 2,
    name: "Butterscotch Cake",
    // image: "images/menu/nutella.jpg",
    image: "images/menu/cake2.jpeg",
    stars: 4.5,
    description: `A soft, caramel-infused cake topped with butterscotch cream and praline crunch.`,
    price: 400,
  },
  {
    id: 3,
    name: "Choco Doremon Cake",
    // image: "images/menu/oreo.jpg",
    image: "images/menu/cake3.jpeg",
    stars: 4.4,
    description: `A rich, chocolate-filled cake topped with creamy ganache and choco chips.`,
    price: 400,
  },
  {
    id: 4,
    name: "KitKat Cake",
    // image: "images/menu/strawberry.jpg",
    image: "images/menu/cake4.jpeg",
    stars: 4.6,
    description: `A chocolate-layered cake wrapped with KitKat bars and topped with gems.`,
    price: 475,
  },
  {
    id: 5,
    name: "PineApple Cake",
    // image: "images/menu/tiramisu.jpg",
    image: "images/menu/cake10.jpeg",
    stars: 4.7,
    description: `A light, fluffy cake layered with pineapple cream and juicy pineapple chunks.`,
    price: 450,
  },
  {
    id: 6,
    name: "Vanila Cake",
    // image: "images/menu/soon.png",
    image: "images/menu/cake6.jpeg",
    stars: "4.8",
    description: `A classic, fluffy cake layered with smooth vanilla cream and soft crumbs.`,
    price: 400,
  },
];

export let MenuSection = () => {
  return (
    <section id="menu" className="px-5 pt-24 whitespace-nowrap lg:px-20">
      <div className="flex items-center justify-between">
        <SectionTitle>Menu</SectionTitle>
        <a
          href="#menu"
          className="self-start font-semibold pt-1 flex items-center gap-2 group"
        >
          All Products
          <IoArrowForward className="h-5 w-5 group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      <div className="flex gap-3 overflow-x-scroll snap-x snap-mandatory pb-1 lg:gap-5 lg:px-0.5 lg:grid lg:grid-cols-3">
        {menus.map((menu) => (
          <CardMenu key={menu.id}>
            <CardMenu.Header image={menu.image} stars={menu.stars} />
            <CardMenu.Body name={menu.name}>{menu.description}</CardMenu.Body>
            <CardMenu.Footer
              price={menu.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            />
          </CardMenu>
        ))}
      </div>
    </section>
  );
};
