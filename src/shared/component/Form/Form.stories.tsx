import Button from "@/common/component/Button";
import {
  getMultipleRevalidationHandlers,
  handleOnChangeMode,
} from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormController } from ".";
import {
  fieldsetStyle,
  itemStyle,
  storyContentStyle,
  storyFormStyle,
} from "./index.css";

const meta: Meta<typeof Form> = {
  title: "Shared/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  render: () => {
    const loginSchema = z.object({
      id: z
        .string()
        .min(6)
        .max(12)
        .regex(/^[a-zA-Z0-9]+$/),

      password: z
        .string()
        .min(8)
        .max(15)
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/),
    }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      mode: "onTouched",
    });

    // 로그인 폼은 field 2개가 Description을 공유하고 있어서 errors로 isError 직접 제작
    const isError = !!Object.keys(form.formState.errors).length;
    // zod에서 메세지를 처리하면 모든 메서드 체인마다 똑같은 `, {message: "msg"}`를 적어야해서 아래처럼 단순화
    const message = isError ? "아이디 혹은 비밀번호를 확인해주세요" : undefined;
    const onSubmit = (_values: z.infer<typeof loginSchema>) => {};
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "login" })}
        >
          <div className={storyContentStyle.loginContents}>
            <div className={storyContentStyle.fields}>
              <FormController
                form={form}
                type="input"
                name="id"
                showDescription
                descriptionPosition="top"
                descriptionProps={{ isError, message, id: "form-description" }} // description 공유
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "아이디",
                  "aria-describedby": "form-description", // description 공유
                }}
              />
              <FormController
                form={form}
                type="input"
                name="password"
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "비밀번호",
                  "aria-describedby": "form-description", // description 공유
                }}
              />
            </div>
            <Button type="submit" size="medium">
              로그인
            </Button>
          </div>
        </form>
      </Form>
    );
  },
};

export const PasswordConfirm: Story = {
  render: () => {
    const passwordSchema = z
      .object({
        password: z
          .string()
          .min(8)
          .max(15)
          .regex(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]+$/,
          ),

        confirmPassword: z.string(),
      })
      .superRefine(async (data, ctx) => {
        // password 일치 여부
        if (data.password !== data.confirmPassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
            path: ["confirmPassword"],
          });
        }
      }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof passwordSchema>>({
      resolver: zodResolver(passwordSchema),
      mode: "onTouched",
    });

    const { errors } = form.formState;

    // zod 검사 결과를 기반으로 isError 직접 제작
    const isError =
      !!errors.password || errors.confirmPassword?.type === "custom";
    // 에러 없으면 안내 메세지 출력
    const message =
      errors.confirmPassword?.message ||
      "영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리";

    const onSubmit = (_values: z.infer<typeof passwordSchema>) => {};
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "login" })}
        >
          <div className={storyContentStyle.loginContents}>
            <div className={storyContentStyle.fields}>
              <FormController
                form={form}
                type="input"
                name="password"
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "비밀번호",
                  "aria-describedby": "password-description", // description 공유 (confirm password)
                }}
              />
              <FormController
                form={form}
                type="input"
                name="confirmPassword"
                // 비밀번호 field도 같이 검사하여 둘이 같이 onTouched 한 것 처럼 작동
                revalidationHandlers={getMultipleRevalidationHandlers(
                  "password",
                )}
                showDescription
                descriptionProps={{
                  isError,
                  message,
                  id: "password-description", // description 공유 (confirm password)
                }}
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "비밀번호 확인",
                  "aria-describedby": "password-description", // description 공유 (confirm password)
                }}
              />
            </div>
            <Button type="submit" size="medium">
              비밀번호 체크
            </Button>
          </div>
        </form>
      </Form>
    );
  },
};

