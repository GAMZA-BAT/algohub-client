/** biome-ignore lint/style/useNodejsImportProtocol: */
import { existsSync, readFileSync } from "fs";
import { capitalize } from "es-toolkit";
/** biome-ignore lint/style/useNodejsImportProtocol: */
import { mkdir, writeFile } from "fs/promises";
import { z } from "zod";
import { path, chalk, globby } from "zx";

export type GenerateEventOption = {
  currentDir: string;
  eventDir: string;
  targetDir: string;
};

export type EventDoc = {
  name: string;
  properties: {
    name: string;
    type: string;
    isNullish: boolean;
  }[];
  description: string;
};

const option: GenerateEventOption = {
  currentDir: process.cwd(),
  eventDir: "src/sdk/event",
  targetDir: "src/sdk/__generated__",
};

const DocSchema = z.array(
  z.object({
    name: z.string(),
    properties: z.array(
      z.object({
        name: z.string(),
        type: z.union([
          z.literal("string"),
          z.literal("number"),
          z.literal("boolean"),
        ]),
        isNullish: z.boolean(),
      }),
    ),
    description: z.string().optional(),
  }),
);

export const generateEvent = async () => {
  const { currentDir, targetDir } = option;

  const eventDir = path.join(currentDir, "src/sdk/event");
  const targetPath = path.join(currentDir, targetDir);
  const eventPath = path.join(eventDir, "**/*.event.mjs");

  const eventFiles = await globby(eventPath);

  for (const eventFile of eventFiles.toSorted()) {
    const name = path.basename(eventFile, ".event.mjs");
    const file = path.resolve(eventFile);
    const content = readFileSync(file, "utf-8");
    const exportMatch = content.match(
      /export\s+const\s+(\w+)\s*=\s*(\[[\s\S]*?\]);/,
    );

    if (!exportMatch?.[2]) return;

    const eventData = new Function(`return ${exportMatch[2]}`)();

    const result = DocSchema.safeParse(eventData);
    if (!result.success) {
      console.error(`${name} is not a valid event doc`);
    }

    if (!existsSync(targetPath)) {
      await mkdir(targetPath, { recursive: true });
    }

    await writeFile(
      path.join(targetPath, `${name}.gen.ts`),
      makeDocs(name, eventData),
      "utf-8",
    );
  }
  /** biome-ignore lint/suspicious/noConsoleLog: logging result of generateEvent */
  console.log(chalk.blue("이벤트 생성을 완료하였어요."));
};

export const makeDocs = (name: string, docs: EventDoc[]) => {
  const result = [];
  result.push("/** biome-ignore: */");
  result.push(`export type ${capitalize(name)}Event = `);

  const makeEventRegex = () => {
    return `export const ${capitalize(name)}EventRegex = /^(${docs.map((doc) => `${doc.name}`).join("|")})$/m`;
  };

  const typo = docs
    .map(
      (doc) => `{
        ${doc.description ? `/** ${doc.description} */` : ""}
        name: "${doc.name}",
        params: {
        ${doc.properties
          .map((p) => {
            return `${p.name}${p.isNullish ? `?: ${p.type} | null` : `: ${p.type}`}`;
          })
          .join("\n")}
        }
    }`,
    )
    .join(" | ");

  result.push(typo);
  result.push(makeEventRegex());

  return result.join("\n");
};
