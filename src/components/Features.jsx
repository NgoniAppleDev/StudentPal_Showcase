import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            StudentPal was developed using Swift language & the declarative SwiftUI framework.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.swift} iconText={"Swift"} />
          <FeatureCard iconUrl={assets.swiftUI} iconText={"SwiftUI"} />
          <FeatureCard iconUrl={assets.swiftData} iconText={"Swift Data"} />
          <FeatureCard iconUrl={assets.pieChart} iconText={"Swift Charts"} />
          <FeatureCard iconUrl={assets.appleHealth} iconText={"Apple Health"} />
        </div>
      </div>
    </div>
  );
};

export default Features;
