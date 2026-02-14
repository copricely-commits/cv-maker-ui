export const CVSummary = ({ summary }) => {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Professional Summary</h3>
      <p className="cv-summary-text">{summary || 'Write your professional summary here...'}</p>
    </div>
  );
};

export const cvSummaryConfig = {
  fields: {
    summary: {
      type: 'textarea',
      label: 'Professional Summary',
    },
  },
  defaultProps: {
    summary: 'Experienced professional with a proven track record of success...',
  },
  render: CVSummary,
};
