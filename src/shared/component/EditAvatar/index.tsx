"use client";
import grayDefaultImg from "@/asset/img/img_card_profile.png";
import defaultImg from "@/asset/img/small_logo.png";
import Avatar from "@/common/component/Avatar";
import {
  actionButton,
  buttonWrapper,
  inputStyle,
} from "@/shared/component/EditAvatar/index.css";
import type { ImageProps } from "next/image";
import { type ChangeEvent, useRef, useState } from "react";

interface EditAvatarProps extends Omit<ImageProps, "src" | "alt" | "onChange"> {
  src?: string;
  alt?: string;
  name?: string;
  onChange?: (img: Blob | null) => void;
  variant?: "default" | "secondary";
}

const EditAvatar = ({
  src = "",
  alt = "프로필 사진 수정",
  name,
  onChange,
  variant = "default",
  ...props
}: EditAvatarProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>(src || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (pickedImage && !file.type.includes("image")) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
      onChange?.(file);
    };

    fileReader.readAsDataURL(file);
  };

  const handleEdit = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setPickedImage(null);
    onChange?.(null);
  };

  return (
    <Avatar
      src={pickedImage ?? (variant === "default" ? defaultImg : grayDefaultImg)}
      alt={alt}
      size="large"
      {...props}
    >
      <div className={buttonWrapper}>
        <button
          type="button"
          className={actionButton}
          onClick={handleEdit}
          aria-label="프로필 사진 수정"
        >
          수정
        </button>
        <button
          type="button"
          className={actionButton}
          onClick={handleDelete}
          aria-label="프로필 사진 삭제"
        >
          삭제
        </button>
      </div>
      <input
        ref={fileInputRef}
        className={inputStyle}
        type="file"
        name={name}
        accept="image/*"
        onChange={handleImageChange}
      />
    </Avatar>
  );
};

export default EditAvatar;
