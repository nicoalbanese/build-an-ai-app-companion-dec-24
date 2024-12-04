import { get } from "@vercel/edge-config";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export const dynamic = "force-dynamic";

export async function Keys({ session }: { session: "aws" | "openai" }) {
  if (session === "openai") {
    // const showKey = await get<boolean>("show_openai_key");
    // const openaiKey = await get<string>("openai_api_key");
    return (
      <CodeBlock>
        <Pre className="px-4 text-[13px] text-left">
          OPENAI_API_KEY="{"sk-*****-*************"}"
        </Pre>
      </CodeBlock>
    );
  }
}
