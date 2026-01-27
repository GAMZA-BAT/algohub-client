import { useGroupByCodeQueryObject } from "@/app/api/groups/query";
import { IcnCopy, IcnCopyCheck } from "@/asset/svg";
import {
  boxStyle,
  codeStyle,
  iconStyle,
  labelStyle,
  wrapperStyle,
} from "@/shared/component/CodeClipboard/index.css";
import { APP_URL } from "@/shared/constant/url";
import { useClipboard } from "@/shared/hook/useClipboard";
import { theme } from "@/styles/themes.css";
import { useQuery } from "@tanstack/react-query";

interface CodeClipboardProps {
  label?: string;
  code: string;
}

const CodeClipboard = ({ label, code }: CodeClipboardProps) => {
  const { data: groupInfo, isSuccess } = useQuery(
    useGroupByCodeQueryObject(code),
  );

  const { isCopied, copy } = useClipboard();
  const clipboardText = `[AlgoHub 알림]\n\n'${groupInfo?.ownerNickname}'님께서 회원님을 ‘${groupInfo?.name}’ 그룹에 초대하셨습니다!\n\n아래 링크를 클릭하셔서 초대를 수락해 주세요!\n함께 도전하며 발전하는 시간을 보내시길 기대합니다.\n\n지금 바로 참여하세요:\n${APP_URL}/join-group/${code}`;

  if (!isSuccess) return null;

  return (
    <div className={wrapperStyle}>
      {label && <p className={labelStyle}>{label}</p>}

      <div className={boxStyle}>
        <p className={codeStyle}>{code}</p>
        {isCopied ? (
          <IcnCopyCheck color={theme.color.purple2} className={iconStyle} />
        ) : (
          <IcnCopy onClick={() => copy(clipboardText)} className={iconStyle} />
        )}
      </div>
    </div>
  );
};

export default CodeClipboard;
