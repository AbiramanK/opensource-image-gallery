import React, { useEffect, useState } from "react";

import "src/fonts/Galada/Galada-Regular.ttf";
import "src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import "./App.css";

import { BaseLayout, ThemeMode } from "src/layouts";
import {
  HorizontalScrollList,
  ImagePopup,
  Jumbotron,
  PhotographySeries,
} from "./components";
import { fetchPhotosList } from "./api";
import { ImageInterface } from "./types";
import { relatedTags, tags } from "./data";

function App() {
  const [images, setImages] = useState<ImageInterface[]>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageInterface>();

  async function getPhotos() {
    const photos = await fetchPhotosList();
    setImages(photos);
  }

  useEffect(() => {
    getPhotos();
  });

  function handleImagePopupClose() {
    setIsImageModalOpen(false);
    setSelectedImage(undefined);
  }

  function onImageSelectHandle(image: ImageInterface) {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  }

  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          {/* <Jumbotron /> */}
          <HorizontalScrollList list={tags} />
          <PhotographySeries images={images!} onSelect={onImageSelectHandle} />
          <ImagePopup
            open={isImageModalOpen}
            onClose={handleImagePopupClose}
            title={
              selectedImage?.description! ?? selectedImage?.alt_description!
            }
            relatedTags={relatedTags}
            authorName={selectedImage?.user?.name!}
            authorUsername={selectedImage?.user?.username!}
            authorPicture={selectedImage?.user?.profile_image?.medium!}
            totalLikes={selectedImage?.likes!}
            totalDownloads={20}
            image={selectedImage?.urls?.regular!}
          />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
