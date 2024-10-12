import { useUser } from "../../authentication/useUser";
import { Avatar, StyledUserAvatar } from "./UserAvatarStyle";
import { useNavigate } from "react-router-dom";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = !user ? {} : user.user_metadata;
  const navigate = useNavigate();

  return (
    <StyledUserAvatar onClick={() => navigate("/account")}>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
