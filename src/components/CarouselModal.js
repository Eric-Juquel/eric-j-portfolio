import React from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const CarouselModal = ({ images, open, setOpen, isMobile, mediaHeight, mediaWidth }) => {

  return (
    <div>
      <AutoRotatingCarousel
        label={"close"}
        open={open}
        onClose={() => setOpen(false)}
        onStart={() => setOpen(false)}
        autoplay={isMobile}
        mobile={isMobile}
        
        
      >
        {Array.isArray(images) & (images.length > 0)
          ? images.map((image) => {
              return (
                <Slide
                  key={image.id}
                  media={<img src={image.url} alt={image.alt} width={mediaWidth} height="auto"/>}
                  mediaBackgroundStyle={{
                    backgroundColor: "rgb(42, 53, 71)",
                    height: mediaHeight,
                  }}
                  style={{ backgroundColor: "rgb(42, 53, 71)" }}
                  title={image.title}
                  subtitle={image.subtitle}
                  
                />
              );
            })
          : null}
      </AutoRotatingCarousel>
    </div>
  );
};

export default CarouselModal;
