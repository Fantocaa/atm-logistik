"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./images/images";
import { slides } from "./images/data";

export default function ImageSection() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
      <>
        <Images
          data={slides}
          onClick={(currentIndex) => setIndex(currentIndex)}
        />

        <Lightbox
          plugins={[Fullscreen, Zoom, Thumbnails]}
          // captions={{
          //   showToggle: true,

          //   descriptionTextAlign: "end",
          // }}
          // open={open}
          // close={() => setOpen(false)}

          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </>
    </div>
  );
}
