import NextLogo from "@components/NextLogo";
import VercelLogo from "@components/VercelLogo";
export default function Home() {
  return (
    <>
      <section className="container mx-auto text-center bg-red-400">
        <h1>Home page</h1>
        <NextLogo className="text-White70 w-1/4 inline-block" />
        <VercelLogo className="text-White70 w-1/4 inline-block" />
      </section>
    </>
  );
}
