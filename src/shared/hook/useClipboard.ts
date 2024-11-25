import { useToast } from "@/common/hook/useToast";
import { useState } from "react";

export const useClipboard = () => {
  const { showToast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (code: string) => {
    //TODO: API 연결 후 변경
    const sender = "진이";
    const groupName = "숭실대학교 알고리즘 스터디";

    const inviteWriting = `[AlgoHub 알림]\n\n'${sender}'님께서 회원님을 ‘${groupName}’ 그룹에 초대하셨습니다!\n\n아래 링크를 클릭하셔서 초대를 수락해 주세요!\n함께 도전하며 발전하는 시간을 보내시길 기대합니다.\n\n지금 바로 참여하세요:\nalgohub.kr/join-group/${code}`;

    await navigator.clipboard.writeText(inviteWriting).then(() => {
      showToast("성공적으로 복사되었습니다.", "success");
      setIsCopied(true);
    });
  };

  return { isCopied, copy };
};