import React, { useCallback, useEffect, useState } from "react";
import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
// export const PNGIcon = ({src,width,height}:SvgIconProps)=>(
//   <img src={`/img/png/${src}`} alt={src} width={width} height={height} />
// )

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
  errorImg?: string;
}
export const  PNGIcon = ({ src, placeholderImg, errorImg, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);
  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);
  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);
  return <img {...props} alt={imgSrc} src={`/img/png/${src}`} />;
};
