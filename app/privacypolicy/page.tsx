import Link from "next/link";

function page() {
  return (
    <div className="mx-2 md:mx-0" id="services">
      <div className="divider divider-start text-3xl font-semibold mt-12">
        Datenschutzerklärung
      </div>
      <div className="w-full bg-base-100 mt-6 mb-12 p-4 flex flex-col justify-center items-start">
        <span className="font-semibold">
          Verantwortlicher im Sinne der DSGVO
        </span>
        <span className="">Some long ass text</span>

        <span className="font-semibold mt-6">Betroffenenrechte</span>
        <span className="">Some long ass text</span>

        <span className="font-semibold mt-6">Hosting</span>
        <span className="">Some long ass text</span>

        <span className="font-semibold mt-6">Other Stuff</span>
        <span className="">Some long ass text</span>
      </div>
    </div>
  );
}

export default page;
