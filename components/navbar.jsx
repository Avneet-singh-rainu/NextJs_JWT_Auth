import Link from "next/link";
const navbar = () => {
  return (
    <div className="flex h-7 bg-zinc-900 w-full">
      <ul className=" w-full flex items-center justify-center gap-20">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/profile">
          <li>Profile</li>
        </Link>
        <Link href="/about">
          <li>ABout</li>
        </Link>
      </ul>
    </div>
  );
};

export default navbar;
