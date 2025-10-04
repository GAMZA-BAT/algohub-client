"use client";

import {
  inputStyle,
  inputWrapper,
} from "@/app/[user]/components/SearchStudyInput/index.css";
import { IcnSearch } from "@/asset/svg";
import { useParams, useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const SearchStudyInput = () => {
  const params = useParams();

  const [searchKeyword, setSearchKeyword] = useState("");

  const router = useRouter();

  const handleSearchStudy = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchKeyword) {
      router.replace(`/${params.user}?search=${searchKeyword}`);
    } else {
      router.replace(`/${params.user}`);
    }
  };

  return (
    <form role="search" onSubmit={handleSearchStudy}>
      <label className={inputWrapper}>
        <IcnSearch width={16} height={16} />
        <input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
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
