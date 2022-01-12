import SectionTag from "components/SectionTag";
import SkillCard from "components/SkillCard";

export default function Skills() {
  return (
    <section className='skills container'>
      <div>
        <SectionTag>Skills</SectionTag>
        <div className='intro space-y'>
          <h2>Skills and Experience</h2>
          <p>
            I&apos;ve worked with many projects over the years. Here&apos;s the
            skills I&apos;ve picked up
          </p>
        </div>
      </div>

      <div className='grid skills-grid'>
        <SkillCard
          title='Design'
          skills={[
            "User Experience & journey mapping",
            "Adobe Suite",
            "Facilitating UX workshops",
            "Experience in accessible design",
            "Creating and maintaining design systems"
          ]}
        />
        <SkillCard
          title='Other'
          skills={[
            "CSS, HTML & JS",
            "Knowledgeable about the development process",
            "Managing expectations and time on projects",
            "Experience in mobile apps, built some on the side"
          ]}
        />
      </div>
    </section>
  );
}
