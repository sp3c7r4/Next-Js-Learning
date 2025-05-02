import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container relative overflow-x-clip">
        <div className="absolute -left-32 top-16">
          <Image src={designExample1Image} alt="Design1" />
        </div>
        <div className="absolute -right-64 -top-16">
          <Image src={designExample2Image} alt="Design2" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-semibold rounded-full items-center">
            🌟$7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow
        </p>
        <form className="flex mx-auto border border-white/15 rounded-full p-2 mt-8 justify-center w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent sm:w-[81%] flex-1 px-4 "
          />
          <Button variant="primary" className="whitespace-nowrap" size="sm">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
