import React from "react";

export default function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-full py-10 md:pt-20 ssm:py-5 ssm:px-5 ssm:h-auto">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-secondary text-7xl ssm:text-3xl font-semibold">
        Aditya Ojha
      </h1>
      <h1 className="text-white text-6xl ssm:text-3xl font-semibold">
        Full Stack Developer
      </h1>
      <p className="text-white w-2/3 md:w-full ssm:w-full">
        I am a full-stack developer and open-source enthusiast with a passion
        for building dynamic and scalable web applications. I thrive on tackling
        challenging problems and contributing to innovative projects that push
        the boundaries of technology. My dedication to continuous learning and
        collaboration drives me to explore emerging trends and make meaningful
        contributions to the open-source community.
      </p>

      <a href="#contact">
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
          Contact Me
        </button>
        </a>
    </div>
  );
}
