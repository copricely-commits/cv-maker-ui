import React, { useState } from "react";
import "./CopyShareLinkModal.css"
export default function CopyShareLinkModal({ isOpen, onClose }) {
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateLink = async () => {
    setLoading(true);
    setCopied(false);

    // fake API delay
    setTimeout(() => {
      const newLink = `https://example.com/share/${Math.random()
        .toString(36)
        .substring(2, 10)}`;
      setLink(newLink);
      setLoading(false);
    }, 700);
  };

  const copyToClipboard = async () => {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="copy_share_link_overlay">
      <div className="copy_share_link_modal">
        <button className="copy_share_link_close" onClick={onClose}>
          ✕
        </button>

        <h2 className="copy_share_link_title">Share Link</h2>
        {link && (
          <div class="copy_share_link_box">
            <p class="copy_share_link_text">
              Your PDF is ready.<br />
              Share it anywhere using this link.<br />
              Anyone with the link can download it instantly.
            </p>

          </div>
        
        )}
  <br/>

        <div className="copy_share_link_input_group">
          <input
            type="text"
            value={link}
            placeholder="Generate a share link..."
            readOnly
          />
          <button
            className={link?"copy_share_link_copy_btn":"copy_share_link_button_disabled"}
            onClick={copyToClipboard}
            disabled={!link?true:false}
            
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <button
          className="copy_share_link_generate_btn"
          onClick={generateLink}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Link"}
        </button>
      </div>
    </div>
  );
}
