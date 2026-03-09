"use client";

import { AlertCircleIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function WhatsGoingOn() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 200);
  }, []);

  return (
    <div
      className={cn(
        "fixed w-full left-0 right-0 transition-opacity z-5",
        hidden && "opacity-0 pointer-events-none",
      )}
    >
      <Alert variant="warning" className="w-[95vw] mx-auto lg:w-[67vw]">
        <AlertCircleIcon />
        <AlertTitle>What's going on?</AlertTitle>
        <AlertDescription>
          <span>
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
          </span>
        </AlertDescription>

        <button
          type="button"
          onClick={() => {
            setHidden(true);
          }}
          className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </Alert>
    </div>
  );
}
