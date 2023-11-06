import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const options = {
  // signin folder
  pages: {
    signIn: "/signin",
  },

  providers: [
    // This Part Is For Login With Facebook Account
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    // This Part Is For Login With Google Account
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // This Part Is For Login With Github Account
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // This Part Is For Login With Username And Password
    CredentialsProvider({
      name: "Credentials", // signin btn => signin with Credentials
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your Awsome Username...",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your Awsome Password...",
        },
      },

      async authorize(credentials) {
        // retrieve user data
        const user = { id: 42, username: "ziad", password: "asd123" };
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

// async authorize(credentials) {
//   // retrieve user data
//   const users = [
//     { id: 42, username: "Ziad", password: "asd123" },
//     { id: 42, username: "Ziad", password: "asd123" }
//   ];

//   if(!credentials || !credentials.username || !credentials.password) {
//     return null
//   }

//   const user = users.find(user => user.username === credentials.username)

//   if (user?.password === credentials.password) {
//     return user;
//   } else {
//     return null;
//   }
// },
