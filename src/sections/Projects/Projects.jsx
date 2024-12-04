import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/arunkumar120/speech_emotion_recognition_project"
          h3="Speech Emotion Recognition"
          p="Audio-emotion-classification."
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/arunkumar120/Digit_Recognition"
          h3="Digit Recognition"
          p="AI & Ml"
        />
        <ProjectCard
          src={hipsster}
          link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_hmv9s3WTjw5j3YK77_1723100447659_completion_certificate.pdf"
          h3="Data	Visualisation"
          p="power BI"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Camp Systems"
          p="Data Analyst"
        />
      </div>
    </section>
  );
}

export default Projects;
