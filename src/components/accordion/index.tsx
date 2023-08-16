import React, { useState } from "react";

const Accordion = () => {
  const [activePanel, setActivePanel] = useState("");
  const toggleChange = (panelId: any) => {
    setActivePanel(panelId === activePanel ? "" : panelId);
  };

  return (
    <div className="mt-5 p-5">
      <div className="accordion-wrapper">
        <div className="accordion" id="content1">
          <div className="heading" onClick={() => toggleChange("content1")}>
            <h3>Main Content One</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content1" ? "active" : "no-content "
            }`}
            id="content1"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion" id="content2">
          <div className="heading" onClick={() => toggleChange("content2")}>
            <h3>Main Content Two</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content2" ? "active" : "no-content"
            }`}
            id="content2"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion" id="content3">
          <div className="heading" onClick={() => toggleChange("content3")}>
            <h3>Main Content Three</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content3" ? "active" : "no-content "
            }`}
            id="content3"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
