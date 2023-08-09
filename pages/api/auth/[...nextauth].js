import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify email" } },
    }),
    // ...add more providers here
  ],
  session: {
    // Set the expiration time for the session token (1 day in seconds)
    expires: 24 * 60 * 60,
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
