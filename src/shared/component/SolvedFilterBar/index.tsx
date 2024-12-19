"use client";
import type {
  SolutionLanguage,
  SolutionResultFilter,
} from "@/app/api/solutions/type";
import { IcnReset } from "@/asset/svg";
import Input from "@/common/component/Input";
import SelectBox from "@/common/component/SelectBox";
import { handleA11yClick } from "@/common/util/dom";
import {
  dividerStyle,
  inputStyle,
  resetIconStyle,
  selectboxStyle,
  solvedFilterWrapper,
} from "@/shared/component/SolvedFilterBar/index.css";
import {
  SOLVED_LANGUAGE,
  SOLVED_RESULT,
} from "@/shared/constant/solvedFilterKey";
import type { SolvedFilterType } from "@/shared/type/solvedFilter";
import { useState } from "react";

const SolvedFilterBar = () => {
  const initOption = {
    problemId: 0,
    solvedId: null,
    language: SOLVED_LANGUAGE[0],
    result: SOLVED_RESULT[0],
  };
  const [option, setOption] = useState<SolvedFilterType>(initOption);

  const handleLanguageChange = (newLanguage: string) => {
    setOption((prevOption) => ({
      ...prevOption,
      language: newLanguage as SolutionLanguage,
    }));
  };

  const handleResultChange = (newResult: string) => {
    setOption((prevOption) => ({
      ...prevOption,
      result: newResult as SolutionResultFilter,
    }));
  };

  return (
    <div className={solvedFilterWrapper}>
      <Input className={inputStyle} placeholder="문제 번호" />
      <Input className={inputStyle} placeholder="아이디" />
      <SelectBox
        label="모든 언어"
        options={SOLVED_LANGUAGE}
        value={option.language}
        onChange={handleLanguageChange}
        className={selectboxStyle}
        align="left"
      />
      <SelectBox
        label="모든 결과"
        options={SOLVED_RESULT}
        value={option.result}
        onChange={handleResultChange}
        className={selectboxStyle}
        align="right"
      />
      <div className={dividerStyle} />
      <IcnReset
        role="button"
        className={resetIconStyle}
        width={44}
        height={44}
        aria-label="풀이 리스트 필터링 초기화"
        onClick={() => setOption(initOption)}
        onKeyDown={handleA11yClick(() => setOption(initOption))}
        tabIndex={0}
      />
    </div>
  );
};

export default SolvedFilterBar;
