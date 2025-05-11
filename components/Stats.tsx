"use client";

import CountUp from "react-countup";
import { LuSmile, LuCirclePlus, LuFastForward, LuCog } from "react-icons/lu";

function Stats() {
  return (
    <div className="mx-2 md:mx-0">
      <div className="bg-base-100 mt-12 p-4 grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="flex flex-col justify-center items-center gap-2 bg-secondary text-secondary-content rounded p-8">
          <div className="flex gap-2 justify-center items-center">
            <LuSmile size={30} />
            <CountUp start={0} end={150} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="font-semibold text-3xl" />
              )}
            </CountUp>
          </div>
          <div className="">Satisfied customers</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 bg-secondary text-secondary-content rounded p-8">
          <div className="flex gap-2 justify-center items-center">
            <LuCirclePlus size={30} />
            <CountUp start={0} end={7} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="font-semibold text-3xl" />
              )}
            </CountUp>
          </div>
          <div className="">Satistic 2</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 bg-secondary text-secondary-content rounded p-8">
          <div className="flex gap-2 justify-center items-center">
            <LuFastForward size={30} />
            <CountUp start={0} end={3} enableScrollSpy={true} suffix=" days">
              {({ countUpRef }) => (
                <span ref={countUpRef} className="font-semibold text-3xl" />
              )}
            </CountUp>
          </div>
          <div className="">Very fast delivering</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 bg-secondary text-secondary-content rounded p-8">
          <div className="flex gap-2 justify-center items-center">
            <LuCog size={30} />
            <CountUp start={0} end={23} enableScrollSpy={true}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="font-semibold text-3xl" />
              )}
            </CountUp>
          </div>
          <div className="">Satistic 4</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
