import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-blue-500 px-3 flex justify-between items-center h-12">
        <Link className="text-white font-bold" href={'/'}>CURD oprations</Link>
        <Link className="bg-white px-2 rounded-md" href={'/addTopic'}>add topic</Link>
      </nav>
    );
}  