import Avatar from "@/common/component/Avatar";
import { applicantInfoWrapper, nameStyle } from "./index.css";

type ApplicantInfoProps = {
  nickname: string;
  profileImage: string | null;
};

const ApplicantInfo = ({ nickname, profileImage }: ApplicantInfoProps) => {
  return (
    <div className={applicantInfoWrapper}>
      <Avatar src={profileImage} alt={`${nickname} 프로필 사진`} size="large" />
      <h1 className={nameStyle}>{nickname}</h1>
    </div>
  );
};

export default ApplicantInfo;
