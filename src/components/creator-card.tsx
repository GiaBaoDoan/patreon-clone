import Image from "next/image";

export interface Creator {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function CreatorCard({ name, description, image }: Creator) {
  return (
    <div className="space-y-2 group relative">
      {/* Hình ảnh + overlay button */}
      <div className="relative w-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-50 max-w-full aspect-square object-cover rounded-xl"
        />

        {/* Nút hiển thị khi hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
          <button className="bg-white text-black text-sm px-4 py-2 rounded-md shadow font-medium hover:bg-gray-100">
            Join for free
          </button>
        </div>
      </div>

      {/* Thông tin bên dưới */}
      <div className="mt-1">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground truncate">{description}</p>
      </div>
    </div>
  );
}
