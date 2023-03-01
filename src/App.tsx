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
import { tags } from "./data";

function App() {
  const [images, setImages] = useState<ImageInterface[]>();
  const [selectedImage, setSelectedImage] = useState<ImageInterface>();

  async function getPhotos() {
    const photos = await fetchPhotosList();
    setImages(photos);
  }

  useEffect(() => {
    getPhotos();
  });

  function onImageSelectHandle(image: ImageInterface) {
    setSelectedImage(image);
  }

  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          {/* <Jumbotron /> */}
          <HorizontalScrollList list={tags} />
          <PhotographySeries images={images!} onSelect={onImageSelectHandle} />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
