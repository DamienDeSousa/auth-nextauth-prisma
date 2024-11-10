import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "John Doe" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        // add own logic
        return {
          id: "1",
          name: "John",
          email: "johndoe@gmail.com",
        } as User;
      },
    }),
  ],

  // session configuration
  session: {
    strategy: "jwt", // this is the default config
  },
};
