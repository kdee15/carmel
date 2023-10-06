import React from "react";
import { isMobile } from "react-device-detect";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

function ComponentHeroBanner({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const {
    title,
    subtitle,
    textColor,
    backgroundImage,
    backgroundImageMobile,
    backgroundColor,
    backgroundOpacity,
    logo,
    homepageBanner,
  } = contentModule;

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <section
      className={`${classes.oHeroBlock} ${
        homepageBanner ? classes.bannerHome : classes.bannerPage
      }`}
    >
      <div
        className={`${classes.oContentBlock}`}
        style={{
          color: `${textColor}`,
        }}
      >
        {homepageBanner ? (
          <figure className={classes.mLogo}>
            {logo && (
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo?.fields?.file?.url}
                alt={`title`}
                width={logo?.fields.file.details.image.width}
                height={logo?.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            )}
          </figure>
        ) : null}
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
      {backgroundColor ? (
        <div
          className={`${classes.oBackgroundColor}`}
          style={{
            backgroundColor: `${backgroundColor}`,
            opacity: `${backgroundOpacity}`,
          }}
        ></div>
      ) : null}
      {mobileView ? (
        <>
          {homepageBanner ? (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(http:${backgroundImageMobile?.fields?.file.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(${backgroundImageMobile?.url})`,
              }}
            ></figure>
          )}
        </>
      ) : (
        <>
          {homepageBanner ? (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(http:${backgroundImage?.fields.file.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(${backgroundImage?.url})`,
              }}
            ></figure>
          )}
        </>
      )}
    </section>
  );
}

export default ComponentHeroBanner;
