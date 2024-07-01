import { Footer } from "@/components/footer";
import Image from "next/image";
import heroImg from "@/assets/images/hero.jpeg";

import exploreImg from "@/assets/images/explore_img.png";
import swipenImg from "@/assets/images/swipen.png";
import newsletterImg from "@/assets/images/newsletter_img.png";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="sect h-[90svh] relative">
          <div>
            <Link href="/explore">Explore</Link>

          </div>
          <Image src={heroImg} alt="hero" fill className="object-cover" />
          <div className="absolute bg-[#233d4d] mix-blend-multiply inset-0"></div>
          <div className="relative text-white h-full flex flex-col items-center justify-center">
            <h1 className="md:text-7xl font-gloock text-4xl text-center font-bold">
              Transforming how we connect.
            </h1>
          </div>
          <div>

            <Link href="/sign-up">Sign Up</Link>
          </div>
        </section>
        <section className="sect flex flex-col md:flex-row gap-8">
          <div className="flex-1 md:pr-24">
            <h2 className="text-2xl font-gloock mb-6 md:text-4xl mb-4 font-bold">
              Revamp your love life
            </h2>
            <p className="text-3xl font-semibold text-[#233d4d]">
              At SnappyRomance, we&apos;re rewriting the rules of digital love. No more endless swiping, say hello to meaningful connections.
            </p>
          </div>
          <div className="flex-1 h-full grayscale">
            <Image src={exploreImg} alt="newsletter" className="object-cover h-full" />

          </div>
        </section>

        <section className="flex gap-24 flex-col md:flex-row sect">
          <div className="flex-1">

            <Image src={swipenImg} alt="swipen" className="object-cover h-full" />


          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-gloock mb-6 font-bold">
              Swipe and Match
            </h3>
            <p className="text-lg">
              Using a smart algorithm, SnappyRomance connects you with people you&apos;ll vibe with. Let&apos;s bring the &apos;spark&apos; back to online dating!
            </p>
          </div>
        </section>
        <section className="sect">
          <div className="flex max-w-4xl mx-auto">
            <div className="flex-1">
              <svg viewBox="0 0 200 200" fill="none" style={{
                background: "rgb(242, 242, 242)",
                transform: "rotate(0deg)",
                display: "block"
              }}>
                <path opacity="0.5" d="M200 200L200 3.49691e-05L-4.45153e-06 200L200 200Z" fill="rgb(0, 0, 0)"></path>
                <path opacity="0.5" d="M-8.74228e-06 200L200 200L0 -8.74228e-06L-8.74228e-06 200Z" fill="rgb(35, 61, 77)"></path>
              </svg>
            </div>
            <div className="flex-1">
              <svg viewBox="0 0 200 200" fill="none" style={{
                background: "rgb(242, 242, 242)",
                transform: "rotate(0deg)",
                display: "block"
              }}><path d="M200 100L0 0V200L200 100Z" fill="rgb(0, 0, 0)"></path></svg></div><div className="framer-12gku55-container"><svg viewBox="0 0 200 200" fill="none" style={{
                background: "rgb(242, 242, 242)",
                transform: "rotate(0deg)",
                display: "block"
              }}><path fill-rule="evenodd" clip-rule="evenodd" d="M200 200V0C89.543 0 0 89.5431 0 200H200Z" fill="rgb(0, 0, 0)"></path></svg></div><div className="flex-1"><svg viewBox="0 0 200 200" fill="none" style={{
                background: "rgb(242, 242, 242)",
                transform: "rotate(0deg)",
                display: "block"
              }}><path opacity="0.5" d="M200 200L200 3.49691e-05L-4.45153e-06 200L200 200Z" fill="rgb(0, 0, 0)"></path>
                <path opacity="0.5" d="M-8.74228e-06 200L200 200L0 -8.74228e-06L-8.74228e-06 200Z" fill="rgb(35, 61, 77)"></path>
              </svg>
            </div>
          </div>
        </section>
        <section className="flex gap-24 flex-col md:flex-row-reverse sect">
          <div className="flex-1">
            <div className="bg-gray-200 aspect-square"></div>

          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-gloock mb-6 font-bold">
              Share with your fans
            </h3>
            <p className="text-lg">
              With SnappyRomance, sharing your heart&apos;s content has never been easier. Create, upload, share and swoon!
            </p>
          </div>
        </section>
        <section className="sect pb-0 flex flex-col-reverse md:flex-row">
          <div>
            <Image src={newsletterImg} alt="newsletter" />
          </div>
          <div className="flex justify-center flex-col mx-auto max-w-2xl gap-4">
            <h2 className="text-2xl font-gloock mb-6 font-bold">
              Join Today
            </h2>
            <p className="text-lg">
              Ready to find the one? Or share your world with your fans? Whatever you&apos;re looking for, SnappyRomance has got you covered. Don&apos;t wait, start your love journey today!
            </p>
            <Button>Get on App Store</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
