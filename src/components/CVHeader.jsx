import { useRef } from "react";
import Location_img from "./images/location.png"
import email_img from "./images/email.png"
import telephone_img from "./images/telephone.png"
/* ===========================
   Modern Avatar Image Upload
=========================== */
const ImageUploadField = ({ value, onChange }) => {
  const inputRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files allowed");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="avatar-upload-wrapper">
      <div
        className="avatar-circle"
        onClick={() => inputRef.current.click()}
      >
        {value ? (
          <img src={value} alt="Profile" />
        ) : (
          <span className="avatar-placeholder">+</span>
        )}
        <div className="avatar-overlay">Change</div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      <style>{`
        .avatar-upload-wrapper {
          display: flex;
          justify-content: center;
        }

        .avatar-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2px dashed #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: #f9f9ff;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-placeholder {
          font-size: 36px;
          color: #4f46e5;
          font-weight: bold;
        }

        .avatar-overlay {
          position: absolute;
          inset: 0;
          background: rgba(79,70,229,0.6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .avatar-circle:hover .avatar-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

/* ===========================
   CV Header Component
=========================== */
export const CVHeader = ({
  name,
  title,
  email,
  phone,
  location,
  image,
  textColor,
  align,
  imagePosition,
}) => {
  const isVertical = imagePosition === "top";

  return (
    <div className="cv-header">
      <div
        className="cv-header-content"
        style={{
          flexDirection: isVertical
            ? "column"
            : imagePosition === "right"
            ? "row-reverse"
            : "row",
          textAlign: align,
          color: textColor,
        }}
      >
        {image && (
          <div className="cv-image-container">
            <img src={image} alt={name} className="cv-profile-image" />
          </div>
        )}

        <div className="cv-header-info">
          <h1 className="cv-section-title">{name || "Your Name"}</h1>
          <h2 className="cv-title">{title || "Professional Title"}</h2>
          <div className="cv-contact">
            {email && <span style={{justifyContent:"center",display:"flex"}}><img src={email_img} width='20px'  style={{marginRight:"9px"}}/> {email}</span>}
            {phone &&<span style={{justifyContent:"center",display:"flex"}}><img src={telephone_img} width='20px'  style={{marginRight:"3px"}}/> {phone}</span>}
            {location && <span style={{justifyContent:"center",display:"flex"}}><img src={Location_img} width='20px'  style={{marginRight:"3px"}}/> {location}</span>}
          </div>
        </div>
      </div>

      <style>{`
        .cv-header {
          padding: 0px;
          background: #ffffff;
          border-bottom: 0px solid #eee;
          font-family: Arial, sans-serif;
        }

        .cv-header-content {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .cv-image-container {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .cv-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cv-header-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cv-name {
          font-size: 26px;
          font-weight: bold;
          margin: 0;
        }

        .cv-title {
          font-size: 16px;
          margin: 0;
        }

        .cv-contact span {
          display: block;
          font-size: 14px;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

/* ===========================
   PUCK CONFIG
=========================== */
export const cvHeaderConfig = {
  fields: {
    image: {
      type: "custom",
      label: "Profile Image",
      render: ImageUploadField,
    },
    name: { type: "text", label: "Full Name" },
    title: { type: "text", label: "Professional Title" },
    email: { type: "text", label: "Email" },
    phone: { type: "text", label: "Phone" },
    location: { type: "text", label: "Location" },

    textColor: {
      type: "text", // use type: "color" if your Puck supports it
      label: "Text Color",
    },
    align: {
      type: "select",
      label: "Text Alignment",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    imagePosition: {
      type: "select",
      label: "Image Position",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
        { label: "Top", value: "top" },
      ],
    },
  },
  defaultProps: {
    name: "John Doe",
    title: "Software Engineer",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    location: "New York, USA",
    image: "",
    textColor: "#000000",
    align: "left",
    imagePosition: "left",
  },
  render: CVHeader,
};
