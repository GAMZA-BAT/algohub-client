"use client";

import { groupSchema } from "@/app/api/groups/schema";
import type { GroupResponse } from "@/app/api/groups/type";
import {
  useDeleteGroupMutation,
  usePatchGroupMutation,
} from "@/app/group/[groupId]/setting/query";
import { useBooleanState } from "@/common/hook/useBooleanState";
import CodeClipboard from "@/shared/component/CodeClipboard";
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

import SupportingText from "@/common/component/SupportingText";
import { Form } from "@/shared/component/Form";
import DateFormController from "@/shared/component/GroupInfoForm/DateFormController";
import DescFormController from "@/shared/component/GroupInfoForm/DescFormController";
import ImageFormController from "@/shared/component/GroupInfoForm/ImageFormController";
import NameFormController from "@/shared/component/GroupInfoForm/NameFormController";
import {
  dateWrapper,
  formLabelStyle,
  formStyle,
} from "@/shared/component/GroupInfoForm/index.css";
import { getGroupFormData } from "@/shared/component/GroupInfoForm/util";

type SettingSidebarProps = {
  info: GroupResponse;
  code: string;
  groupId: number;
};

const SettingSidebar = ({ info, code }: SettingSidebarProps) => {
  const groupId = useGetGroupId();
  const { isOpen, open, close } = useBooleanState();
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      groupImage: info.groupImage,
      name: info.name,
      startDate: new Date(info.startDate),
      endDate: new Date(info.endDate),
      introduction: info.introduction,
    },
  });

  const { mutate: deleteMutate } = useDeleteGroupMutation();
  const { mutate: patchMutate } = usePatchGroupMutation(+groupId);

  const handleSubmit = (values: z.infer<typeof groupSchema>) => {
    const data = getGroupFormData(values);
    patchMutate(data);
  };
  const error = form.formState.errors.endDate;

  return (
    <>
      <div className={sidebarWrapper}>
        <Form {...form}>
          <form
            className={formStyle({ variant: "group-setting" })}
            onSubmit={form.handleSubmit((v) => handleSubmit(v))}
          >
            <ImageFormController form={form} />
            <NameFormController form={form} variant="group-setting" />
            <div>
              <p className={formLabelStyle({ variant: "group-setting" })}>
                스터디 기간
              </p>
              <div className={dateWrapper}>
                <DateFormController
                  form={form}
                  variant="group-setting"
                  dateType="startDate"
                />
                <DateFormController
                  form={form}
                  variant="group-setting"
                  dateType="endDate"
                />
              </div>
              {error && (
                <SupportingText isError hasErrorIcon message={error.message} />
              )}
            </div>
            <DescFormController form={form} variant="group-setting" />
            <div className={submitWrapper}>
              <button
                type="submit"
                className={editTextStyle({
                  isActive:
                    form.formState.isValid && !form.formState.isSubmitted,
                })}
                disabled={!form.formState.isValid || form.formState.isSubmitted}
              >
                수정하기
              </button>
              <button type="button" onClick={open}>
                <p className={deleteTextStyle}>스터디 삭제하기</p>
              </button>
            </div>
          </form>
        </Form>

        <CodeClipboard label="스터디 링크" code={code} />
        <PromptModal
          isOpen={isOpen}
          onClose={close}
          title="스터디를 삭제하시겠습니까?"
          prompt={
            "삭제 시 스터디와 관련된 모든 데이터가 영구적으로 삭제됩니다.\n복구할 수 없으니 신중히 결정해 주세요."
          }
          confirmText="삭제하기"
          onConfirm={() => deleteMutate(+groupId)}
        />
      </div>
    </>
  );
};

export default SettingSidebar;
