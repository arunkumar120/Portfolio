import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL " />
        <SkillList src={checkMarkIcon} skill="Excel" />
        <SkillList src={checkMarkIcon} skill="PowerBI" />
        <SkillList src={checkMarkIcon} skill="NumPy|Pandas" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MachineLearning" />
        <SkillList src={checkMarkIcon} skill="DeepLearning" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="DataPreprocessing" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="DataAnalysis" />
        <SkillList src={checkMarkIcon} skill="Dashboarding" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="DataCleaning" />
        <SkillList src={checkMarkIcon} skill="BigData" />
      </div>
    </section>
  );
}

export default Skills;
