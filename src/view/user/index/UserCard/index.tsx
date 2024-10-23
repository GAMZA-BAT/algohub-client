import type { UserResponse } from "@/api/user/type";
import Avatar from "@/common/component/Avatar";
import {
  avatarStyle,
  bojNickStyle,
  descStyle,
  nicknameStyle,
  userCardContainer,
} from "@/view/user/index/UserCard/index.css";

const UserCard = () => {
  const dummyData: UserResponse = {
    profileImage: "",
    nickname: "Yerin Baek",
    bjNickname: "@yerinewplant",
    desc: "FE Developer로 성장하고 있으면 현재는 Team AlgoHub에서 열심히 일하고 있습니다.",
  };

  return (
    <article className={userCardContainer}>
      <div className={avatarStyle}>
        <Avatar
          src={dummyData.profileImage}
          alt="User Info Card"
          size="large"
        />
      </div>
      <h1 className={nicknameStyle}>{dummyData.nickname}</h1>
      <h2 className={bojNickStyle}>{dummyData.bjNickname}</h2>
      <p className={descStyle}>{dummyData.desc} </p>
    </article>
  );
};

export default UserCard;
