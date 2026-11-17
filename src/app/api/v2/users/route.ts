import { redirect } from "next/navigation";

type UserV2 = {
  id: string;
  email: string;
  fullName: string;
  createAt: string;

  name: {
    first: string;
    last: string;
    middle: string;
  };
  status: "active" | "inactive" | "suspended";
  lastLoginAt: string | null;
  profile: {
    avater: string | null;
    title: string | null;
    deparment: string | null;
  };
};
