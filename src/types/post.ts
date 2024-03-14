export type UploadImageFileType = {
  imageUrl: string;
  file: File;
};

export type UploadPostType = {
  feedText: string;
  images: UploadImageFileType[];
};
