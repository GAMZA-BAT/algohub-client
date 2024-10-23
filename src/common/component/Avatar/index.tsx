// TODO: 현재 임시 defaultImg임 (확정 아직 X)
import defaultImg from "@/asset/img/gray_small_icon.png";
import { avatarStyle, wrapperStyle } from "@/common/component/Avatar/index.css";
import clsx from "clsx";
import Image, { type ImageProps } from "next/image";

interface AvatarProps extends Omit<ImageProps, "src"> {
  size?: "mini" | "small" | "medium" | "large";
  hasShadow?: boolean;
  src?: string;
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
        {...imageProps}
        src={src || defaultImg}
        width="100"
        height="100"
        role="button"
        className={clsx(avatarStyle({ size, hasShadow }), className)}
      />
      {children}
    </div>
  );
};

export default Avatar;
