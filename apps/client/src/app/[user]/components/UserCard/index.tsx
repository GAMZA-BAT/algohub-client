import {
  avatarStyle,
  bojNickStyle,
  descStyle,
  nicknameStyle,
  userCardContainer,
} from "@/app/[user]/components/UserCard/index.css";
import { getUsers } from "@/app/api/users";
import Avatar from "@/common/component/Avatar";

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
