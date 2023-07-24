import React from "react";
import "./Menus.css";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
  FcBusinessContact,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>

              <div className="nav-link">
                <FcAbout />
                About
              </div>

              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>

              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>

              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>

              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>

              <div className="nav-link">
                <FcVoicePresentation />
                TestiMonial
              </div>

              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title="Home" />
            </div>

            <div className="nav-link">
              <FcAbout title="About" />
            </div>

            <div className="nav-link">
              <FcPortraitMode title="Work Experince" />
            </div>

            <div className="nav-link">
              <FcBiotech />
            </div>

            <div className="nav-link">
              <FcReadingEbook />
            </div>

            <div className="nav-link">
              <FcVideoProjector />
            </div>

            <div className="nav-link">
              <FcVoicePresentation />
            </div>

            <div className="nav-link">
              <FcBusinessContact />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
