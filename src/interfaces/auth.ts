// src/interfaces/auth.ts

interface Auth {
    user?: {
        name: string
        email: string
    };
    accessToken?: string;
    refreshToken?: string;
    success: boolean;
    message?: string;
}

export default Auth