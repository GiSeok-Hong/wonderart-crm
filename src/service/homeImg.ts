import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

type ImgJson = {
  id: number;
  title: string;
};

export const getHomeImgs = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "homeImg.json");

  return readFile(filePath, "utf-8").then<ImgJson[]>(JSON.parse);
});
