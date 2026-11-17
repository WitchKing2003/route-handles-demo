import { redirect } from "next/navigation";

type UserV1 = {
  id: string;
  email: string;
  fullName: string;
  createAt: string;
};

export async function GET() {
    redirect("api/v2/users")
  const users: UserV1[] = [
    {
      id: "1",
      email: "nguyenvana@gmail.com",
      fullName: "Nguyen Van A",
      createAt: "2026-11-01T08:30:00.000Z",
    },
    {
      id: "2",
      email: "tranvanb@gmail.com",
      fullName: "Tran Van B",
      createAt: "2026-11-02T09:15:00.000Z",
    },
    {
      id: "3",
      email: "lethic@gmail.com",
      fullName: "Le Thi C",
      createAt: "2026-11-03T10:20:00.000Z",
    },
    {
      id: "4",
      email: "phamvand@gmail.com",
      fullName: "Pham Van D",
      createAt: "2026-11-04T11:45:00.000Z",
    },
    {
      id: "5",
      email: "hoangthie@gmail.com",
      fullName: "Hoang Thi E",
      createAt: "2026-11-05T14:00:00.000Z",
    },
  ];

  return Response.json(users);
}
