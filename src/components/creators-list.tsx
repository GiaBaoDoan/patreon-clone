import CreatorCard, { Creator } from "@/components/creator-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  data: Creator[];
}

export default function CreatorListSection({ data }: Props) {
  return (
    <Carousel opts={{ slidesToScroll: 3 }}>
      <CarouselContent>
        {data.map((creator, index) => (
          <CarouselItem key={index} className="basis-auto">
            <CreatorCard
              id={creator.id}
              key={index}
              name={creator.name}
              description={creator.description}
              image={creator.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
