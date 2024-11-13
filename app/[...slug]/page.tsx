import NodeDisplay from "@/components/NodeDisplay";

export default async function App({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const nodeURL = (await params).slug.join("/");

  return <NodeDisplay nodePath={nodeURL} />;
}
