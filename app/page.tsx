import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="leading-normal text-center">Starter page</h1>
      </div>
      <div className="bg-green-light">
        <p className="font-lato">lato</p>
        <p className="font-EB-Garamond font-normal">EB-Garamond</p>
        <p className="eb-garamond">Layer utility EB-Garamond</p>
      </div>

      {/* H E R O section */}
      <section className="bg-green-light">
        <p className="font-lato">titre</p>
        <p className="font-EB-Garamond font-normal">subtitle</p>
        <a href="/contact" className="">bouton go to contact page</a> 
      </section>
    
      {/* T O T O section */}
      <div className="bg-green-light">
        <p className="font-lato">textfirst</p>
        <p className="font-EB-Garamond font-normal">textsecond</p>
        <p className="font-EB-Garamond font-normal">textthird</p>
        <p className="font-EB-Garamond font-normal">textfourth</p>
        
        {/* Sous-section */}
        <div className="mt-2">
          <h3 className="font-lato text-lg font-semibold mb-2">subSection.title</h3>
          <p className="font-EB-Garamond font-normal">subSection.content</p>
        </div>
      </div>
    </>
  );
}
