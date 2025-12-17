import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photoSize = 300;
  const universityWebsite = "https://www.wisc.edu/";

  return (
    <main className="h-full flex flex-col gap-8 py-8">
      <section className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2 max-w-[50%] text-center md:text-start">
          <h1>Rehatbir Singh</h1>
          <h3 className="text-muted-foreground">
            Full-stack developer with a focus in systems architecture
          </h3>
        </div>

        <Image
          src="/pingy.png"
          alt="Picture of Rehatbir"
          width={photoSize}
          height={photoSize}
          className="border-4 rounded-full"
        />
      </section>

      <section>
        <h1>About Me</h1>
        <p>
          I'm a student at{" "}
          <Link href={universityWebsite} prefetch={false} target="_blank">
            UW-Madison
          </Link>{" "}
          double majoring in Computer Science and Data Science, and I love
          creating software that connects people.
        </p>
      </section>
    </main>
  );
}
