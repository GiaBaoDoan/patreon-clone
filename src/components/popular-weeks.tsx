"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const creators = [
  {
    name: "Annie",
    description: "Sharing her journey through design & art.",
    image: "/annie.jpg",
  },
  {
    name: "Mysterious Archive",
    description: "Exploring digital chaos and creativity.",
    image: "/user-2.jpg",
  },
  {
    name: "Fixed Judgement",
    description: "Speaking truth through visuals.",
    image: "/fixed_judgement.png",
  },
  {
    name: "Globe Insights",
    description: "Visualizing the world, one map at a time.",
    image: "/globe.svg",
  },
  {
    name: "Creative Pack 1",
    description: "A collection of vibrant moments.",
    image: "/image-1.jpg",
  },
  {
    name: "Creative Pack 2",
    description: "Colors of everyday life.",
    image: "/image-2.jpg",
  },
  {
    name: "Creative Pack 3",
    description: "Urban chaos reimagined.",
    image: "/image-3.jpg",
  },
  {
    name: "Creative Pack 5",
    description: "Moments in time frozen forever.",
    image: "/image-5.jpg",
  },
  {
    name: "Creative Pack 6",
    description: "Abstract forms and feelings.",
    image: "/image-6.jpg",
  },
  {
    name: "Creative Pack 7",
    description: "Visual poetry of the ordinary.",
    image: "/image-7.jpg",
  },
  {
    name: "Napoleon",
    description: "Bold, historic, and timeless.",
    image: "/napoleon.png",
  },
  {
    name: "Next Tech",
    description: "Building the future with code.",
    image: "/next.svg",
  },
  {
    name: "Portfolio A1",
    description: "Capturing personal expression.",
    image: "/pa-1.jpg",
  },
  {
    name: "Portfolio A2",
    description: "Design meets personality.",
    image: "/pa-2.jpg",
  },
  {
    name: "Tesla Fan",
    description: "Futuristic energy in human form.",
    image: "/Tesla.jpg",
  },
  {
    name: "User One",
    description: "Telling stories of creators worldwide.",
    image: "/user-1.jpg",
  },
  {
    name: "User Two",
    description: "Life, love, and pixels.",
    image: "/user-2.jpg",
  },
  {
    name: "User Three",
    description: "Minimal style. Maximal impact.",
    image: "/user-3.jpg",
  },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function PopularsWeek() {
  const chunks = chunkArray(creators, 9);

  return (
    <div className="px-6 py-10">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-xl font-bold flex items-center">
          Popular this week <ChevronRight size={20} />
        </h2>
      </div>
      <Carousel className="w-full overflow-hidden">
        <CarouselContent>
          {chunks.map((group, slideIndex) => (
            <CarouselItem key={slideIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.map((user, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={48}
                      height={48}
                      className="rounded-md w-14 h-14 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {user.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
