import React, { useState } from "react";
import "./projects.scss";
import { gallery } from "../projects/pics";
import { videos } from "../projects/pics";
import { BsPlayBtnFill } from "react-icons/bs";

const Projects = () => {
  const [toggle, setToggle] = useState(1);
  const [vid, setVid] = useState(null);
  const [img, setImg] = useState(null);

  const closePopup = () => {
    setVid(null);
    setImg(null);
  };

  const handleToggle = (index) => {
    setToggle(index);
  };

  return (
    <div>
      <br />
      <br />
      <main>
        <div className="btn-container">
          <button
            className={toggle === 1 ? "cats-btn active-cats-btn" : "cats-btn"}
            onClick={() => handleToggle(1)}
          >
            images
          </button>
          <button
            className={toggle === 2 ? "cats-btn active-cats-btn" : "cats-btn"}
            onClick={() => handleToggle(2)}
          >
            Videos
          </button>
        </div>
        <div className="galleyContainer">
          <div className="videoCardContainer">
            <div
              className={
                toggle === 1 ? "contents  active-contents" : "contents"
              }
            >
              {gallery.map((pics, idx) => (
                <img
                  key={idx}
                  className="project-img"
                  src={pics.pic}
                  alt="project-img"
                  onClick={() => setImg(pics.pic)}
                />
              ))}
            </div>
          </div>
          <div
            className={toggle === 2 ? "contents  active-contents" : "contents"}
          >
            {videos.map((vid, idx) => (
              <div className="videoCardContainer">
                <BsPlayBtnFill className="play-btn" />
                <video
                  key={idx}
                  className="project-img"
                  src={vid.video}
                  alt="project-img"
                  onClick={() => setVid(vid.video)}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="popup-media"
          style={{ display: vid || img ? "block" : "none" }}
        >
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          {img && <img src={img} alt="gallery-img" className="media-popup" />}
          {vid && <video className="media-popup" src={vid} autoPlay controls />}
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
