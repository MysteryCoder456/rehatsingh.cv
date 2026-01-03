import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";
import { Timeline, TimelineItem } from "@/components/timeline";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  const photoSize = 300;

  return (
    <main className="h-full flex flex-col gap-8">
      <Alert variant="warning">
        <AlertCircleIcon />
        <AlertTitle>What's going on?</AlertTitle>
        <AlertDescription>
          <p>
            I'm currently revamping my entire personal site, so several parts of
            this site are incomplete. Click{" "}
            <a
              href="https://old.rehatsingh.cv"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to see my old one.
          </p>
        </AlertDescription>
      </Alert>

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
            title="Learning to Make Things Exist"
            subtitle="Middle School"
            position="first"
          >
            <p>
              Programming sparked my curiosity when I learned QBasic in middle
              school. But it truly got my attention when I realized it could{" "}
              <b>do real things</b>, not just print text on a screen. Most of my
              first projects were remakes of games I enjoyed playing when I was
              younger.
            </p>
          </TimelineItem>

          <TimelineItem title="Developing for the World" subtitle="High School">
            <p>
              I began seeking validation. Whether it was in the form of user
              feedback from projects I'd shipped, prizes from things I'd built
              for competitions, or cold hard cash; I had subconsciously
              internalized the <b>feedback-iteration loop</b> as a developer.
            </p>
          </TimelineItem>

          <TimelineItem
            title="Intersection of Disciplines"
            subtitle="Late High School & Early College"
          >
            <p>
              As I learnt more about the world, my interests shifted. I began to
              view code as a facilitator for other fields, a tool to{" "}
              <b>amplify ideas</b> that exist outside the Computer Science
              sphere. This helped me explore fresh ideas that I previously would
              not have fully appreciated.
            </p>
          </TimelineItem>

          <TimelineItem
            title="Product-Driven Mindset"
            subtitle="Present"
            position="last"
          >
            <p>
              Over the years, I went from creating software purely for the sake
              of writing code to developing helpful products that solve real
              problems. Of course, I still enjoy the development journey and all
              the decisions that come with it, but my primary motivator is now
              the <b>value</b> my work brings to people.
            </p>
          </TimelineItem>
        </Timeline>
      </section>
    </main>
  );
}
