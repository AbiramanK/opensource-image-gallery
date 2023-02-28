import React, { useEffect, useState } from "react";

import "src/fonts/Galada/Galada-Regular.ttf";
import "src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import "./App.css";

import { BaseLayout, ThemeMode } from "src/layouts";
import {
  HorizontalScrollList,
  Jumbotron,
  PhotographySeries,
} from "./components";
import { fetchPhotosList } from "./api";
import { ImageInterface } from "./types";

const tags = [
  "Elephants",
  "Tigers",
  "Lions",
  "Camels",
  "Birds",
  "Mammals",
  "Nature",
  "Forests",
  "Wallpaper",
  "Brown",
  "Background",
  "Walls",
  "Paints",
];

function App() {
  const [images, setImages] = useState<ImageInterface[]>();

  async function getPhotos() {
    const photos = await fetchPhotosList();
    setImages(photos);
  }

  useEffect(() => {
    getPhotos();
  });

  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          {/* <Jumbotron /> */}
          <HorizontalScrollList list={tags} />
          <PhotographySeries images={images!} />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
