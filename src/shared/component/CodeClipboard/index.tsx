import { IcnCopy, IcnCopyCheck } from "@/asset/svg";
import {
  boxStyle,
  codeStyle,
  iconStyle,
  labelStyle,
  wrapperStyle,
} from "@/shared/component/CodeClipboard/index.css";
import { useClipboard } from "@/shared/hook/useClipboard";
import { theme } from "@/styles/themes.css";

interface CodeClipboardProps {
  label?: string;
  code: string;
}

const CodeClipboard = ({ label, code }: CodeClipboardProps) => {
  const { isCopied, copy } = useClipboard();

  return (
    <div className={wrapperStyle}>
      {label && <p className={labelStyle}>{label}</p>}

      <div className={boxStyle}>
        <p className={codeStyle}>{code}</p>
        {isCopied ? (
          <IcnCopyCheck color={theme.color.purple2} className={iconStyle} />
        ) : (
          <IcnCopy onClick={() => copy(code)} className={iconStyle} />
        )}
      </div>
    </div>
  );
};

export default CodeClipboard;
