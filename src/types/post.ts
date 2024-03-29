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

type NonEmptyImageArray = [PostImageType, ...PostImageType[]];

/** 게시글 */
export type PostType = {
  id: number;
  feedLoginId: string;
  feedText: string;
  createdAt: Date;
  updatedAt: Date;
  feedCommentCount: number;
  isLiked: boolean;
  isBookMarked: boolean;
  contentList: NonEmptyImageArray;
};

/** 게시글 */
export type PostSummaryType = Pick<PostType, "id"> &
  Pick<PostImageType, "contentUrl">;

/** 댓글 */
export type CommentType = {
  id: number;
  writeUserLoginId: string;
  commentText: string;

  /** Todo: 서버에 추가되면 required field로 변경 */
  createdAt?: Date;
};
