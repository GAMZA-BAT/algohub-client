import { getUsers } from "@/app/api/users";
import Avatar from "@/common/component/Avatar";
import {
  avatarStyle,
  bojNickStyle,
  descStyle,
  nicknameStyle,
  userCardContainer,
} from "@/view/user/index/UserCard/index.css";

const UserCard = async ({ userNickname }: { userNickname: string }) => {
  const userInfo = await getUsers(userNickname);

  return (
    <article className={userCardContainer}>
      <div className={avatarStyle}>
        <Avatar src={userInfo.profileImage} alt="User Info Card" size="large" />
      </div>
      <h1 className={nicknameStyle}>{userInfo.nickname}</h1>
      <h2 className={bojNickStyle}>{userInfo.bjNickname}</h2>
      <p className={descStyle}>{userInfo.description} </p>
    </article>
  );
};

export default UserCard;
