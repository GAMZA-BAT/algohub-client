import type { UserResponse } from "@/api/users/type";
import Avatar from "@/common/component/Avatar";
import {
  avatarStyle,
  bojNickStyle,
  descStyle,
  nicknameStyle,
  userCardContainer,
} from "@/view/user/index/UserCard/index.css";

const UserCard = ({ userNickname: _user }: { userNickname: string }) => {
  const dummyData: UserResponse = {
    profileImage: "",
    nickname: "Yerin Baek",
    bjNickname: "@yerinewplant",
    description:
      "FE Developer로 성장하고 있으면 현재는 Team AlgoHub에서 열심히 일하고 있습니다.",
  };

  // const userInfo = await getUsers(user);
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
      <p className={descStyle}>{dummyData.description} </p>
    </article>
  );
};

export default UserCard;
