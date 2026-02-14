export const CVSkills = ({ skills }) => {
  const skillList = skills ? skills.split(',').map(s => s.trim()).filter(s => s) : [];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Skills</h3>
      <div className="cv-skills-container">
        {skillList.map((skill, index) => (
          <span key={index} className="cv-skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const cvSkillsConfig = {
  fields: {
    skills: {
      type: 'textarea',
      label: 'Skills (comma-separated)',
    },
  },
  defaultProps: {
    skills: 'JavaScript, React, Node.js, Python, SQL, Git, AWS, Docker',
  },
  render: CVSkills,
};
