interface ImageWithCaptionProps {
  imageAlt: string;
  imageCaption?: string;
  imageSrc: string;
}

export const ImageWithCaption = ({
  imageAlt,
  imageCaption,
  imageSrc
}: ImageWithCaptionProps) => {
  return (
    <div className='havok-dnd-image-border'>
      <div className='havok-dnd-image'>
        {
          imageCaption && (
            <p className='havok-dnd-image-caption'>
              {imageCaption}
            </p>
          )
        }
        <img
          alt={imageAlt}
          src={imageSrc}/>
      </div>
    </div>
  );
};
