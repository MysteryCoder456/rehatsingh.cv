import Image from "next/image";

export default function Home() {
  const photoSize = 300;

  return (
    <main className="h-full flex flex-col">
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2 max-w-[50%]">
          <h1 className="text-start">Rehatbir Singh</h1>
          <h3 className="text-muted-foreground text-start">
            Full-stack developer with a focus in systems architecture
          </h3>
        </div>

        <Image
          src="/pingy.png"
          alt="Picture of Rehatbir"
          width={photoSize}
          height={photoSize}
          className="border-4 rounded-full shadow-xl shadow-[#e3bfa5]"
        />
      </section>

      <section>
        <h1 className="text-start">About Me</h1>
        <p>bla bla bla</p>
      </section>
    </main>
  );
}
