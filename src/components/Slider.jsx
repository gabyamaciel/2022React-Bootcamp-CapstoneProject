import { useState, useEffect } from "react";
import { FrontImg, ImgContainer, BannerButtons } from "../styles/slider.styles";

const Image = ({ image }) => {
  const style = {
    backgroundImage: `url(${image.url})`,
    width: "100%",
    height: "250px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div id={image.id} role="img" aria-label={image.alt} style={style} />;
};

const Slider = ({ banners }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const onClickHandler = (direction) => {
    if (direction > 0 && imgIndex >= banners.length - 1) {
      return setImgIndex(0);
    };

    if (direction < 0 && imgIndex <= 0) { return setImgIndex(banners.length - 1) };

    return setImgIndex(prev => prev + direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onClickHandler(1);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <ImgContainer>
      <FrontImg>
        <Image
          image={banners[imgIndex].data.main_image}
        />
      </FrontImg>
      <BannerButtons>
        <button onClick={() => onClickHandler(-1)} >{"<"}</button>
        <button onClick={() => onClickHandler(1)} >{">"}</button>
      </BannerButtons>
    </ImgContainer>
  );
};

export default Slider;
