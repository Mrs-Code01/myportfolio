import React from "react";
import { motion } from "framer-motion";
import styles from "./css/Home.module.css";
import Audio from "./components/PlayAudioOnLoad";
import CountUp from "./components/CountUp";

const Home = () => {
  return (
    <>
      <Audio />
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1>HI!</h1>
          <h1>I am Idubor Mercy</h1>
          <p>Frontend Developer</p>
          <a href="#portfolio">Visit my works</a>
        </motion.div>
      </main>
      {/* End of the main */}
      {/* End of the main */}
      {/* End of the main */}
      <section className={styles.about} id="about">
        <div className={styles.about_container}>
          <div>
            <img src="/images/pic5.jpg" alt="" />
            <p>Who I am?</p>
            <h2>About Me</h2>
            <p>
              A seasoned frontend developer with 3+ years of experience, using
              modern javascript frameworks and a passion for frontend
              architecture and experience design; ready to build
              high-performance, accessible and responsive user interfaces for
              local, national and international clients.
              <br />I translate UI/UX designs into production-ready code and
              collaborate across teams; pushing the boundaries of frontend
              innovation.
            </p>
          </div>
        </div>
      </section>
      {/* End of about */}
      {/* End of about */}
      {/* End of about */}
      <section className={styles.skills} id="skills">
        <div className={styles.skills_container}>
          <div className={styles.skills_top}>
            <p>What I can do?</p>
            <h2>Skills</h2>
          </div>
          {/* End of skills top */}
          <div className={styles.skills_flex}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>01</h2>
                <h3>HTML</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 1 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>02</h2>
                <h3>CSS</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 2 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>03</h2>
                <h3>Javascript</h3>
                <CountUp end={75} />
              </div>
            </motion.div>
            {/* Skill 3 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>04</h2>
                <h3>React</h3>
                <CountUp end={80} />
              </div>
            </motion.div>
            {/* Skill 4 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>05</h2>
                <h3>Tailwind CSS</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>06</h2>
                <h3>REST APIs</h3>
                <CountUp end={95} />
              </div>
            </motion.div>
            {/* Skill 5 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>07</h2>
                <h3>Next.js</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 6 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>08</h2>
                <h3>Responsive Design</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 7 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>09</h2>
                <h3>Git/Github</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 8 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>10</h2>
                <h3>Vercel</h3>
                <CountUp end={100} />
              </div>
            </motion.div>
            {/* Skill 9 */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2>11</h2>
                <h3>Framer Motion</h3>
                <CountUp end={80} />
              </div>
            </motion.div>
            {/* Skill 10 */}
          </div>
        </div>
      </section>
      {/* End of skills */}
      {/* End of skills */}
      {/* End of skills */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.portfolio_container}>
          <div className={styles.portfolio_top}>
            <p>What I have done?</p>
            <h2>Portfolio</h2>
          </div>
          {/* End of portfolio top */}
          <div className={styles.portfolio_flex}>
            <div>
              <div className={styles.show}>
                <h3>NGO Web App</h3>
                <a href="https://www.ahfnig.org/">View</a>
              </div>
            </div>
            <div>
              <div className={styles.show}>
                <h3>Waste Upcycling Platform</h3>
                <a href="https://www.plastibuildafrica.com/">View</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
