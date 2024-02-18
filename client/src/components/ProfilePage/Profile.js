
import React from "react"; 
import "./Profile.css";
import profileImage from "../../imgs/profile.png";
import skillsImage from "../../imgs/Skills.png";
import hobbiesImage from "../../imgs/Hobbies.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import RoomIcon from '@mui/icons-material/Room';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Profile = () => {
  return (
    <div className="ProfilePage">
      <div className="HeadSec">
        <p className="LogOut">LogOut</p>
      </div>
      <div className="ContentSec">
        <div className="ContentSec1">
          <div className="ProfileName">
            <AccountCircleIcon style={{height:"70px",width:"70px"}}/>
            <div className="Name">
              <h2>Saachi Peswani</h2>
              <h4>UI/UX Designer</h4>
            </div>
          </div>
          <div className="ConnectionsCount">
            <div className="AlumniCount">
              <AccountCircleIcon style={{height:"50px",width:"50px"}}/>
              <h2>Alumni</h2>
            </div>
            <div className="MentorCount">
              <AccountCircleIcon style={{height:"50px",width:"50px"}}/>
              <h2>Mentors</h2>
            </div>
          </div>
        </div>
        <div className="ContentSec2">
          <div className="PersonalDetails">
            <div className="phone Details">
              <LocalPhoneIcon/>
              <h3>1234567890</h3>
            </div>
            <div className="mail Details">
              <EmailIcon/>
              <h3>abc123@gmail.com</h3>
            </div>
            <div className="birth Details">
              <CakeIcon/>
              <h3>02 Feb 2002</h3>
            </div>
            <div className="location Details">
              <RoomIcon/>
              <h3>Mumbai</h3>
            </div>
          </div>
          <div className="CurrentSkills">
            <img src={skillsImage} alt="" />
          </div>
          <div className="Education">
            <h1>Education</h1>
            <div className="EduDetails">
              <div className="Graduation Details">
                <SchoolIcon/>
                <h3>
                  Bharatiya Vidya Bhavans Sardar Patel Institute of Technology
                </h3>
              </div>
              <div className="Diploma Details">
              <MenuBookIcon/>
                <h3>Shri Bhagubhai Maftlal Polytechnic</h3>
              </div>
              <div className="SSC Details">
                <ApartmentIcon/>
                <h3>Jankidevi Public School</h3>
              </div>
            </div>
          </div>
          <div className="Hobbies">
            <img src={hobbiesImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
