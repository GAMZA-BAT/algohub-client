import {
  Controls,
  Markdown,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from "@storybook/blocks";
import "prismjs/themes/prism-tomorrow.css";
import type { ComponentPropsWithoutRef } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const parseJSDoc = (description: string) => {
  const paramMatches =
    description.match(/@param\s+(?:\{([^}]*)\}\s+)?(\w+)\s+(.+)/g) || [];
  const exampleMatches = description.match(/@example\s+([\s\S]*)/) || [];

  const params = paramMatches.map((param) => {
    // @param 항목에서 type, name, description을 추출하는 정규식
    const [_, type, name, desc] = param.match(
      /@param\s+(?:\{([^}]*)\}\s+)?(\w+)\s+(.+)/,
    )!;
    return { type, name, desc };
  });
  const example = exampleMatches.length > 0 ? exampleMatches[1].trim() : null;

  const mainDescription = description
    .split("@param")[0]
    .split("@example")[0]
    .trim();
  return { mainDescription, params, example };
};

const getDescriptionFromResolvedOf = (resolvedOf: ReturnType<typeof useOf>) => {
  switch (resolvedOf.type) {
    case "story": {
      return resolvedOf.story.parameters.docs?.description?.story || null;
    }
    case "meta": {
      const { parameters, component } = resolvedOf.preparedMeta;
      const metaDescription = parameters.docs?.description?.component;
      if (metaDescription) {
        return metaDescription;
      }
      return (
        parameters.docs?.extractComponentDescription?.(component, {
          component,
          parameters,
        }) || null
      );
    }
    case "component": {
      const {
        component,
        projectAnnotations: { parameters },
      } = resolvedOf;
      return (
        parameters?.docs?.extractComponentDescription?.(component, {
          component,
          parameters,
        }) || null
      );
    }
    default: {
      throw new Error(
        `Unrecognized module type resolved from 'useOf', got: ${String(resolvedOf)}`,
      );
    }
  }
};

const ModifiedDescription = (
  props: ComponentPropsWithoutRef<typeof Markdown>,
) => {
  const { of } = props;

  if ("of" in props && of === undefined) {
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?",
    );
  }
  const resolvedOf = useOf(of || "meta");

  const description = getDescriptionFromResolvedOf(resolvedOf);

  // JSDoc 주석을 파싱하여 필요한 정보 추출
  const { mainDescription, params, example } = parseJSDoc(description || "");

  return (
    <>
      {/* 메인 설명 부분 */}
      <Markdown>{mainDescription}</Markdown>

      {/* @param 부분 */}
      {params.length > 0 && (
        <>
          <h3>@Param</h3>
          <ul>
            {params.map(({ name, type, desc }, index) => (
              <li key={index}>
                <strong>{name}</strong> {type && <em>{type}</em>} : {desc}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* @example 부분 */}
      {example && (
        <>
          <h3>@Example</h3>
          <ReactSyntaxHighlighter
            language="javascript"
            showLineNumbers
            wrapLongLines
            bordered
            copyable
            style={vs2015}
          >
            {example}
          </ReactSyntaxHighlighter>
        </>
      )}
    </>
  );
};

const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <ModifiedDescription />
    <Primary />
    <Controls />
    <Stories />
  </>
);

export default DocsPage;
