import Image from "next/image";
import MultiCarousel from "./MultiCarousel";
import { getHomeImgs } from "@/service/homeImg";

export default async function HomeImgCarousel() {
  const imgs = await getHomeImgs();

  return (
    <div className="mt-5">
      <MultiCarousel>
        {imgs.map((img) => (
          <article key={img.id} className=" h-[350px] relative">
            <Image
              fill
              // style={{ objectFit: "contain" }}
              priority
              sizes="100vh"
              src={`/images/home/home-img-${img.id}.jpg`}
              alt={img.title}
            />
          </article>
        ))}
      </MultiCarousel>
    </div>
  );
}
