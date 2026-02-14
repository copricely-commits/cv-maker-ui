import { useState, useRef } from 'react';
import { Puck, Render } from '@puckeditor/core';
import '@puckeditor/core/dist/index.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { cvHeaderConfig } from './CVHeader';
import { cvSummaryConfig } from './CVSummary';
import { cvEducationConfig } from './CVEducation';
import { cvExperienceConfig } from './CVExperience';
import { cvSkillsConfig } from './CVSkills';
import { threeColumnsConfig } from './AddColums';
import CVProfiles from "./CVProfiles"

import './CVMaker.css';
import CopyShareLinkModal from './CopyShareLinkModal/CopyShareLinkModal';

const config = {
  components: {
    CVHeader: cvHeaderConfig,
    CVSummary: cvSummaryConfig,
    CVEducation: cvEducationConfig,
    CVExperience: cvExperienceConfig,
    CVSkills: cvSkillsConfig,
    Colums: threeColumnsConfig,
    
'Project Link': {
  fields: {
    items: {
      type: 'array',
      label: 'Projects / Links',
      arrayFields: {
        title: {
          type: 'text',
          label: 'Title',
        },
        website: {
          type: 'text',
          label: 'Website URL',
        },
        github: {
          type: 'text',
          label: 'GitHub URL',
        },
      },
      getItemSummary: (item) =>
        item.title || 'New Project',
    },

    columns: {
      type: 'select',
      label: 'Columns',
      options: [
        { label: '1 Column', value: 1 },
        { label: '2 Columns', value: 2 },
        // { label: '3 Columns', value: 3 },
      ],
    },
  },

  defaultProps: {
    items: [
      {
        title: 'User App name',
        website: 'https://testcgp.com',
        github: 'https://github.com',
      },
      {
        title: 'AI Resume Builder',
        website: 'https://testcgp.com',
        github: 'https://github.com',
      },
    ],
    columns: 2,
  },

  render: ({ items, columns }) => (
    <CVProfiles items={items} columns={columns} />
  ),
},
  },
};

// const initialPageData = {
//   content: [
//     {
//       type: 'CVHeader',
//       props: {
//         id: 'header',
//         name: 'John Doe',
//         title: 'Software Engineer',
//         email: 'john@example.com',
//         phone: '+1 234 567 8900',
//         location: 'New York, USA',
//         imageUrl: '',
//       },
//     },
//     {
//       type: 'CVSummary',
//       props: {
//         id: 'summary',
//         summary:
//           'Experienced software engineer with 5+ years of expertise in building scalable web applications.',
//       },
//     },
//     {
//       type: 'CVExperience',
//       props: {
//         id: 'exp1',
//         position: 'Senior Software Engineer',
//         company: 'Tech Company Inc.',
//         location: 'San Francisco, CA',
//         startDate: '2022',
//         endDate: 'Present',
//         responsibilities:
//           'Led microservices\nMentored developers\nImproved performance',
//       },
//     },
//     {
//       type: 'CVEducation',
//       props: {
//         id: 'edu1',
//         degree: 'B.Tech Computer Science',
//         institution: 'University of Technology',
//         location: 'Boston',
//         startDate: '2015',
//         endDate: '2019',
//         description: 'GPA 3.8 / 4.0',
//       },
//     },
//     {
//       type: 'CVSkills',
//       props: {
//         id: 'skills',
//         skills: 'React, Node.js, AWS, Docker',
//       },
//     },
//     {
//     "type": "Project Link",
//     "props": {
//         "items": [
//             {
//                 "title": "User App name",
//                 "website": "https://testcgp.com",
//                 "github": "https://github.com"
//             },
//             {
//                 "title": "AI Resume Builder",
//                 "website": "https://testcgp.com",
//                 "github": "https://github.com"
//             }
//         ],
//         "columns": 2,
//         "id": "Project Link-7a43c797-ec63-4656-b3f7-f99bc4aeead1"
//     }
// }
    