export const ValidateOnServer: Story = {
  render: () => {
    const serverValidationSchema = z.object({
      nickname: z
        .string()
        .min(0)
        .max(16, { message: "닉네임을 확인해주세요" })
        .regex(/^[a-zA-Z0-9]+$/, "닉네임을 확인해주세요"),

      baekjoonId: z
        .string()
        .min(4, { message: "백준 아이디를 확인해주세요" })
        .max(20, { message: "백준 아이디를 확인해주세요" })
        .regex(/^[a-zA-Z0-9_]+$/, "백준 아이디를 확인해주세요"),

      introduction: z.string().min(2).max(20),
    });
    // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof serverValidationSchema>>({
      resolver: zodResolver(serverValidationSchema),
      mode: "onTouched",
    });

    const { errors, dirtyFields } = form.formState;

    // 기본적으로 메세지 표시x,
    // 에러 발생 시 에러 & 에러 메세지 표시
    const nicknameValidationSuccess = !errors.nickname && dirtyFields.nickname;
    const nicknameMsg = nicknameValidationSuccess
      ? "사용가능한 닉네임이에요."
      : errors.nickname?.message;

    const baekjoonIdValidationSuccess =
      !errors.baekjoonId && dirtyFields.baekjoonId;
    const bjMsg = baekjoonIdValidationSuccess
      ? "정상적으로 연동되었어요."
      : errors.baekjoonId?.message;

    const onSubmit = (_values: z.infer<typeof serverValidationSchema>) => {};
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "edit" })}
        >
          <div className={storyContentStyle.editContents}>
            <div className={storyContentStyle.fields}>
              <p style={{ color: "white" }}>
                스토리용 임시 검증 : t로 끝나면 통과, 그 외 중복 표시
              </p>
              <FormController
                form={form}
                name="nickname"
                type="input"
                showLabel
                showDescription
                // 이 필드만 onChange로 검사하기 위해 custom handler 적용
                revalidationHandlers={handleOnChangeMode}
                labelProps={{
                  className: itemStyle.label,
                  children: "닉네임(서버에서 검증)",
                }}
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "닉네임",
                }}
                descriptionProps={{
                  showErrorIcon: false,
                  message: nicknameMsg,
                }}
              />
              <FormController
                form={form}
                name="baekjoonId"
                type="input"
                showLabel
                showDescription
                revalidationHandlers={handleOnChangeMode}
                labelProps={{
                  className: itemStyle.label,
                  children: "백준 아이디(서버에서 검증)",
                }}
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "백준 아이디",
                }}
                descriptionProps={{
                  showErrorIcon: false,
                  message: bjMsg,
                }}
              />
              <FormController
                form={form}
                name="introduction"
                type="input"
                showLabel
                showDescription
                labelProps={{
                  className: itemStyle.label,
                  children: "소개(서버 x)",
                }}
                fieldProps={{
                  className: itemStyle.input,
                  placeholder: "소개",
                }}
              />
            </div>
            <Button type="submit" size="medium">
              회원가입하기
            </Button>
          </div>
        </form>
      </Form>
    );
  },
};

export const Profile: Story = {
  render: () => {
    const postSchema = z.object({
      profileImage: z.string(),

      title: z
        .string()
        .min(6)
        .max(12)
        .regex(/^[a-zA-Z가-하0-9]+$/),
    });

    const form = useForm<z.infer<typeof postSchema>>({
      resolver: zodResolver(postSchema),
      mode: "onTouched",
      defaultValues: {
        title: "",
        profileImage: "",
      },
    });
    const onSubmit = (_values: z.infer<typeof postSchema>) => {
      // console.log({ values });
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "post" })}
        >
          <div className={storyContentStyle.profileContents}>
            <FormController form={form} type="image" name="profileImage" />

            <FormController
              form={form}
              type="input"
              name="title"
              showDescription
              fieldProps={{
                placeholder: "제목",
              }}
            />
          </div>
          <Button type="submit" size="medium">
            등록
          </Button>
        </form>
      </Form>
    );
  },
};

export const DateTypeWithErrorMsg: Story = {
  render: () => {
    const postSchema = z
      .object({
        title: z
          .string()
          .min(6)
          .max(12)
          .regex(/^[a-zA-Z가-하0-9]+$/),

        startDate: z.date(),

        endDate: z.date(),
      })
      .refine((data) => data.endDate >= data.startDate, {
        message: "시작일은 종료일보다 느릴 수 없습니다.",
        path: ["startDate"],
      }); // schema는 파일 분리해서 작성 권장

    const form = useForm<z.infer<typeof postSchema>>({
      resolver: zodResolver(postSchema),
      mode: "onTouched",
      defaultValues: {
        title: "",
        startDate: new Date(),
        endDate: new Date(),
      },
    });

    const onSubmit = (_values: z.infer<typeof postSchema>) => {
      // console.log({ values });
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={storyFormStyle({ type: "post" })}
        >
          <div className={storyContentStyle.loginContents}>
            <FormController
              form={form}
              type="input"
              name="title"
              showDescription
              fieldProps={{
                placeholder: "제목",
              }}
            />
            <fieldset className={fieldsetStyle}>
              <legend className={itemStyle.legend}>풀이 기간</legend>
              <FormController
                form={form}
                type="date"
                name="startDate"
                showLabel
                showDescription
                labelProps={{
                  children: "시작 일자",
                }}
                fieldProps={{
                  ariaDescribedBy: "date-description", // description 공유 (start date)
                }}
                descriptionProps={{
                  style: {
                    position: "absolute",
                    transform: "translate(0, 10px)",
                  },
                  showErrorIcon: false,
                  id: "date-description", // description 공유 (start date)
                }}
              />
              <FormController
                form={form}
                type="date"
                name="endDate"
                showLabel
                labelProps={{
                  children: "종료 일자",
                }}
                fieldProps={{
                  ariaDescribedBy: "date-description", // description 공유 (start date)
                }}
              />
            </fieldset>
          </div>
          <Button type="submit" size="medium">
            등록
          </Button>
        </form>
      </Form>
    );
  },
};
