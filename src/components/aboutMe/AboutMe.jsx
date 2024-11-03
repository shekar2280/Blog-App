import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.content_wrapper}>
        <div className={styles.text_container}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.text}>
            Hello! I’m T Somashekar, a web developer with a passion for creating
            responsive and user-friendly web applications. With a background in
            Information Technology, I focus on building efficient and visually
            appealing applications. When I’m not coding, I enjoy exploring new
            technologies and working on personal projects. I also love spending
            time outdoors and staying active. Feel free to connect with me!
          </p>
          <h2 className={styles.skills}>Skills</h2>
          <p>
            <ul className={styles.listItems}>
              <label className={styles.listTitle}>Front-end Development</label>
              {["HTML", "CSS", "JavaScript", "React", "Next.js"].map(
                (skill, index) => (
                  <li key={`frontend-skill-${index}`}>{skill}</li>
                )
              )}
            </ul>
            <ul className={styles.listItems}>
              <label className={styles.listTitle}>Backend Development</label>
              {["Node.js", "Express"].map((skill, index) => (
                <li key={`backend-skill-${index}`}>{skill}</li>
              ))}
            </ul>
            <ul className={styles.listItems}>
              <label className={styles.listTitle}>Database Management</label>
              {["MongoDB", "MySQL"].map((skill, index) => (
                <li key={`database-skill-${index}`}>{skill}</li>
              ))}
            </ul>
          </p>

          <p className={styles.desc}>
            I enjoy exploring new technologies and working on personal projects.
            I also love spending time outdoors and staying active. Feel free to
            connect with me!
          </p>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src="/team_up.svg"
            alt="Decorative SVG"
            width={100}
            height={100}
            className={styles.about_svg}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
