"use client";
import grayDefaultImg from "@/asset/img/gray_small_icon.png";
import defaultImg from "@/asset/img/img_card_profile.png";
import { IcnEditProfile } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { iconStyle, inputStyle } from "@/shared/component/EditAvatar/index.css";
import type { ImageProps } from "next/image";
import { type ChangeEvent, useState } from "react";

interface EditAvatarProps extends Omit<ImageProps, "src" | "alt" | "onChange"> {
  src?: string;
  alt?: string;
  onChange?: (img: string | ArrayBuffer | null) => void;
  variant?: "default" | "secondary";
}

const EditAvatar = ({
  src = "",
  alt = "프로필 사진 수정",
  onChange,
  variant = "default",
  ...props
}: EditAvatarProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>(src || null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (pickedImage && !file.type.includes("image")) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
      onChange?.(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const handleKeyDown = (e: React.KeyboardEvent<SVGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      document.getElementById("edit-avatar-label")?.click();
    }
  };

  return (
    <Avatar
      src={pickedImage || (variant === "default" ? defaultImg : grayDefaultImg)}
      alt={alt}
      size="large"
      {...props}
    >
      <label id="edit-avatar-label" htmlFor="edit-avatar">
        <IcnEditProfile
          className={iconStyle}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        />
      </label>
      <input
        className={inputStyle}
        type="file"
        id="edit-avatar"
        accept="image/*"
        onChange={handleImageChange}
      />
    </Avatar>
  );
};

export default EditAvatar;
