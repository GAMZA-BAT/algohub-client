const fs = require("fs");
const path = require("path");

// 파스칼 케이스 변환 함수
function toPascalCase(fileName) {
  return fileName.replace(/(^\w|_\w)/g, (match) =>
    match.replace("_", "").toUpperCase()
  );
}

// index.ts 파일 생성 함수
function generateIndex() {
  const svgDir = path.join(__dirname, "src", "asset", "svg"); // SVG 파일들이 있는 디렉토리 경로
  const outputFile = path.join(svgDir, "index.ts"); // 생성할 index.ts 경로

  // SVG 디렉토리에서 파일 목록 가져오기
  const files = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith(".svg")) // .svg 파일만 필터링
    .map((file) => ({
      fileName: file,
      pascalName: toPascalCase(path.basename(file, ".svg")), // 확장자 제거 후 파스칼 케이스로 변환
    }));

  // index.ts 파일 내용 작성
  const exportStatements = files
    .map(({ fileName, pascalName }) => {
      return `export { default as ${pascalName} } from "./${fileName}";`;
    })
    .join("\n");

  // index.ts 파일 덮어쓰기
  fs.writeFileSync(outputFile, exportStatements);

  // console.log(`index.ts generated with ${files.length} exports.`);
}

generateIndex();
