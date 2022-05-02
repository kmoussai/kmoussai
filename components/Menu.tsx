import Link from "next/link";
function Menu() {
  const menu = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ];
  return (
    <ul className="flex flex-grow justify-end">
      {menu.map(({ title, href }) => (
        <li
          key={title}
          className="mx-3 py-8 capitalize font-medium text-black text-base hover:text-sky-500"
        >
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
