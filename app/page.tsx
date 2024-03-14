import Image from "next/image";
import Link from "next/link";

import Animation from "@/components/animation";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <Animation>
      {/* a.k.a Navbar */}
      <Link href="https://github.com/camdzic/camdzic.dev" target="_blank">
        <button className="mb-8 relative inline-flex h-7 overflow-hidden rounded-full p-[1px] focus:outline-none hover:ring-[2.5px] transition-all duration-1000">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6382be_0%,#5e95ff_50%,#445d8d_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            get source code
          </span>
        </button>
      </Link>

      <div className="flex flex-col gap-10">
        {/* Skeleton */}
        <div className="flex flex-row space-x-2 items-center">
          <div className="relative mr-2">
            <Image
              src="https://avatars.githubusercontent.com/u/111543914"
              alt="discord avatar"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-neutral-100">Aldin Čamdžić</p>

            <span>Software Engineer</span>
            <span>I like to build things.</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* About */}
          <div>
            <h2 className="text-neutral-100 mb-2">About</h2>
            <div className="flex flex-col space-y-2">
              <p>
                Hey, I&apos;m <span className="text-neutral-100">Aldin</span> -
                a software engineer from Bosnia and Herzegovina. My first
                experience with programming was making Lua scripts for a game
                called Roblox to make my own games at{" "}
                <span className="text-neutral-100">9 years old</span>.
              </p>

              <p>
                I&apos;m currently learning about web development and I&apos;m a
                big fan of TypeScript. I also like to build discord bots in my
                free time. I&apos;m currently pursuing a degree in{" "}
                <span className="text-neutral-100">Computer Science</span>.
              </p>

              <p>
                All of my projects are open source and you can find them{" "}
                <Link
                  href="https://github.com/camdzic"
                  target="_blank"
                  className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                >
                  on my GitHub
                </Link>
                .
              </p>

              <p>
                Feel free to contact me for any reason, even if it&apos;s just
                to say hi! You can find me on{" "}
                <Link
                  href="https://discord.com/users/1201578913336397870"
                  target="_blank"
                  className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                >
                  Discord
                </Link>{" "}
                or send an email to{" "}
                <Link
                  href="mailto:aldin@camdzic.dev"
                  target="_blank"
                  className="text-neutral-100 hover:text-neutral-500 transition-all duration-150"
                >
                  aldin@camdzic.dev
                </Link>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:ml-12">
            <h2 className="text-neutral-100 mb-2">Links</h2>
            <Socials />
          </div>
        </div>
      </div>
    </Animation>
  );
}
