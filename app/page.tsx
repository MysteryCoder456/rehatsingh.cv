import Image from "next/image";
import { Timeline, TimelineItem } from "@/components/timeline";

export default function Home() {
  const photoSize = 300;

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
        <h1 className="mb-2">About Me</h1>

        <Timeline>
          <TimelineItem title="2018" subtitle="7th Grade" position="first">
            Began learning how to code
          </TimelineItem>
          <TimelineItem title="2020">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </TimelineItem>
          <TimelineItem title="2024" subtitle="New Beginnings" position="last">
            Went to university
          </TimelineItem>
        </Timeline>
      </section>
    </main>
  );
}
