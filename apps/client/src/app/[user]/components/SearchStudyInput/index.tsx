"use client";

import {
  inputStyle,
  inputWrapper,
} from "@/app/[user]/components/SearchStudyInput/index.css";
import { IcnSearch } from "@/asset/svg";
import { debounce } from "@/common/util/debounce";
import { useParams, useRouter } from "next/navigation";
import type { FormEvent } from "react";

const SearchStudyInput = () => {
  const params = useParams();

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchInput = formData.get("study");
    const encodedValue = encodeURIComponent(searchInput as string);

    if (encodedValue) {
      router.replace(`/${params.user}?search=${encodedValue}`);
    } else {
      router.replace(`/${params.user}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const encodedValue = encodeURIComponent(e.target.value);

    if (encodedValue) {
      router.replace(`/${params.user}?search=${encodedValue}`);
    } else {
      router.replace(`/${params.user}`);
    }
  };

  const debouncedChange = debounce(handleChange, 500);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <label className={inputWrapper}>
        <IcnSearch width={16} height={16} />
        <input
          onChange={debouncedChange}
          type="search"
          name="study"
          placeholder="스터디, 키워드로 검색하기"
          className={inputStyle}
          aria-label="스터디 검색"
        />
      </label>
    </form>
  );
};

export default SearchStudyInput;
