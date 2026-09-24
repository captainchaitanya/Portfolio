import Image from "next/image";
import { BLUR_DATA_URL, IMAGE_SIZES, type SiteImageSpec } from "@/content/media";

type SiteImageProps = {
  image: SiteImageSpec;
  priority?: boolean;
  sizes?: string;
  mount?: boolean;
};

export function SiteImage({
  image,
  priority = false,
  sizes = IMAGE_SIZES,
  mount = false,
}: SiteImageProps) {
  return (
    <div className={mount ? "portrait-mount" : "image-frame"}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        priority={priority}
        className={`site-image ${image.className}`}
        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
      />
    </div>
  );
}
