import HeroSection from "@/components/hero";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-20 bg-gradient-to-b from-[#eefbf6] to-[#79dcbd]">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div
                key={index}
                className="ui-card relative h-96 overflow-hidden bg-[rgb(174,236,212)] bg-cover bg-bottom p-4 rounded-xl hover:cursor-pointer"
              >
                {/* Background rings */}
                <div className="absolute rounded-full border border-[#79dcbd] w-[22rem] h-[22rem] top-[24rem] right-24 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute rounded-full border border-[#79dcbd] w-[22rem] h-[22rem] top-0 right-24 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute rounded-full border border-[#79dcbd] w-[14rem] h-[14rem] top-[24rem] right-24 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute rounded-full border border-[#79dcbd] w-[14rem] h-[14rem] top-0 right-24 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute rounded-full border border-[#79dcbd] w-24 h-24 top-[24rem] right-24 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute rounded-full border border-[#79dcbd] w-24 h-24 top-0 right-24 translate-x-1/2 -translate-y-1/2"></div>

                {/* Image section */}
                <div
                  className="relative z-20 h-56 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${statsData.image})`,
                  }}
                ></div>

                {/* Text section */}
                <div className="flex">
                  <div className="mt-10 text-xl tracking-tight leading-none drop-shadow-sm text-[#062823] rounded-2xl font-semibold md:text-3xl">
                    {statsData.label}
                    <br />
                    {statsData.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-[#eefbf6] to-[#79dcbd]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Manage Your Finances With AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((data, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {data.icon}
                  <h3 className="text-xl font-semibold text-[#062823]">
                    {data.title}
                  </h3>
                  <p>{data.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#79dcbd]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {howItWorksData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                  {data.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#062823] my-4">
                  {data.title}
                </h3>
                <p className="text-gray-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Users Review
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsData.map((data, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div className="ml-4">
                      <div className="font-semibold">{data.name}</div>
                      <div className="text-sm text-gray-600">{data.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{data.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0e5748] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our AI Is Determined To Make You A Millionaire
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join a growing community already simplifying how they manage money.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="hover:bg-[#12896e] animate-bounce cursor-pointer">Enter NetWealth AI</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
