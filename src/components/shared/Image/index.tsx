import React, { useCallback, useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
   containerClassName?: string;
}

const Image: React.FC<ImageProps> = ({ onLoadingComplete, ...props }) => {
   const { containerClassName } = props;

   const [isLoaded, setIsLoaded] = useState(false);

   const handleLoadingComplete: NextImageProps["onLoadingComplete"] =
      useCallback(
         (result: any) => {
            setIsLoaded(true);

            onLoadingComplete?.(result);
         },
         [onLoadingComplete]
      );

   return <NextImage onLoadingComplete={handleLoadingComplete} {...props} />;
};

export default React.memo(Image);
