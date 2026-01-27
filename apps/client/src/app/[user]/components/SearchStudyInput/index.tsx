"use client";

import {
  inputStyle,
  inputWrapper,
} from "@/app/[user]/components/SearchStudyInput/index.css";
import { IcnSearch } from "@/asset/svg";
import { debounce } from "@/common/util/debounce";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";

const SearchStudyInput = () => {
  const params = useParams();
  const searchParam = useSearchParams();
  const router = useRouter();

  const performSearch = (searchText: string) => {
    const encodedValue = encodeURIComponent(searchText);

    if (encodedValue) {
      router.replace(`/${params.user}?search=${encodedValue}`);
    } else {
      router.replace(`/${params.user}`);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchInput = formData.get("study");

    performSearch(searchInput as string);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    performSearch(e.target.value);
  };

  const debouncedChange = debounce(handleChange, 500);

  return (
    <form role="search" onSubmit={handleSubmit}>
      <label className={inputWrapper}>
        <IcnSearch width={16} height={16} />
        <input
          defaultValue={searchParam.get("search") || ""}
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
