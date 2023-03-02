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
import { fetchPhotoById, fetchPhotosByQuery, fetchPhotosList } from "./api";
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
  const [search, setSearch] = useState<string>("");

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
  }

  function onImageSelectHandle(id: string) {
    getImageById(id);
  }

  async function getPhotosByQuery(query: string) {
    startLoading();

    const photos = await fetchPhotosByQuery(query);

    const images: PhotographyInterface[] = [];

    photos?.results?.map((photo) =>
      images?.push({
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

  function handleSearchBoxChange(query: string) {
    setSearch(query);
    if (query?.trim() !== "") {
      getPhotosByQuery(query);
    } else {
      getPhotos();
    }
  }

  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout onSearchBoxChange={handleSearchBoxChange}>
          {search?.trim() === "" && <Jumbotron />}
          {search?.trim() !== "" && <HorizontalScrollList list={tags} />}
          <PhotographySeries
            isLoading={isLoading}
            images={images}
            onSelect={onImageSelectHandle}
          />
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
          />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
