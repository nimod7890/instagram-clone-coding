/** 생성 시 이미지 */
export type UploadImageFileType = {
  imageUrl: string;
  file: File;
};

/** 생성 시 게시글 */
export type UploadPostType = {
  feedText: string;
  images: UploadImageFileType[];
};

/** 게시글 내 이미지 */
export type PostImageType = {
  id: number;
  contentUrl: string;
};

/** 게시글 */
export type PostType = {
  id: number;
  feedLoginId: string;
  feedText: string;
  createdAt: Date;
  updatedAt: Date;
  feedCommentCount: number;
  isLiked: number;
  isBookMarked: boolean;
  contentList: PostImageType[];
};
