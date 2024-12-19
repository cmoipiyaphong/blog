import { IKImage } from "imagekitio-react";

const Image = ({ src, classNmae, w, h, alt }) => {
  const URL_ENDPOINT = import.meta.env.VITE_IK_URL_ENDPOINT;
  return (
    <IKImage
      urlEndpoint={URL_ENDPOINT}
      path={src}
      className={classNmae}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      alt={alt}
    />
  );
};

export default Image;
