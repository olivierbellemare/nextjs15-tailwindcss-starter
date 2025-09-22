import NextLogo from "@components/NextLogo";
import Link from "@node_modules/next/link";
export default function Home() {
  return (
    <>
      <section className="container mx-auto text-center">
        <h1>Home page</h1>
        <NextLogo className="text-White70 w-1/8 inline-block" />
        <h2>test</h2>
        <h3>test</h3>
        <p>test</p>
        <Link href="/about" className="text-off-white underline">About</Link>
        <button className="bg-cta text-off-white px-4 py-2 rounded-md m-4 cursor-pointer">Button</button>
      </section>
    </>
  );
}
