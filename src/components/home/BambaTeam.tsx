"use client";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "Luca Cosivi",
    position: "Co-Founder",
    image: "/imagens/founders/luca-cosivi.png",
    redes: [
      {
        src: "/imagens/redes/linkedin.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/lucacosivi/",
      },
      {
        src: "/imagens/redes/x.png",
        alt: "X (Twitter)",
        link: "https://x.com/daluca_",
      },
    ],
  },
  {
    name: "Antonio Carneiro",
    position: "Co-Founder",
    image: "/imagens/founders/antonio-carneiro.png",
    redes: [
      {
        src: "/imagens/redes/linkedin.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/antonio-pedro-de-faro-carneiro/",
      },
      {
        src: "/imagens/redes/instagram.png",
        alt: "Instagram",
        link: "https://www.instagram.com/souantoniocarneiro/",
      },
    ],
  },
  {
    name: "Thomas Bourlon",
    position: "Co-Founder",
    image: "/imagens/founders/thomas-bourlon.jpg",
    redes: [
      {
        src: "/imagens/redes/linkedin.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/thomasbourlon/",
      },
    ],
  },
  {
    name: "Felipe Nunes",
    position: "Full-Stack Developer",
    image: "/imagens/user.jpeg",
    redes: [
      {
        src: "/imagens/redes/linkedin.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/devfelipenunes/",
      },
    ],
  },
  {
    name: "Larissa Freitas",
    position: "Community & Events Manager",
    image: "/imagens/founders/larissa-freitas.png",
    redes: [
      {
        src: "/imagens/redes/linkedin.png",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/manoela-franco-araujo-3b2670103/",
      },
    ],
  },
  {
    name: "Manoela Franco",
    position: "General Counsel",
    image: "/imagens/founders/manoela-franco.png",
    redes: [{ src: "/imagens/redes/linkedin.png", alt: "LinkedIn", link: "" }],
  },
];

const BambaTeam = () => {
  return (
    <div className="max-w-7xl mx-auto w-full xl:px-0 px-6 mb-20">
      <div className="flex flex-col md:flex-row gap-16  bg-rich-black rounded-2xl text-center md:text-left py-20 xl:px-0 px-6 relative">
        <div className="flex-1 gap-4 flex flex-col justify-center px-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold leading-8 text-[#F6F7F6]">
              A Team of Bambas
            </h2>
          </div>
        </div>
        <div
          className="overflow-x-auto flex md:grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4"
          style={{
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg flex-shrink-0 group flex flex-col justify-center items-center relative"
              style={{ flex: "0 0 auto" }}
            >
              <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden flex justify-center items-center">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out"
                  style={{
                    boxShadow: "0px 0px 30px 10px rgba(0, 122, 255, 0.2)",
                  }}
                ></div>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover h-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
              </div>

              <h4 className="text-lg font-semibold text-[#858585] mt-4 group-hover:text-white transition-all duration-300 ease-in-out">
                {item.name}
              </h4>

              <p className="text-[#858585] text-center group-hover:text-white transition-all duration-300 ease-in-out">
                {item.position}
              </p>

              <div className="flex gap-4 mt-4 justify-center">
                {item.redes.map((rede, i) => (
                  <Link
                    href={rede.link}
                    target="_blank"
                    key={i}
                    className="cursor-pointer"
                  >
                    <Image
                      src={rede.src}
                      alt={rede.alt}
                      width={24}
                      height={24}
                      className="filter brightness-0 invert-[0.6] grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-300 ease-in-out"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BambaTeam;
