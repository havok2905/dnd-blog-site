import {useState} from 'react';

import {
  ZoomInIcon,
  ZoomOutIcon
} from '~/design-system/components/Icons';

interface MapProps {
  imageAlt: string;
  imageSrc: string;
  zoomIncrement: number;
  zoomInitial: number;
  zoomMaxThreshold: number;
  zoomMinThreshold: number;
}

export const Map = ({
  imageAlt,
  imageSrc,
  zoomIncrement,
  zoomInitial,
  zoomMaxThreshold,
  zoomMinThreshold
}: MapProps) => {
  const [imageHeightPercent, setImageHeightPercent] = useState(zoomInitial);

  const onZoomIn = () => {
    if (imageHeightPercent + zoomIncrement > zoomMaxThreshold) {
      setImageHeightPercent(zoomMaxThreshold);
    } else {
      setImageHeightPercent(imageHeightPercent + zoomIncrement);
    }
  };

  const onZoomOut = () => {
    if (imageHeightPercent - zoomIncrement < zoomMinThreshold) {
      setImageHeightPercent(zoomMinThreshold);
    } else {
      setImageHeightPercent(imageHeightPercent - zoomIncrement);
    }
  };

  return (
    <div className="havok-dnd-map">
      <div className="havok-dnd-map-controls">
        <button
          aria-label="Zoom In"
          className="havok-dnd-map-controls-button"
          onClick={onZoomIn}>
          <ZoomInIcon
            height="20px"
            width="20px"/>
        </button>
        <button
          aria-label="Zoom Out"
          className="havok-dnd-map-controls-button"
          onClick={onZoomOut}>
          <ZoomOutIcon
            height="20px"
            width="20px"/>
        </button>
      </div>
      <div className="havok-dnd-map-content">
        <img
          alt={imageAlt}
          src={imageSrc}
          style={{
            height: `${String(imageHeightPercent)}%`
          }}/>
      </div>
    </div>
  )
};
