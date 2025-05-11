import luke from "@/assets/images/luke-big.png";

function AboutMe() {
  return (
    <div className="mx-2 md:mx-0" id="aboutme">
      <div className="divider divider-start text-3xl font-semibold mt-12">
        About me
      </div>
      <div className="bg-base-100 p-8 mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] place-items-center gap-4">
        <div className="">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>

        <img
          src={luke.src}
          alt="Luke"
          className="rounded-full lg:rounded w-48 h-48 lg:h-60 object-cover"
        />
      </div>
    </div>
  );
}

export default AboutMe;
