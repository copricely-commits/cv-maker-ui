export const CVEducation = ({id, degree, institution, location, startDate, endDate, description }) => {

  
  return (
    <div className="cv-section">
      {id==='education' &&  <h3 className="cv-section-title">Education</h3>}
      
      <div className="cv-education-item">
        <div className="cv-item-header">
          <div className="cv-item-left">
            <h4 className="cv-item-title">{degree || 'Degree Name'}</h4>
            <p className="cv-item-subtitle">{institution || 'Institution Name'}</p>
          </div>
          <div className="cv-item-right">
            <p className="cv-item-date">{startDate || 'Start'} - {endDate || 'End'}</p>
            {location && <p className="cv-item-location">{location}</p>}
          </div>
        </div>
        {description && <p className="cv-item-description">{description}</p>}
      </div>
    </div>
  );
};

export const cvEducationConfig = {
  fields: {
    degree: { type: 'text', label: 'Degree' },
    institution: { type: 'text', label: 'Institution' },
    location: { type: 'text', label: 'Location' },
    startDate: { type: 'text', label: 'Start Date' },
    endDate: { type: 'text', label: 'End Date' },
    description: { type: 'textarea', label: 'Description' },
  },
  defaultProps: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'City, State',
    startDate: '2018',
    endDate: '2022',
    description: 'GPA: 3.8/4.0. Relevant coursework: Data Structures, Algorithms, Web Development',
  },
  render: CVEducation,
};
