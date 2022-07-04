import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>
        This is a React Task Tracker App that allows users add, delete and set
        reminders for their daily tasks
      </h3>
      <h4>Version: 1.0.0</h4>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default About;
