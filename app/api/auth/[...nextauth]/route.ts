import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Email" },
        password: { label: "password", type: "password", placeholder: "Password" }
      },
        async authorize(credentials) {
          
            const username = credentials?.username;
            const password = credentials?.password;
            console.log(username, password);
            
        return {
            id: "user1",
            name: "abhilash",
            email: "abhilash@gmail.com"
        };
      }
    })
    ],
    
    secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
