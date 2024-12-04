import { Card, Cards } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col text-center max-w-xl mx-auto">
      <h1 className="mb-4 text-2xl font-bold pt-8">Select your Session</h1>
      <Cards>
        <Card title="OpenAI" href="/docs/openai/" />
        <Card title="AWS" href="/docs/aws/"></Card>
      </Cards>
    </main>
  );
}
