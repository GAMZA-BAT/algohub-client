import { IcnCheckSmall, IcnError } from "@/asset/svg";
import { textStyle, toastStyle } from "@/common/component/Toast/index.css";
import { useTimeout } from "@/common/hook/useTimeout";
import { toastAtom } from "@/shared/store/toast";
import type { Timeout } from "@/shared/type";
import { useSetAtom } from "jotai";
import { type PropsWithChildren, useRef, useState } from "react";

type ToastProps = PropsWithChildren<{
  variant?: "error" | "success" | "default";
  duration?: number;
}>;

const Toast = ({
  variant = "default",
  duration = 1000,
  children,
}: ToastProps) => {
  /** atom이 바로 null로 바뀌면서 생기는 렌더링 이슈를 제어할 ref */
  const renderRef = useRef<Timeout>();

  const setAtom = useSetAtom(toastAtom);

  useTimeout(() => {
    setAnimation("hide");

    /** hide 상태로 돌입하고 바로 업데이트하지 않고 600 대기 */
    renderRef.current = setTimeout(() => {
      setAtom({ toast: null });
    }, 600);

    return () => clearTimeout(renderRef.current);
  }, duration);

  const [animation, setAnimation] = useState<"show" | "hide">("show");

  return (
    <div className={toastStyle({ animation })}>
      {Icon[variant]}
      <span className={textStyle}>{children}</span>
    </div>
  );
};

export default Toast;

const Icon = {
  error: <IcnError width={24} height={24} />,
  success: <IcnCheckSmall width={24} height={24} />,
  default: null,
} as const;