//   ],
//   root: { props: { title: 'My CV' } },
// };
const initialPageData={
  "content": [
    {
      "type": "CVHeader",
      "props": {
        "id": "header",
        "name": "Rahul Sharma",
        "title": "Full Stack Developer",
        "email": "rahul@gmail.com",
        "phone": "985947896",
        "location": "Kolkata",
        "imageUrl": ""
      }
    },
    {
      "type": "CVSummary",
      "props": {
        "id": "summary",
        "summary": "Proficient in full stack development with expertise in React, React Native, Node.js, and MongoDB. Proven track record of delivering high-quality applications within tight deadlines. Strong understanding of full stack development life cycle. Proficient in Agile methodologies and version control systems like Git. Proficient in design patterns and software design principles."
      }
    },
    {
  "type": "CVExperience",
  "props": {
    "id": "experience",
    "experienceList": [
      {
        "position": "Full Stack Developer",
        "company": "Lala Company",
        "location": "Kolkata",
        "startDate": "03/12/2020",
        "endDate": "09/12/2025",
        "responsibilities": "Developed and maintained full stack applications using React, React Native, Node.js, and MongoDB.\nCollaborated with cross-functional teams to design and implement new features.\nEnsured high-quality code and followed Agile development methodologies."
      }
    ]
  }
}
,
    {
      "type": "CVEducation",
      "props": {
        "id": "education",
        "degree": "B.Tech CSE",
        "institution": "MAKAUT",
        "location": "Kolkata",
        "startDate": "02/12/2010",
        "endDate": "09/12/2015",
        "description": ""
      }
    },
     {
      "type": "CVEducation",
      "props": {
        "id": "education2",
        "degree": "M.Tech CSE",
        "institution": "MAKAUT Kolkata",
        "location": "Kolkata",
        "startDate": "02/12/2010",
        "endDate": "09/12/2015",
        "description": ""
      }
    },
    {
      "type": "CVSkills",
      "props": {
        "id": "skills",
        "skills": "React, React Native, Node.js, MongoDB, Agile methodologies, Git, Design patterns, Software design principles"
      }
    },
    {
      "type": "CVProjects",
      "props": {
        "id": "projects",
        "columns": 1,
        "items": [
          {
            "title": "TATA",
            "website": "https://tata.com",
            "github": "https://github.com"
          }
        ]
      }
    }
  ],
  "root": {
    "props": {
      "title": "My CV"
    }
  }
}

export const CVMaker = ({output}) => {
  const [pages, setPages] = useState([
    { id: `page-${Date.now()}`, data: output||initialPageData },
  ]);
  const [showPreview, setShowPreview] = useState(false);
  const pageRefs = useRef({});

  const updatePage = (id, newData) => {
    setPages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, data: newData } : p))
    );
  };

  const addPage = () => {
    setPages((prev) => [
      ...prev,
      {
        id: `page-${Date.now()}`,
        data: {
          content: [],
          root: { props: { title: 'CV Page' } },
        },
      },
    ]);
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const element = pageRefs.current[page.id];
      if (!element) continue;

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = 210;
      const pdfHeight = 297;

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      if (i > 0) pdf.addPage();
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        0,
        imgWidth * ratio,
        imgHeight * ratio
      );
    }

    pdf.save('my-cv.pdf');
  };

  console.log(pages,'data');
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="cv-maker-container">
      <div className="cv-maker-header">
        <h1>CV Maker</h1>
        <div className="cv-maker-actions">
          <button className='preview-btn' onClick={() => setShowPreview(!showPreview)}>
            {showPreview ? 'Edit Mode' : 'Preview'}
          </button>
    {!showPreview && (
          <button className='upload-btn' onClick={addPage}>✚ Add Page</button>
)}
          {showPreview && (
            <button className='download-btn' onClick={downloadPDF}>Download PDF</button>
          )}
          {/* <button onClick={() => setOpen(true)}>Open Share Modal</button> */}
        </div>
      </div>

      {!showPreview ? (
        <div className="cv-maker-editor">
          {pages.map((page, index) => (
            <div
              key={page.id}
              ref={(el) => (pageRefs.current[page.id] = el)}
              style={{
                width: '90%',
                minHeight: '215mm',
                background: '#fff',
                margin: '30px auto',
                padding: 20,
                boxShadow: '0 0 12px rgba(0,0,0,0.2)',
              }}
            >
              <Puck
                config={config}
                data={page.data}
                onChange={(newData) => updatePage(page.id, newData)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="cv-maker-preview">
          {pages.map((page) => (
            <div
              key={page.id}
              ref={(el) => (pageRefs.current[page.id] = el)}
              style={{
                width: '210mm',
                minHeight: '297mm',
                background: '#fff',
                margin: '20px auto',
                padding: 20,
                pageBreakAfter: 'always',
              }}
            >
              <Render config={config} data={page.data} />
            </div>
          ))}
        </div>
      )}
    </div>
     <CopyShareLinkModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
