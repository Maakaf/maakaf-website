import Link from "next/link";

const links: string[] = ["עמוד הבית", "קהילה", "הפרויקטים", "מי אנחנו"];

const Navbar: React.FC = () => {
  return (
    <ul className="flex gap-2">
      {links.map((link) => (
        <li key={link}>
          <Link href="/">{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
