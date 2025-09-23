import NextLogo from "@components/NextLogo";
import MyCard1 from "@components/MyCard1";
import MyCard2 from "@components/Mycard2";
import Link from "@node_modules/next/link";

export default function Home() {
  return (
    <>
      <section className="container mx-auto text-center">
        <h1>Home page</h1>
        <NextLogo className="text-White70 w-1/4 inline-block my-10" />
        <h2 className="mb-4"><span className="bg-White70 px-4 py-1 inline-block rounded-md">What is Lorem Ipsum?</span></h2>
        <h3 className="mb-4"><span className="bg-White30 px-4 py-1 inline-block">Lorem Ipsum is simply dummy text</span></h3>
        <p className="w-1/2 mx-auto">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Link href="/about" className="text-off-white underline">Go to About page</Link>
        <button className="bg-cta text-off-white px-4 py-2 rounded-md m-4 cursor-pointer">Button</button>
        <div className="grid grid-cols-2 gap-4">
          <MyCard1 
            title="My title" 
            description="Contrary to popular belief, Lorem Ipsum is not simply random text." 
            cardClassName="bg-off-white p-4 rounded-md" 
            titleClassName="text-title"
          />
          <MyCard2 className="bg-off-white p-4 rounded-md">
            <h2 className="text-title">Title</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </MyCard2>
        </div>
        
      </section>
    </>
  );
}
