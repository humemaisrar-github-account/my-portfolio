import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section className="text-white pt-36">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-11 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/download.jpg" width={700} height={700} alt="picture" />
        <div>
         <div> <h1 className="text-4xl font-bold pb-14 text-pink-400  hover:text-pink-700">About Me</h1></div>
          <p className="text-base lg:text-pretty text-pink-200">
            Hi, I'm Humema, a passionate web developer currently working on
            building my portfolio in Next.js. I'm also enrolled in an IT course
            at GIAIC, pursuing a course in Artificial intelligence,Web 3.O, &
            Metaverse,passionate about technology and constly learning new
            skills to stay up-to-date with the latest innovations. & I am recently completed .I specialize
            in front-end technologies like HTML, CSS, JavaScript, and React, and
            I'm expanding my knowledge in Next.js and Tailwind CSS.My goal is to
            become a successful web developer and IT specialist in the future,
            inshaAllah, creating impactful and user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
