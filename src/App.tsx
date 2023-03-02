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
  "onClose" | "open" | "isLoading" | "error"
>;

function App() {
  const [images, setImages] = useState<PhotographyInterface[]>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImageType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [errorStatus, setErrorStatus] = useState<number>();
  const [getImageByIdErrorStatus, setGetImageByIdErrorStatus] =
    useState<number>();

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  function resetErrorStatus() {
    setErrorStatus(undefined);
  }

  async function getPhotos() {
    try {
      resetErrorStatus();
      startLoading();

      const photos = await fetchPhotosList();

      if (photos?.error) {
        return setErrorStatus(photos?.error?.status);
      }

      const images: PhotographyInterface[] = [];

      photos?.data?.map((photo) =>
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
    } catch (error: any) {
      stopLoading();
      console.error("Get photos : catch : ", error);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  function handleImagePopupClose() {
    setIsImageModalOpen(false);
    setSelectedImage(undefined);
    setGetImageByIdErrorStatus(undefined);
  }

  async function getImageById(id: string) {
    try {
      resetErrorStatus();
      setGetImageByIdErrorStatus(undefined);
      setIsImageModalOpen(true);

      const photo = await fetchPhotoById(id);

      if (photo?.error) {
        return setGetImageByIdErrorStatus(photo?.error?.status);
      }

      const relatedTags: Array<string> = [];

      photo?.data?.tags?.map((tag) => relatedTags.push(tag?.title));

      const image: SelectedImageType = {
        image: photo?.data?.urls?.regular!,
        title: photo?.data?.description! ?? photo?.data?.alt_description!,
        totalLikes: photo?.data?.likes!,
        totalDownloads: photo?.data?.downloads!,
        relatedTags,
        authorName: photo?.data?.user?.name!,
        authorUsername: photo?.data?.user?.username!,
        authorPicture: photo?.data?.user?.profile_image?.medium!,
      };

      setSelectedImage(image);
    } catch (error: any) {
      console.error("Get Image by Id: catch : ", error);
    }
  }

  function onImageSelectHandle(id: string) {
    getImageById(id);
  }

  async function getPhotosByQuery(query: string) {
    try {
      resetErrorStatus();
      startLoading();

      const photos = await fetchPhotosByQuery(query);

      if (photos?.error) {
        return setErrorStatus(photos?.error?.status);
      }

      const images: PhotographyInterface[] = [];

      photos!?.data?.results?.map((photo) =>
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
    } catch (error: any) {
      stopLoading();
      console.error("Get photos by query: catch : ", error?.message);
    }
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
            error={errorStatus!}
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
            error={getImageByIdErrorStatus!}
          />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
