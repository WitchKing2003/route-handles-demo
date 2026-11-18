export const dynamic = "force-static";

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Electronics" },
  ];

  return Response.json(categories);
}
