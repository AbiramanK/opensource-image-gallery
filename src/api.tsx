import { API, CLIENT_ID, RESULT_PER_PAGE } from "./constants";
import { ImageByIdResult, images, imageSearchResult } from "./data";
import {
  ImageByIdResultInterface,
  ImageInterface,
  SearchImageResultInterface,
} from "./types";

async function makeRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "UPDATE" | "DELETE"
) {
  return new Promise((resolve, reject) => {
    return fetch(`${url}`, {
      method: "get",
    })
      .then((response) => {
        if (response?.status === 200 || response?.statusText === "OK") {
          return response.json();
        }

        return reject();
      })
      .then((res) => {
        return resolve(res);
      })
      .catch(() => {
        reject();
      });
  });
}

async function fetchPhotosList(): Promise<ImageInterface[]> {
  return new Promise((resolve, reject) => {
    return makeRequest(
      `${API}/photos?client_id=${CLIENT_ID}&page=1&per_page=${RESULT_PER_PAGE}&order_by=latest`,
      "GET"
    ).then((response) => resolve(response as ImageInterface[]));
  });
}

let controller: AbortController | undefined;
async function fetchPhotosByQuery(
  query: string
): Promise<SearchImageResultInterface> {
  return new Promise((resolve, reject) => {
    if (typeof controller != undefined) {
      controller?.abort!();
    }

    controller = new AbortController();

    return fetch(
      `${API}/search/photos?client_id=${CLIENT_ID}&query=${query}&page=1&per_page=${RESULT_PER_PAGE}`,
      {
        method: "get",
        signal: controller.signal,
      }
    )
      .then((response) => {
        if (response?.status === 200 || response?.statusText === "OK") {
          return response.json();
        }

        return reject();
      })
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        if (error?.name === "AbortError") {
          return resolve({} as SearchImageResultInterface);
        }
        return reject();
      });
  });
}

async function fetchPhotoById(id: string): Promise<ImageByIdResultInterface> {
  return new Promise((resolve, reject) => {
    return makeRequest(
      `${API}/photos/${id}?client_id=${CLIENT_ID}`,
      "GET"
    ).then((response) => resolve(response as ImageByIdResultInterface));
  });
}

export { fetchPhotosList, fetchPhotosByQuery, fetchPhotoById };
