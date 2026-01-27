import type { PaginationResponse } from "@/app/api/type";

export type SolutionRequest = {
  problemId: number;
  language?: SolutionLanguage;
  result?: SolutionResult;
  nickname?: string;
  page?: number;
  size?: number;
};

export type SolutionContent = {
  solutionId: number;
  problemId: number;
  problemTitle: string;
  problemLevel: number;
  accuracy: number;
  submitMemberCount: number;
  totalMemberCount: number;
  nickname: string;
  profileImage: string;
  solvedDateTime: string;
  content: string;
  result: string;
  memoryUsage: number;
  executionTime: number;
  language: SolutionLanguage;
  codeLength: number;
  commentCount: number;
  groupId?: number;
};

export type SolutionResponse = PaginationResponse & {
  content: SolutionContent[];
};

export type SolutionLanguageFilter =
  | "C"
  | "C++"
  | "Python"
  | "Java"
  | "Rust"
  | "Script Language"
  | "System Language"
  | "Web/App Language"
  | "Functional Language"
  | "Low-Level Language"
  | "Others"
  | "모든 언어";

export type SolutionLanguage =
  | "C++"
  | "C++17"
  | "C++98"
  | "C++11"
  | "C++14"
  | "C++20"
  | "C++23"
  | "C++26"
  | "C++17 (clang)"
  | "C++98 (Clang)"
  | "C++11 (Clang)"
  | "C++14 (Clang)"
  | "C++20 (Clang)"
  | "C"
  | "C99"
  | "C99 (Clang)"
  | "C11"
  | "C11 (Clang)"
  | "C90"
  | "C90 (Clang)"
  | "C2x"
  | "C2x (Clang)"
  | "Rust"
  | "Rust 2018"
  | "Rust 2015"
  | "Rust 2021"
  | "Java"
  | "Java 8"
  | "Java 8 (OpenJDK)"
  | "Java 11"
  | "Java 15"
  | "Python"
  | "Python 3"
  | "PyPy3"
  | "Ruby"
  | "Kotlin (JVM)"
  | "Swift"
  | "Text"
  | "C#"
  | "node.js"
  | "Go"
  | "Go(gccgo)"
  | "D"
  | "D(LDC)"
  | "Pascal"
  | "TypeScript"
  | "Scheme"
  | "OCaml"
  | "F#"
  | "Haxe"
  | "Ada"
  | "Assembly (32bit)"
  | "Assembly (64bit)"
  | "Fortran"
  | "FreeBASIC"
  | "Visual Basic"
  | "Bash"
  | "Lua"
  | "Perl"
  | "sed"
  | "awk"
  | "Tcl"
  | "Rhino"
  | "Pike"
  | "PHP"
  | "Objective-C"
  | "Objective-C++"
  | "Brainf**k"
  | "Whitespace"
  | "Golfscript"
  | "INTERCAL"
  | "Algol 68"
  | "Befunge"
  | "LOLCODE"
  | "아희"
  | "SystemVerilog"
  | "bc";

export type SolutionResultFilter = SolutionResult | "모든 결과";
export type SolutionResult =
  | "맞았습니다!!"
  | "틀렸습니다"
  | "시간 초과"
  | "메모리 초과"
  | "출력 초과"
  | "런타임 에러"
  | "컴파일 에러"
  | "출력 에러";
