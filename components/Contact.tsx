import { LuPhoneOutgoing, LuMessageCircle, LuMail } from "react-icons/lu";

function Contact() {
  return (
    <div className="mx-2 md:mx-0 mt-12" id="contact">
      <div className="divider divider-start text-3xl font-semibold">
        Contact
      </div>
      <div className="bg-base-100 p-8 mt-6 flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <div className="font-semibold text-2xl text-primary w-fit xl:hidden">
            Lets get in touch
          </div>
          <div className="grid grid-cols-1 mt-6 xl:mt-0 gap-6">
            <div className="flex justify-start items-center gap-4">
              <LuPhoneOutgoing className="bg-primary text-primary-content rounded h-14 w-14 p-2" />
              <a href="tel:+491707777777" className="link link-hover">
                +49 17077 77 7 77
              </a>
            </div>
            <div className="flex justify-start items-center gap-4">
              <LuMessageCircle className="bg-primary text-primary-content rounded h-14 w-14 p-2" />
              <a href="https://wa.me/+491707777777" className="link link-hover">
                Whatsapp
              </a>
            </div>
            <div className="flex justify-start items-center gap-4">
              <LuMail className="bg-primary text-primary-content rounded h-14 w-14 p-2" />

              <a href="mailto:email@mail.com" className="link link-hover">
                email@mail.com
              </a>
            </div>
          </div>
        </div>
        <div className="font-semibold text-9xl text-primary hidden xl:flex flex-col gap-2 opacity-30 mr-[20%]">
          <span className="hover:-translate-x-20">Lets get</span>
          <span className="hover:translate-x-20">in touch</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
