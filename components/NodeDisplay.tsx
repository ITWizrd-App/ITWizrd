"use client";

import React from "react";
import getNextUrl from "@/lib/getNextUrl";
import type { Node } from "@/lib/apiTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function NodeDisplay({
  nodePath,
}: Readonly<{ nodePath: string }>) {
  const [node, setNode] = React.useState<Node | null>(null);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    if (!nodePath || nodePath === "") return;
    fetch(getNextUrl("/", nodePath))
      .then((response) => response.json())
      .then((data) => setNode(data as Node))
      .catch(() => {
        setError("Couldn't find that page!");
      });
  }, [nodePath]);

  if (!node && error == "") {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="animate-spin" />;
      </div>
    );
  }

  if (error !== "") {
    return (
      <Card className="lg:mx-auto mx-5 max-w-full max-h-full lg:max-w-3xl">
        <CardHeader>
          <CardTitle>Couldn&apos;t Find That Page</CardTitle>
          <CardDescription>
            We couldn&apos;t find that page, if you believe this is an error -
            Raise an issue on our{" "}
            <Link href="https://github.com/ITWizrd-App" className="underline">
              GitHub
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="lg:mx-auto mx-5 max-w-full max-h-full lg:max-w-3xl">
      <CardHeader>
        <CardTitle>{node?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ ...props }) => (
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              <img style={{ maxWidth: "100%" }} {...props} />
            ),
            a: ({ ...props }) => {
              // Render a video player if the link ends with .mp4
              if (props.href?.endsWith(".mp4")) {
                return (
                  <video controls style={{ maxWidth: "100%" }}>
                    <source src={props.href} type="video/mp4" />
                  </video>
                );
              }
              return <a {...props} />;
            },
          }}
        >
          {node?.content}
        </Markdown>
        <div className="flex flex-wrap justify-center items-center">
          {node?.choices.map((choice, index) => (
            <Link
              key={index}
              prefetch
              href={getNextUrl(nodePath, choice.nextNodeId, nodePath === "/")}
            >
              <Button className="m-2">{choice.text}</Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
