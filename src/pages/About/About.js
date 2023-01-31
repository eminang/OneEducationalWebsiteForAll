import React,{ useState, useEffect } from "react";
import axios from "axios";
import GitHubIcon from '@material-ui/icons/GitHub';
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import Footer from "../../components/Footer/Footer";
import ImgSrc from "./../../shared/ImgSrc";
import "./About.css";

const About = (props) => {

  const [contributors, setContributors] = useState([]);
  const [viewnumber, setViewNumber] = useState(15);
  const [adminmentors, setAdminMentors] = useState([]);
  const adminmentors_ids = [58785998, 78724676];

  const apiURL = "https://api.github.com/repos/Akshima-Ghai/OneEducationalWebsiteForAll/contributors";

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      const res = await axios.get(apiURL);
      setAdminMentors(res.data.filter(contributor => adminmentors_ids.includes(contributor.id)));
      setContributors(res.data.filter(contributor => !adminmentors_ids.includes(contributor.id)));
    };
    fetchData();
  }, []);

  const getrole = (id) => {
    switch(id){
      case 58785998 : return "Admin"; 
      case 78724676 : return "Mentor";
      default : return "Contributor";
    }
  }

  const handleViewMore = (e) => {
    e.preventDefault(); 
    setViewNumber(viewnumber + 15);
  }

  const handleViewLess = (e) => {
    e.preventDefault(); 
    setViewNumber(viewnumber - 15);
  }

  return (
    <div>
      <section className="about__container">
        <h1 className="about__heading">Who we are</h1>
        <div className="about__div">
          <img src={ImgSrc.Education} alt="logo" />
          <h1>What is AFREDU?</h1>
          <p>
            AFREDU is an AFREDU is an international nonprofit organization dedicated to providing a diverse platform where children, students, adults and corporations can use for structured shared knowledge and culture.
.
          </p>
        </div>
        <div className="about__div">
          <img src={ImgSrc.Working} alt="logo" />
          <h1>How does it work?</h1>
          <p>
            Students can create an account and use all the resources and features we provide.
          </p>
        </div>
        <div className="about__div">
          <img src={ImgSrc.Free} alt="logo" />
          <h1>Is it free?</h1>
          <p>YES, Forever.</p>
        </div>
        <br/>
        <br/>
        <h1 className="about__heading">Our Team</h1>
        
      </section>
      <Footer />
    </div>
  );
};

export default About;
