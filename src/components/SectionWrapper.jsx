import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

import Button from "./Button";

const SectionWrapper = ({ title, description, showBtn, mockupImage, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass}`}>
        <div
          className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`
            ${reverse ? styles.blackText : styles.whiteText}
            ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p className={`${reverse ? styles.blackText : styles.whiteText} ${styles.descriptionText}`}>
            {description}
          </p>

          {showBtn && (
            <Button
              assertUrl={assets.expo}
              link="https://expo.dev/preview/update?message=NFT%20App&updateRuntimeVersion=1.0.0&createdAt=2024-11-21T11%3A40%3A07.860Z&slug=exp&projectId=d599c3c1-4f7c-4436-921e-61e3e23758e5&group=26415598-0dc4-4604-88aa-41e96a1274df"
            />
          )}
        </div>

        <div className={`flex-[2] ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImage}
            alt="mockup"
            className={`${reverse ? "fadeLeftMini" : "fadeRightMini"} ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
