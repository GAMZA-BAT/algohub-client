import SupportingText, {
  type SupportingTextProps,
} from "@/common/component/SupportingText";

type FormDescriptionProps = {
  showError?: boolean;
  showErrorIcon?: boolean;
} & SupportingTextProps;

const FormDescription = ({
  message,
  isError,
  showError = true,
  showErrorIcon = true,
  ...props
}: FormDescriptionProps) => {
  if (!message) return null;

  return (
    <SupportingText
      isError={showError && isError}
      hasErrorIcon={showErrorIcon && isError}
      message={message}
      {...props}
    />
  );
};

export default FormDescription;
