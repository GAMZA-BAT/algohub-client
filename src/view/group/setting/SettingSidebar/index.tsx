"use client";
import { groupSchema } from "@/api/groups/schema";
import type { GroupResponse } from "@/api/groups/type";
import { useDeleteGroupMutation } from "@/app/group/[groupId]/setting/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import CodeClipboard from "@/shared/component/CodeClipboard";
import GroupInfoForm from "@/shared/component/GroupInfoForm";
import PromptModal from "@/shared/component/PromptModal";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import {
  deleteTextStyle,
  editTextStyle,
  sidebarWrapper,
  submitWrapper,
} from "@/view/group/setting/SettingSidebar/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type SettingSidebarProps = {
  info: GroupResponse;
  code: string;
};

const SettingSidebar = ({ info, code }: SettingSidebarProps) => {
  const groupId = useGetGroupId();
  const { mutate: deleteMutate } = useDeleteGroupMutation(+groupId);
  const { isOpen, open, close } = useBooleanState();
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      groupImage: info.groupImage,
      name: info.name,
      introduction: info.introduction,
    },
  });

  const handleDeleteGroup = () => deleteMutate(+groupId);

  return (
    <>
      <div className={sidebarWrapper}>
        <GroupInfoForm form={form} variant="group-setting">
          <div className={submitWrapper}>
            <button type="submit" disabled={!form.formState.isValid}>
              <p className={editTextStyle}>수정하기</p>
            </button>
            <button type="button" onClick={open}>
              <p className={deleteTextStyle}>스터디 삭제하기</p>
            </button>
          </div>
        </GroupInfoForm>
        <CodeClipboard label="스터디 링크" code={code} />
      </div>
      <PromptModal
        isOpen={isOpen}
        onClose={close}
        title="스터디를 삭제하시겠습니까?"
        prompt={
          "삭제 시 스터디와 관련된 모든 데이터가 영구적으로 삭제됩니다.\n복구할 수 없으니 신중히 결정해 주세요."
        }
        confirmText="삭제하기"
        onConfirm={handleDeleteGroup}
      />
    </>
  );
};

export default SettingSidebar;
