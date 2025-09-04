"use client";

import { inputStyle, inputWrapper } from "@/app/[user]/components/SearchStudyInput/index.css";
import { IcnSearch } from "@/asset/svg";
import { useRouter } from "next/navigation";
import { type KeyboardEvent, forwardRef } from "react";

const SearchStudyInput = forwardRef<HTMLInputElement>((_, ref) => {
  const router = useRouter();

  const handleSearchStudy = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      //TODO: 검색 api 연결 (검색 페이지로 네비게이트)
      if (!query.trim()) return; // 빈 값 검색 방지

      // '/search' 경로에 '?q=검색어' 파라미터를 붙여서 이동
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <form role="search">
      <label className={inputWrapper}>
        <IcnSearch width={16} height={16} />
        <input
          ref={ref}
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
});

export default SearchStudyInput;
