import { FC } from "react";
import Image from "next/image";

interface ImagesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
  onClick: (index: number) => void;
}

const Images: FC<ImagesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickImage = (index: number) => {
    onClick(index);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((slide, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="image"
        >
          <Image
            src={slide.src}
            alt={slide.description}
            width={1080}
            height={1080}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
