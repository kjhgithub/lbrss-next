import hero from "@/assets/images/hero.png";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div
        className="hero min-h-[600px] lg:min-h-[800px]"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundPosition: "top",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/#testimonials">
              <button className="btn btn-primary">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
