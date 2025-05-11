import Link from "next/link";

function page() {
  return (
    <div className="mx-2 md:mx-0" id="services">
      <div className="divider divider-start text-3xl font-semibold mt-12">
        Impressum
      </div>
      <div className="w-full bg-base-100 mt-6 mb-12 p-12 flex flex-col justify-center items-start">
        <span className="font-semibold">Anbieter</span>
        <span className="">Luke Barnes</span>
        <span className="">Musterstraße 1 64295 Musterstadt</span>
        <span className="font-semibold mt-6">Kontakt</span>
        <span className="">Telefon: 06151 0000</span>
        <span className="">E-Mail: info@mustermann.de</span>
        <span className="">Website: https://www.lbrrs.com</span>
        <span className="font-semibold mt-6">Registerangaben</span>
        <span className="">Registergericht: Amtsgericht Köln</span>
        <span className="">Registernummer: HR 0000</span>
        <span className="font-semibold mt-6">Datenschutz</span>
        <span className="">
          Unsere Datenschutzhinweise finden Sie unter:&nbsp;
          <Link href="/privacypolicy" className="link link-hover">
            https://www.lbrss.com/privacypolicy
          </Link>
        </span>
      </div>
    </div>
  );
}

export default page;
