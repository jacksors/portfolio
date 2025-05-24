import Link from "@/components/link";

const Navigation = () => {
  return <nav className="absolute bottom-12 w-full flex items-center justify-between px-10 md:px-20 lg:px-30 xl:px-40">
    <Link href="/"><p>Home</p></Link>
    <Link href="/about"><p>About</p></Link>
    <Link href="/experience"><p>Experience</p></Link>
    <Link href="/connect"><p>Connect</p></Link>
  </nav>;
}

export default Navigation;