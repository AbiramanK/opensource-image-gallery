import { images } from "./data";
import { ImageInterface } from "./types";

async function fetchPhotosList(): Promise<ImageInterface[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(images);
    }, 3000);
  });
}

export { fetchPhotosList };
