import Image from "next/image";
import { IconName, IoLocation, IoPersonSharp, IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <section className="flex flex-row flex-wrap md:justify-around md:px-0 px-4 justify-between items-center min-h-screen md:h-screen bg-[#3686f0]">
        {/* Text section */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-5">
              Access
              <br /> Funds, Embrace <br /> Convenience
            </h1>
            <p className="text-white text-base">
              The future of loan services is here. We're not just a financial <br />
              institution, we're your support system expertly helping you <br />
              through emergencies.
            </p>
            <button className="w-[120px] h-[40px] bg-white border border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer mt-7">
              Learn More
            </button>
          </div>
        </div>

        {/* Image section */}
        <Image
            alt="image"
              src="/happy-client.webp"
              className="rounded-xl"
              width={500}
              height={500}
            />
      </section>

      <section>
        <div className="py-38 flex flex-row flex-wrap md:justify-around justify-between md:px-0 px-4 items-center">
          <div className="flex flex-col">
            <h1 className="text-5xl text-blue-500 font-bold mb-5">
              Access
              <br /> Business Loans <br /> at your Convenience
            </h1>
            <p className="text-blue-500 text-sm">
              Speedy access to business loans, zero delays,
              <br />
              no unneccessary documetation.
            </p>
            <button className="w-[100px] h-[40px] bg-white border-1 border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer my-7">
              Learn More
            </button>
          </div>
          <div className="">
            <Image
            alt="image"
              src="/business1.avif"
              className="rounded-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3686f0]">
        <div className="flex flex-row flex-wrap md:justify-around justify-between">
        <div className="flex flex-col py-15 px-0">
          <h1 className="text-5xl text-white font-bold mb-5">
            Access
            <br /> Loans for other purposes
            <br />
          </h1>
          <p className="text-white text-sm">
            The future of loan services is here. We're not just a financial
            institution,
            <br /> we're your support sytem expertly helping you
            <br /> through the the worst of emergencies.
          </p>
          <button className="w-[100px] h-[40px] bg-white border-1 border-blue-700 text-blue-700 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer mt-7">
            Learn More
          </button>
        </div>
        <Image
        alt="image"
        src="/slider5.png"
        className="rounded-md"
        width={400}
        height={300}
        />
      </div>
      </section>
    </main>
  );
}
