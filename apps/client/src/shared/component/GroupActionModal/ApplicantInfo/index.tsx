import Avatar from "@/common/component/Avatar";
import { applicantInfoWrapper, profileStyle } from "./index.css";

type ApplicantInfoProps = {
  nickname: string;
  profileImage?: string;
};

const ApplicantInfo = ({ nickname, profileImage }: ApplicantInfoProps) => {
  return (
    <div className={applicantInfoWrapper}>
      <Avatar
        className={profileStyle}
        src={profileImage}
        alt={`${nickname} 프로필 사진`}
        size="large"
      />
    </div>
  );
};

export default ApplicantInfo;
