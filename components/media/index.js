/* eslint-disable */

import mediaStyles from "./index.module.css";
// import { useMediaQuery } from "react-responsive";
import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
export const mediaType = {
  fbVideo: "fbVideo",
  mixCloud: "mixCloud"
};

export function FbEmbedded({ href }) {
  // const isMobile = useMediaQuery({ maxWidth: 640 });
  // const finalWidth = isMobile ? 320 : 560;
  // const finalHeight = isMobile ? (320 * 314) / 560 : 314;
  // key={`${href} ${isMobile} ${finalWidth} ${finalHeight}`}
  const domRef = useRef();
  useEffect(() => {
    window.setTimeout(() => {
      const iframe = domRef.current.querySelector('iframe');
      if (iframe) {
        console.log('iframe', iframe);
        domRef.current.style.height = `${iframe.offsetHeight}px`
      }
    }, 3000);
  }, [])
  return (
    <div ref={domRef} className={mediaStyles.responsivePlayer}>
      <ReactPlayer
        width="100%"
        heigh="100%"
        className={mediaStyles.reactPlayer}
        url={href}
        controls
      />
    </div>
  );
}

export function FbWrap({ title, href }) {
  const [showView, setShowVideo] = useState(false);
  return (
    <div>
      <a
        href="#"
        role="button"
        tabIndex={0}
        aria-hidden="true"
        className="m-1 text-green-500 border-1"
        onClick={(e) => {
          e.preventDefault();
          setShowVideo(!showView);
        }}
      >
        {" "}
        {showView ? "Ẩn" : "Mở/Play"}
        {" "}
      </a>
      {"  "}

      <a
        href={href}
        target="_blank"
        rel="noreffer noopenner"
        className="m-1 text-green-500 border-1"
      >
        {" "}
        Mở tại trang khác{" "}
      </a>
      {showView ? <FbEmbedded href={href} /> : null}
    </div>
  );
}
export function MixEmbedded({ href, width = "100%", height = "60" }) {
  return <iframe width={width} height={height} src={href} frameborder="0" />;
}

export function MediaItem(props) {
  const { title, type } = props;
  return (
    <div className={mediaStyles.mediaItem}>
      <div className={mediaStyles.mediaItemTitle}>{title}</div>
      <div className={mediaStyles.mediaItemContent}>
        {type === mediaType.fbVideo ? (
          <FbWrap {...props} />
        ) : type === mediaType.mixCloud ? (
          <MixEmbedded {...props} />
        ) : null}
      </div>
    </div>
  );
}

export const MediaCategory = ({ categoryName, items = [] }) => {
  const renderItem = items => null;
  return (
    <div className={mediaStyles.mediaCategory}>
      <div className={mediaStyles.mediaCategoryHeader}>{categoryName}</div>
      <div className={mediaStyles.mediaCategoryBody}>
        {items.map(item => (
          <MediaItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
};
