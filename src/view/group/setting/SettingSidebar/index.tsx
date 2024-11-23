"use client";
import { groupSchema } from "@/api/groups/schema";
import type { GroupResponse } from "@/api/groups/type";
import CodeClipboard from "@/shared/component/CodeClipboard";
import GroupInfoForm from "@/shared/component/GroupInfoForm";
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
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      groupImage: info.groupImage,
      name: info.name,
      introduction: info.introduction,
    },
  });

  return (
    <div className={sidebarWrapper}>
      <GroupInfoForm form={form} variant="group-setting">
        <div className={submitWrapper}>
          <button type="submit" disabled={!form.formState.isValid}>
            <p className={editTextStyle}>수정하기</p>
          </button>
          <button type="button">
            <p className={deleteTextStyle}>스터디 삭제하기</p>
          </button>
        </div>
      </GroupInfoForm>
      <CodeClipboard label="스터디 링크" code={code} />
    </div>
  );
};

export default SettingSidebar;
