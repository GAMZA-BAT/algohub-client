import { PVTracker } from "@/common/component/PVTracker";
import { headingStyle } from "@/view/user/setting/index.css";
import { useSession } from "next-auth/react";
import EditForm from "./EditForm";
import { containerStyle } from "./index.css";

const MyProfile = () => {
  const { data } = useSession();

  return (
    <div className={containerStyle}>
      <PVTracker
        name="setting_profile_page_view"
        params={{ user_id: data?.user?.id ?? "" }}
      />
      <h1 className={headingStyle}>내 프로필</h1>
      <EditForm />
    </div>
  );
};

export default MyProfile;
