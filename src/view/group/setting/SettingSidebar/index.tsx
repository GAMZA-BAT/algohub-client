"use client";
import { groupSchema } from "@/api/groups/schema";
import type { GroupResponse } from "@/api/groups/type";
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

const SettingSidebar = ({ info }: { info: GroupResponse }) => {
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      profileImage: info.groupImage,
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
    </div>
  );
};

export default SettingSidebar;
