import React, { useState } from "react";
import "./landing.css";
import LoadingPopup from "../Loading/LoadingPopup"
import api from "../../axios";
import { CVMaker } from "../CVMaker";
export default function LandingPage() {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [show,setShow]=useState(false)




   const handleCVSubmit = async () => {
     if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await api.post("/cv_generate", {shortDetails:input});
   setOutput(res.data)
      setLoading(false);
      setShow(true)
    } catch (err) {
      console.error("CV submission failed", err);
    }
  };
console.log(output);

  return (
    <>
    {!show &&(
 <>
    <LoadingPopup isVisible={loading}/>
    <div className="container">

    

      {/* HERO */}
      <section className="hero">

        <h1>Create CV using AI</h1>

        <p>Generate professional resume instantly</p>

        <div className="aiBox">

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your details..."
            className="ai_textarea"
          />

          <button
            onClick={handleCVSubmit}
            className="generateBtn"
          >
            {loading ? "Generating..." : "Generate CV"}
          </button>

     

        </div>

      </section>


    </div>
    </>
    )}
   

  {show &&  < CVMaker output={output}/> }
    </>
  );
}
