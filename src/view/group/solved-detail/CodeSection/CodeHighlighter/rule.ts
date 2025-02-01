import type { SolutionLanguage } from "@/app/api/solutions/type";
import Prism from "prismjs";

export const languageMapper: {
  [x in SolutionLanguage]: string;
} = {
  "C++": "cpp",
  "C++17": "cpp",
  "C++98": "cpp",
  "C++11": "cpp",
  "C++14": "cpp",
  "C++20": "cpp",
  "C++23": "cpp",
  "C++26": "cpp",
  "C++17 (clang)": "cpp",
  "C++98 (Clang)": "cpp",
  "C++11 (Clang)": "cpp",
  "C++14 (Clang)": "cpp",
  "C++20 (Clang)": "cpp",
  C: "c",
  C99: "c",
  "C99 (Clang)": "c",
  C11: "c",
  "C11 (Clang)": "c",
  C90: "c",
  "C90 (Clang)": "c",
  C2x: "c",
  "C2x (Clang)": "c",
  Rust: "rust",
  "Rust 2018": "rust",
  "Rust 2015": "rust",
  "Rust 2021": "rust",
  Java: "java",
  "Java 8": "java",
  "Java 8 (OpenJDK)": "java",
  "Java 11": "java",
  "Java 15": "java",
  Python: "python",
  "Python 3": "python",
  PyPy3: "python",
  Ruby: "ruby",
  "Kotlin (JVM)": "kotlin",
  Swift: "swift",
  Text: "textile",
  "C#": "csharp",
  "node.js": "javascript",
  Go: "go",
  "Go(gccgo)": "go",
  D: "d",
  "D(LDC)": "d",
  Pascal: "pascal",
  TypeScript: "typescript",
  Scheme: "scheme",
  OCaml: "ocaml",
  "F#": "fsharp",
  Haxe: "haxe",
  Ada: "ada",
  "Assembly (32bit)": "asm",
  "Assembly (64bit)": "asm",
  Fortran: "fortran",
  FreeBASIC: "freebasic",
  "Visual Basic": "vbnet",
  Bash: "bash",
  Lua: "lua",
  Perl: "perl",
  sed: "bash",
  awk: "awk",
  Tcl: "tcl",
  Rhino: "javascript",
  Pike: "none",
  PHP: "php",
  "Objective-C": "objectivec",
  "Objective-C++": "objectivec",
  "Brainf**k": "brainfuck",
  Whitespace: "none",
  Golfscript: "none",
  INTERCAL: "none",
  "Algol 68": "none",
  Befunge: "none",
  LOLCODE: "none",
  아희: "none",
  SystemVerilog: "systemverilog",
  bc: "none",
} as const;

type LanguageMapperValues =
  (typeof languageMapper)[keyof typeof languageMapper];

export const controlFlowPatternMapper: {
  [key in LanguageMapperValues]: RegExp;
} = {
  c: /\b(?:if|else|for|while|return|switch|case|break|continue|goto)\b/,
  cpp: /\b(?:if|else|for|while|return|switch|case|break|continue|goto|throw|try|catch)\b/,
  csharp:
    /\b(?:if|else|for|while|return|switch|case|break|continue|throw|try|catch|finally|async|await|yield)\b/,
  d: /\b(?:if|else|for|while|switch|case|break|continue|try|catch|throw|finally)\b/,
  go: /\b(?:if|else|for|switch|case|break|continue|goto|defer|fallthrough)\b/,
  java: /\b(?:if|else|for|while|return|switch|case|break|continue|try|catch|finally|throw)\b/,
  javascript:
    /\b(?:if|else|for|while|return|switch|case|break|continue|throw|try|catch|finally|async|await)\b/,
  kotlin:
    /\b(?:if|else|for|while|return|break|continue|try|catch|finally|throw|when)\b/,
  python:
    /\b(?:if|else|elif|for|while|return|break|continue|try|except|finally|raise|with|yield|async|await)\b/,
  ruby: /\b(?:if|else|elsif|for|while|return|break|next|redo|retry|catch|throw|yield|rescue|ensure)\b/,
  rust: /\b(?:if|else|for|while|loop|return|break|continue|match)\b/,
  swift:
    /\b(?:if|else|for|while|return|switch|case|break|continue|try|catch|throw|defer|guard|repeat)\b/,
};

export function addCustomPatternsToAllLanguages() {
  for (const key of Object.keys(Prism.languages)) {
    const keyword = Prism.languages[key].keyword;
    const pattern = controlFlowPatternMapper[key as SolutionLanguage];

    if (!(keyword && pattern)) continue;

    if (keyword instanceof RegExp) {
      Prism.languages[key].keyword = [
        {
          pattern,
          alias: "control-flow",
          lookbehind: true,
          greedy: true,
        },
        keyword,
      ];
    } else if (Array.isArray(keyword)) {
      keyword.unshift({
        pattern,
        alias: "control-flow",
        lookbehind: true,
        greedy: true,
      });
    }
  }
}
