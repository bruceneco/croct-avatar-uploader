import { useEffect, useState } from "react";

interface LoadImageHook {
  error?: Error;
  imageURL?: string;
}

export default function useLoadImage(
  image: File,
  allowedTypes = ["image/jpeg", "image/png", "image/gif"]
): LoadImageHook {
  const [error, setError] = useState<Error>();
  const [imageURL, setImageURL] = useState<string>();

  useEffect(() => {
    if (image) {
      const isInvalidImage = !allowedTypes.includes(image.type);
      if (isInvalidImage) {
        setImageURL(undefined);
        setError(new Error("Invalid image format."));
        return;
      }
      try {
        const objectURL = URL.createObjectURL(image);
        setImageURL(objectURL);
      } catch (err) {
        setError(new Error("Sorry, the upload failed."));
      }
    }
  }, [image, ...allowedTypes]);

  return { error, imageURL };
}
