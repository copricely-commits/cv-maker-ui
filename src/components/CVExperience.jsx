const CVExperienceItem = ({
  position,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
}) => {
  const respList = responsibilities
    ? responsibilities.split("\n").filter((r) => r.trim())
    : [];

  return (
    <div className="cv-experience-item">
      <div className="cv-item-header">
        <div className="cv-item-left">
          <h4 className="cv-item-title">{position || "Position Title"}</h4>
          <p className="cv-item-subtitle">{company || "Company Name"}</p>
        </div>
        <div className="cv-item-right">
          <p className="cv-item-date">
            {startDate || "Start"} - {endDate || "Present"}
          </p>
          {location && <p className="cv-item-location">{location}</p>}
        </div>
      </div>

      {respList.length > 0 && (
        <ul className="cv-item-list">
          {respList.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


export const CVExperience = ({ experienceList = [] }) => {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Work Experience</h3>

      {experienceList.map((exp, index) => (
        <CVExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};


export const cvExperienceConfig = {
  fields: {
    experienceList: {
      type: "array",
      label: "Experience",
      arrayFields: {
        position: { type: "text", label: "Position" },
        company: { type: "text", label: "Company" },
        location: { type: "text", label: "Location" },
        startDate: { type: "text", label: "Start Date" },
        endDate: { type: "text", label: "End Date" },
        responsibilities: {
          type: "textarea",
          label: "Responsibilities (one per line)",
        },
      },
    },
  },

  defaultProps: {
    experienceList: [
      {
        position: "Senior Software Engineer",
        company: "Tech Company Inc.",
        location: "San Francisco, CA",
        startDate: "2022",
        endDate: "Present",
        responsibilities:
          "Developed and maintained web applications\nCollaborated with cross-functional teams\nImproved system performance by 40%",
      },
      {
        position: "Software Engineer",
        company: "Startup XYZ",
        location: "Remote",
        startDate: "2020",
        endDate: "2022",
        responsibilities:
          "Built REST APIs\nOptimized database queries\nLed frontend migration to React",
      },
    ],
  },

  render: CVExperience,
};
