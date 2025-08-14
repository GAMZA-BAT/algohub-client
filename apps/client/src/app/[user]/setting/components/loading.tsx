import { loadingSectionStyle } from "@/app/[user]/setting/components/GroupList/index.css";
import Spinner from "@/common/component/Spinner";

const UserSettingLoading = () => {
  return (
    <div className={loadingSectionStyle}>
      <Spinner />
    </div>
  );
};

export default UserSettingLoading;
