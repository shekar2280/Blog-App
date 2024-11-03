import React from "react";
import AboutMe from "@/components/aboutMe/AboutMe";


export async function getStaticProps() {
  return {
    props: {}, 
  };
}

const AboutPage = () => {
  return <AboutMe />;
};

export default AboutPage;
