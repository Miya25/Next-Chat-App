import { withIronSession } from "next-iron-session";

export default function withSession(app) {
    return withIronSession(app, {
        password: "dHGDSXmVPnuokaCcQVYIlNXVYxkWIpGLznYCravRtwLgEUEGlO",
        cookieName: "socket-io-chats",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    });
};