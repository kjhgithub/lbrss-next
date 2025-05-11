import rob from "@/assets/images/rob.jpeg";
import jenny from "@/assets/images/avatar.png";
import ingo from "@/assets/images/ingo.jpeg";

function Testimonials() {
  return (
    <>
      <div className="mx-2 md:mx-0" id="testimonials">
        <div className="divider divider-start text-3xl font-semibold mt-12">
          Testimonials
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="card card-border bg-base-100 rounded shadow-sm">
            <div className="card-body">
              <div className="card-actions justify-end">
                <div className="badge badge-secondary">Badminton</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-24 rounded-full">
                    <img alt="Rob" src={rob.src} />
                  </div>
                </div>
                <div className="chat-header">
                  <time className="text-xs opacity-50">Juni, 24th</time>
                </div>
                <div className="chat-bubble text-xl">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
              </div>
              <h2 className="card-title">Rob from England</h2>
            </div>
          </div>

          <div className="card card-border bg-base-100 rounded shadow-sm">
            <div className="card-body">
              <div className="card-actions justify-end">
                <div className="badge badge-secondary">Squash</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-24 rounded-full">
                    <img alt="Jenny" src={jenny.src} />
                  </div>
                </div>
                <div className="chat-header">
                  <time className="text-xs opacity-50">Juni, 24th</time>
                </div>
                <div className="chat-bubble text-xl">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
              </div>
              <h2 className="card-title">Jenny from Germany</h2>
            </div>
          </div>

          <div className="card card-border bg-base-100 rounded shadow-sm">
            <div className="card-body">
              <div className="card-actions justify-end">
                <div className="badge badge-secondary">Tennis</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-24 rounded-full">
                    <img alt="Rob" src={ingo.src} />
                  </div>
                </div>
                <div className="chat-header">
                  <time className="text-xs opacity-50">Juni, 24th</time>
                </div>
                <div className="chat-bubble text-xl">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </div>
              </div>
              <h2 className="card-title">Ingo from Germany</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
