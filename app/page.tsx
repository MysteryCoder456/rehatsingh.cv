import Image from "next/image";
import { Timeline, TimelineItem } from "@/components/timeline";

export default function Home() {
  const photoSize = 300;

  return (
    <main className="h-full flex flex-col gap-8">
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
          className="border-4 border-secondary rounded-full"
        />
      </section>

      <section>
        <h1 className="mb-2">About Me</h1>

        {/* TODO: Drop-down to see related projects for each era. */}
        <Timeline>
          <TimelineItem
            title="Learning to make things exist"
            subtitle="Middle School"
            position="first"
          >
            <p>
              Programming had my curiosity when I learnt QBasic in middle
              school. But it got my attention when I realized it could{" "}
              <i>do real things</i>, not just print text on a screen. Most of my
              first projects were remakes of games I enjoyed playing when I was
              younger.
            </p>
          </TimelineItem>

          <TimelineItem title="Making for the world" subtitle="High School">
            <p>
              I began seeking validation. Whether it was in the form of user
              feedback from projects I'd shipped, things I'd built for
              competitions, or cold hard cash; I had subconsciously internalized
              the feedback-iteration loop as a developer.
            </p>
          </TimelineItem>

          <TimelineItem title="TODO" subtitle="TODO">
            <p>TODO</p>
          </TimelineItem>

          <TimelineItem title="TODO" subtitle="TODO" position="last">
            <p>TODO</p>
          </TimelineItem>
        </Timeline>
      </section>
    </main>
  );
}
