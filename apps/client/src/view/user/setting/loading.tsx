import Spinner from "@/common/component/Spinner";
import { loadingSectionStyle } from "@/view/user/setting/GroupList/index.css";

const UserSettingLoading = () => {
  return (
    <div className={loadingSectionStyle}>
      <Spinner />
    </div>
  );
};

export default UserSettingLoading;
