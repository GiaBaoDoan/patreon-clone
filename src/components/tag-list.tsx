"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TagList({ tags }: { tags: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[89%]"
    >
      <CarouselContent className="-ml-2">
        {tags.map((tag, index) => (
          <CarouselItem key={index} className="pl-2 basis-auto">
            <Button
              onClick={() => setActive(index)}
              variant={active === index ? "default" : "outline"}
            >
              {tag}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
