import { ImageByIdResult, images, imageSearchResult } from "./data";
import {
  ImageByIdResultInterface,
  ImageInterface,
  SearchImageResultInterface,
} from "./types";

async function fetchPhotosList(): Promise<ImageInterface[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(images);
    }, 3000);
  });
}

async function fetchPhotosByQuery(
  query: string
): Promise<SearchImageResultInterface> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(imageSearchResult);
    }, 3000);
  });
}

async function fetchPhotoById(id: string): Promise<ImageByIdResultInterface> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ImageByIdResult);
    }, 3000);
  });
}

export { fetchPhotosList, fetchPhotosByQuery, fetchPhotoById };
