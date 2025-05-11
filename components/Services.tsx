import maschine from "@/assets/images/machine-hor.png";
import racket from "@/assets/images/squashracket-hor.png";
import { LuExpand, LuAudioLines, LuBlocks } from "react-icons/lu";

function Services() {
  return (
    <div className="mx-2 md:mx-0" id="services">
      <div className="divider divider-start text-3xl font-semibold mt-12">
        Services
      </div>

      <div className="w-full bg-base-100 mt-6 grid grid-cols-1 lg:grid-cols-3 py-12 gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary text-base-100 flex justify-center items-center w-fit p-6">
            <LuExpand size="84" />
          </div>
          <div className="font-semibold text-xl">Service 1</div>
          <div className="font-light text-center px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary text-base-100 flex justify-center items-center w-fit p-6">
            <LuAudioLines size="84" />
          </div>
          <div className="font-semibold text-xl">Service 2</div>
          <div className="font-light text-center px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary text-base-100 flex justify-center items-center w-fit p-6">
            <LuBlocks size="84" />
          </div>
          <div className="font-semibold text-xl">Service 3</div>
          <div className="font-light text-center px-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </div>
        </div>
      </div>

      <figure className="diff aspect-16/9 h-96" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <img
            alt="maschine"
            src={maschine.src}
            className="object-cover object-top"
          />
        </div>
        <div className="diff-item-2" role="img">
          <img
            alt="Racket"
            src={racket.src}
            className="object-cover object-center"
          />
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  );
}

export default Services;
