import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { FirebaseStorage } from "src/libraries/firebase";

/**
 * firebase storage에 image upload
 * @returns contentUrl
 */
export default async function uploadImage({
  baseUrl,
  file,
}: {
  baseUrl: string;
  file: File;
}): Promise<string> {
  try {
    const imageName = `${baseUrl}${Date.now()}${getFileExtension(file.name)}`;
    const storageRef = ref(FirebaseStorage, imageName);

    await uploadBytes(storageRef, file);

    return await getDownloadURL(storageRef);
  } catch (error) {
    const errorMessage =
      typeof error === "string"
        ? error
        : error instanceof Error
        ? error.message
        : "알 수 없는 에러";

    toast.error(`Firebase Upload: ${errorMessage}`);

    throw new Error(`Firebase Upload: ${errorMessage}`);
  }
}

/**
 * 파일 확장자 반환
 * @param fileName
 * @returns .jpeg, .png 등
 */
function getFileExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf(".");
  if (lastDot === -1) {
    return "";
  }

  return fileName.substring(lastDot).toLowerCase();
}
