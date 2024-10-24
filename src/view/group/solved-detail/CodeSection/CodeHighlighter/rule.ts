import type { SolutionLanguage } from "@/api/solution/type";
import Prism from "prismjs";

export const languageMapper: {
  [x in Exclude<SolutionLanguage, "모든 언어" | "Text">]: string;
} = {
  "C++": "cpp",
  "C++17": "cpp",
  "C++17 (clang)": "cpp",
  C99: "c",
  C: "c",
  "C#": "csharp",
  Java: "java",
  "Java 11": "java",
  Python: "python",
  "Python 3": "python",
  PyPy3: "python",
  Ruby: "ruby",
  "Kotlin (JVM)": "kotlin",
  Swift: "swift",
  "node.js": "javascript",
  Go: "go",
  D: "d",
  Rust: "rust",
  "Rust 2018": "rust",
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
