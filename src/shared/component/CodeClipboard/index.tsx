import { IcnCopy, IcnCopyCheck } from "@/asset/svg";
import {
  boxStyle,
  codeStyle,
  iconStyle,
  labelStyle,
  wrapperStyle,
} from "@/shared/component/CodeClipboard/index.css";
import { theme } from "@/styles/themes.css";

interface CodeClipboardProps {
  onTrigger?: () => void;
  isSuccess?: boolean;
  label?: string;
  code: string;
}

const CodeClipboard = ({
  onTrigger,
  isSuccess,
  label,
  code,
}: CodeClipboardProps) => {
  return (
    <div className={wrapperStyle}>
      {label && <p className={labelStyle}>{label}</p>}

      <div className={boxStyle}>
        <p className={codeStyle}>{code}</p>
        {isSuccess ? (
          <IcnCopyCheck color={theme.color.purple2} className={iconStyle} />
        ) : (
          <IcnCopy onClick={onTrigger} className={iconStyle} />
        )}
      </div>
    </div>
  );
};

export default CodeClipboard;
