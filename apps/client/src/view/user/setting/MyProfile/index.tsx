import { PVTracker } from "@/common/component/PVTracker";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { headingStyle } from "@/view/user/setting/index.css";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import EditForm from "./EditForm";
import { containerStyle } from "./index.css";

const MyProfile = () => {
  const { data } = useSession();
  const params = useParams();
  const userId = Array.isArray(params.user) ? params.user[0] : params.user;

  console.log(userId);

  usePvEvent("user_setting_my_profile_page_view", {
    user_id: data?.user?.id ?? "",
  });

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
