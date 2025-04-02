import {
  DownloadSimple,
  DribbbleLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import Profile from "../../public/profile.png"
import { FigmaLogo } from "phosphor-react";

const Infos = () => {
  return (
    <div className="flex flex-col items-center gap-1 bg-neutral-700 p-4 rounded-lg w-auto h-auto">
      <Image
        className="absolute top-32 max-sm:top-24 rounded-lg"
        src={Profile}
        alt="My profile"
        width={160}
      />

      <h1 className="pt-18 font-bold text-xl text-center">Ana Carolina Bortolini de Magalhães</h1>
      <p className="font-medium text-lg text-gray-400">Frontend Developer</p>

      <div className="flex align-middle gap-2.5 pt-2.5 pb-2.5">
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://www.linkedin.com/in/anabmagalhaes/"
        >
          <LinkedinLogo size={24} />
        </Link>
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://github.com/aninhabort"
        >
          <GithubLogo size={24} />
        </Link>
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://dribbble.com/aninhabort"
        >
          <DribbbleLogo size={24} />
        </Link>
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://www.figma.com/@anabmagalhaes"
        >
          <FigmaLogo size={24} />
        </Link>
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://medium.com/@aninhabort"
        >
          <MediumLogo size={24} />
        </Link>
        <Link
          className="bg-purple-600 rounded-lg p-1 hover:bg-purple-800"
          href="https://www.instagram.com/neo.coders/"
        >
          <InstagramLogo size={24} />
        </Link>
      </div>

      <div className="flex flex-col gap-2 bg-gray-200 p-7 w-fit rounded-lg">
        <p className="font-bold text-gray-400">phone</p>
        <p className="text-black">+351914078805</p>
        <p className="font-bold text-gray-400">e-mail</p>
        <p className="text-black">carol2015bortolini@gmail.com</p>
        <p className="font-bold text-gray-400">location</p>
        <p className="text-black">Coimbra, Portugal</p>
      </div>

      <a href="/Ana-Carolina-Resume.pdf" download="Ana Carolina's Resume" target="_blank">
        <button
          className="flex flex-row gap-1 bg-purple-600 rounded-full px-2.5 py-2 mt-2 hover:bg-purple-800"
          type="button"
        >
          <DownloadSimple size={24} />
          Download CV
        </button>
      </a>
    </div>
  );
};

export default Infos;
