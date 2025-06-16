import React from "react";

import { Download, Features, SectionWrapper } from "./components";

import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="StudentPal. Mental Health Assistant"
        description="Track your mental health, daily to better understand how you feel and why!"
        mockupImage={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Personalized Insights & Recommendations"
        description="Get personalized analytics & insights of your mood. You get recommendations & forecasts for your mood as well. And there's daily streak tracking."
        mockupImage={assets.analytics}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Log Mood"
        description="Log Your Mood very easily, and in a short amount of steps."
        mockupImage={assets.logMood}
        reverse={true}
      />

      <SectionWrapper
        title="Mood at a glance"
        description="See your mood at a glance with the mood diary, color coded with mood colors for each day."
        mockupImage={assets.moodDiary}
        banner={"banner02"}
      />

      <SectionWrapper
        title="Productivity Tools"
        description="Feel better & reduce stress with productivity tools."
        mockupImage={assets.tools}
        reverse={true}
      />

      <SectionWrapper
        title="Community Chat & Health Bot Support"
        description="Chat in a positive community, speak openly to a mental health chatbot, and get support you need."
        mockupImage={assets.support}
        banner={"banner"}
      />

      {/* <Download /> */}

      <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className={`bold`}>Ngoni Katsidzira</span>
        </p>
      </div>
    </>
  );
}

export default App;
