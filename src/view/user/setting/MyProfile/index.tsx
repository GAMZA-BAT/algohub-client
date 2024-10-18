import { headingStyle } from "../index.css";
import EditForm from "./EditForm";
import { containerStyle } from "./index.css";

const MyProfile = () => {
  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>내 프로필</h1>
      <EditForm />
    </div>
  );
};

export default MyProfile;
