"use client";

import {
  inputStyle,
  inputWrapper,
} from "@/app/[user]/components/SearchStudyInput/index.css";
import { IcnSearch } from "@/asset/svg";
import { type KeyboardEvent, useRef } from "react";

const SearchStudyInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchStudy = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      //TODO: 검색 api 연결 (검색 페이지로 네비게이트)
    }
  };

  return (
    <form role="search">
      <label className={inputWrapper}>
        <IcnSearch width={16} height={16} />
        <input
          ref={inputRef}
          type="search"
          name="study"
          placeholder="스터디, 키워드로 검색하기"
          onKeyDown={handleSearchStudy}
          className={inputStyle}
          aria-label="스터디 검색"
        />
      </label>
    </form>
  );
};

export default SearchStudyInput;
