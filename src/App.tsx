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
import { fetchPhotoById, fetchPhotosList } from "./api";
import { tags } from "./data";
import { PhotographyInterface } from "./components/PhotographySeries";
import { ImagePopupProps } from "./components/ImagePopup";

type SelectedImageType = Omit<
  ImagePopupProps,
  "onClose" | "open" | "isLoading"
>;

function App() {
  const [images, setImages] = useState<PhotographyInterface[]>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImageType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  async function getPhotos() {
    startLoading();

    const photos = await fetchPhotosList();

    const images: PhotographyInterface[] = [];

    photos?.map((photo) =>
      images.push({
        id: photo?.id!,
        image: photo?.urls?.regular!,
        width: photo?.width!,
        height: photo?.height!,
        likes: photo?.likes!,
        description: photo?.description!,
        altDescription: photo?.alt_description!,
        authorName: photo?.user?.name,
        authorUsername: photo?.user?.username,
        authorPicture: photo?.user?.profile_image?.medium!,
      })
    );

    setImages(images);

    stopLoading();
  }

  useEffect(() => {
    getPhotos();
  }, []);

  function handleImagePopupClose() {
    setIsImageModalOpen(false);
    setSelectedImage(undefined);
  }

  async function getImageById(id: string) {
    startLoading();
    setIsImageModalOpen(true);

    const photo = await fetchPhotoById(id);

    const relatedTags: Array<string> = [];

    photo?.tags?.map((tag) => relatedTags.push(tag?.title));

    const image: SelectedImageType = {
      image: photo?.urls?.regular!,
      title: photo?.description! ?? photo?.alt_description!,
      totalLikes: photo?.likes!,
      totalDownloads: photo?.downloads!,
      relatedTags,
      authorName: photo?.user?.name!,
      authorUsername: photo?.user?.username!,
      authorPicture: photo?.user?.profile_image?.medium!,
    };

    setSelectedImage(image);

    stopLoading();
  }

  function onImageSelectHandle(id: string) {
    getImageById(id);
  }

  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          {/* <Jumbotron /> */}
          <HorizontalScrollList list={tags} />
          <PhotographySeries images={images} onSelect={onImageSelectHandle} />
          <ImagePopup
            open={isImageModalOpen}
            onClose={handleImagePopupClose}
            title={selectedImage?.title!}
            relatedTags={selectedImage?.relatedTags!}
            authorName={selectedImage?.authorName!}
            authorUsername={selectedImage?.authorUsername!}
            authorPicture={selectedImage?.authorPicture!}
            totalLikes={selectedImage?.totalLikes!}
            totalDownloads={selectedImage?.totalDownloads!}
            image={selectedImage?.image!}
            isLoading={isLoading}
          />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
