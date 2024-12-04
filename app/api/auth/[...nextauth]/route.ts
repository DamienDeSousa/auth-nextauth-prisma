import { authOptions } from "@/lib/next-auth-options";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions } from "next-auth";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const someCookie = req.cookies["some-custom-cookie"];

  const updatedAuthOptions: AuthOptions = {
    ...authOptions,
    events: {
      async signIn({ user }) {
        console.log(`User ${user.email} logged in with ${someCookie}`);
      },
    },
  };

  return await NextAuth(req, res, updatedAuthOptions);
}
