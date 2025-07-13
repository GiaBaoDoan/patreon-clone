"use client";

import {
  Mic,
  Zap,
  Music,
  BookOpen,
  // Cube,
  Palette,
  Gamepad2,
  Coffee,
  Hand,
  Heart,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Nếu bạn dùng shadcn
import { HTMLAttributes } from "react";

const categories = [
  {
    name: "Podcasts and shows",
    color: "from-red-600 to-red-400",
    icon: Mic,
  },
  {
    name: "Board games",
    color: "from-blue-700 to-blue-500",
    icon: Zap,
  },
  {
    name: "Music",
    color: "from-orange-500 to-yellow-500",
    icon: Music,
  },
  {
    name: "Writing",
    color: "from-pink-700 to-pink-500",
    icon: BookOpen,
  },
  {
    name: "Applications and software",
    color: "from-blue-700 to-slate-500",
    icon: BookOpen,
  },
  {
    name: "Visual Arts",
    color: "from-sky-600 to-sky-400",
    icon: Palette,
  },
  {
    name: "Video games",
    color: "from-purple-600 to-purple-400",
    icon: Gamepad2,
  },
  {
    name: "Lifestyle",
    color: "from-teal-500 to-emerald-400",
    icon: Coffee,
  },
  {
    name: "Craftsmanship",
    color: "from-yellow-500 to-yellow-300",
    icon: Hand,
  },
  {
    name: "Social impact",
    color: "from-rose-600 to-rose-400",
    icon: Heart,
  },
];

type CardProps = HTMLAttributes<HTMLDivElement>;

function CategoryCard({
  name,
  icon: Icon,
  color,
  className,
  ...props
}: {
  name: string;
  icon: LucideIcon;
  color: string;
} & CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-4 h-28 flex flex-col justify-between text-white transition hover:opacity-90",
        `bg-gradient-to-br ${color}`,
        className
      )}
      {...props}
    >
      <div className="text-base font-semibold">{name}</div>
      <Icon className="w-6 h-6 opacity-80" />
    </div>
  );
}

export default function ExploreTopics() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Explore topics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            icon={cat.icon}
            color={cat.color}
          />
        ))}
      </div>
    </section>
  );
}
