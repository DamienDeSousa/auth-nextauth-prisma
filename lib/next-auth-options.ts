import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "John Doe" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("authorize");

        return {
          id: "1",
          name: "John",
          email: credentials?.username,
          age: 21,
        } as User;
      },
    }),
  ],

  // session configuration
  session: {
    strategy: "jwt", // this is the default config
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.age = user.age;
      }

      if (trigger === "update") {
        token.age = session.age;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.age = token.age;

      return session;
    },
  },

  events: {
    async signIn({ user }) {
      console.log(`User ${user.email} logged in`);
    },
  },
};
