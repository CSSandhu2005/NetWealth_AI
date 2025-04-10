"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll) ; 
  });

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Where AI Meets Finanace. <br /> Clarity Meets Wealth
        </h1>
        <p className="text-xl text-[#062823] mb-8 max-w-2xl mx-auto">
          Now Manage Your Finanace , Banking , Transactions And Literally
          Everything With The Help Of AI !! Let AI Track Your Spendings And Help
          You Build More Wealth By Saving More !
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-10">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Start Using
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/Banner.png"
              width={1280}
              height={720}
              alt="DashBoard PreView"
              className="rounded-4xl shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
