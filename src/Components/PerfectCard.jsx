import React from "react";
import { Button } from "@nextui-org/button";

const PerfectCard = () => {
  return (
    <>
      <section className="flex  flex-col-reverse sm:flex-row gap-10 lg:gap-8 xl:gap-8 justify-between items-center mt-18 py-24 ">
        <div className="">
          <img className=" sm:w-[450px]" src="d-card3.svg" alt="" />
        </div>

        <div className="space-y-3 sm:space-y-6 sm:w-1/2 ">
          <h1 className="font-bold leading-tight text-2xl lg:text-4xl ">
            Find the Perfect Card for You
          </h1>
          <p className="text-secondary text-sm lg:text-base w-full max-w-[500px]">
            Unlocking the Power of Crypto, Both Virtually and Physically Manage
            your crypto effortlessly and spend it seamlessly with Wern. Our
            virtual card allows for instant and secure online transactions,
            while the physical Wern Card empowers you to convert and spend your
            crypto at millions of merchants worldwide. Experience the
            flexibility and convenience of both options, all within the secure
            and user-friendly Wern ecosystem.
          </p>
          <div className="space-y-2">
            <Button variant="solid" radius="full" size="lg" color="primary" className="font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfectCard;
