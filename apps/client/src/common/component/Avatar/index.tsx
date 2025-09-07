import defaultImg from "@/asset/img/small_logo.png";
import { avatarStyle, wrapperStyle } from "@/common/component/Avatar/index.css";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";

interface AvatarProps extends Omit<ImageProps, "src"> {
  size?: "xMini" | "mini" | "xSmall" | "small" | "medium" | "large";
  hasShadow?: boolean;
  src?: string | null;
}

const Avatar = ({
  size = "medium",
  hasShadow = false,
  children,
  src,
  className,
  ...imageProps
}: AvatarProps) => {
  return (
    <div className={clsx(wrapperStyle, className)}>
      <Image
        role="button"
        {...imageProps}
        src={src || defaultImg}
        width="100"
        height="100"
        className={clsx(avatarStyle({ size, hasShadow }), className)}
        priority
      />
      {children}
    </div>
  );
};

export default Avatar;
