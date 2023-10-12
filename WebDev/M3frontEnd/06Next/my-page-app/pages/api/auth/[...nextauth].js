import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : '5de7a10f9e4a1b51bf30',
            clientSecret: '766361b2420bc8bd97d0073a2278c9dd25050175',
        })
    ]
}


export default NextAuth(authOptions);