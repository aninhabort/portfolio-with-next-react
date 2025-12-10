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
import { FigmaLogo } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Infos = () => {
  return (
    <Card className="bg-white dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 w-full sm:w-80 h-full relative pt-20">
      <Image
        className="absolute -top-20 left-1/2 -translate-x-1/2 rounded-lg"
        src="/profile.png"
        alt="foto of a girl with brown hair and glasses"
        width={160}
        height={160}
      />

      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <h1 className="font-bold text-xl text-center text-gray-900 dark:text-white">Ana Carolina Bortolini de Magalhães</h1>
      <p className="font-medium text-lg text-gray-700 dark:text-gray-300">Frontend Developer | UX/UI</p>

      <div className="flex items-center gap-2.5 pt-2.5 pb-2.5">
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://www.linkedin.com/in/anabmagalhaes/">
            <LinkedinLogo size={20} />
          </Link>
        </Button>
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://github.com/aninhabort">
            <GithubLogo size={20} />
          </Link>
        </Button>
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://dribbble.com/aninhabort">
            <DribbbleLogo size={20} />
          </Link>
        </Button>
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://www.figma.com/@anabmagalhaes">
            <FigmaLogo size={20} />
          </Link>
        </Button>
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://medium.com/@aninhabort">
            <MediumLogo size={20} />
          </Link>
        </Button>
        <Button size="icon" variant="default" className="bg-purple-600 hover:bg-purple-700" asChild>
          <Link href="https://www.instagram.com/neo.coders/">
            <InstagramLogo size={20} />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 bg-gray-100 dark:bg-neutral-800 p-7 w-fit rounded-lg border border-gray-300 dark:border-neutral-600">
        <p className="font-bold text-gray-600 dark:text-gray-400 text-sm uppercase">phone</p>
        <p className="text-gray-900 dark:text-white">+351914078805</p>
        <p className="font-bold text-gray-600 dark:text-gray-400 text-sm uppercase">e-mail</p>
        <p className="text-gray-900 dark:text-white">carol2015bortolini@gmail.com</p>
        <p className="font-bold text-gray-600 dark:text-gray-400 text-sm uppercase">location</p>
        <p className="text-gray-900 dark:text-white">Coimbra, Portugal</p>
      </div>

        <Button className="bg-purple-600 hover:bg-purple-700" asChild>
          <a href="/CV-of-Ana-Carolina.pdf" download="Ana Carolina's Resume" target="_blank">
            <DownloadSimple size={20} className="mr-2" />
            Download CV
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Infos;
