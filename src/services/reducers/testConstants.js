// constants.js

export const user = { name: 'John Conor', email: 'john@example.com' };

export const authConst = {
    successPayload: { user: user, accessToken: 'token', refreshToken: 'refreshToken', success: true },
    errorSignIn: 'Invalid credentials',
    errorSignOut: 'Failed to sign out',
    errorSignUp: 'Failed to sign up',
    errorForgotPassword: 'Failed to reset password'
};

export const userConst = {
    errorGet: 'Failed to get user data',
    updatedUserData: { name: 'John Conor', email: 'john.conor@example.com' },
    errorUpdate: 'Failed to update user data'
};

export const tokenConst = {
    data: { accessToken: 'newAccessToken', refreshToken: 'newRefreshToken', success: true },
    error: 'Failed to refresh token'
};

export const ingredientConst = {
    tomato: { id: 'ingredient1', type: 'main', name: 'Tomato', price: 0.5 },
    ketchup: { id: 'ingredient2', type: 'sauce', name: 'Ketchup', price: 0.2 },
    bun1: { id: 'bun1', type: 'bun', name: 'Bun', price: 2.99 },
    bun2: { id: 'bun2', type: 'bun', name: 'Seasame Bun', price: 1.99 },
    error: 'Failed to load ingredients'
};

export const orderConst = {
    data: { id: 'order1', totalPrice: 10.99, items: ['burger', 'drink'] },
    error: 'Failed to load order details'
};

export const orderNotificationConst = {
    data: { name: 'John Conor', order: { number: 123 } },
    error: 'Failed to load order notification'
};

export const wsConst = {
    payloadMessage: {
        success: true,
        orders: [
            {
                _id: "661c1c4a97ede0001d065a46",
                ingredients: [
                    "643d69a5c3f7b9001cfa093e",
                    "643d69a5c3f7b9001cfa0940",
                    "643d69a5c3f7b9001cfa093d",
                    "643d69a5c3f7b9001cfa093d"
                ],
                status: "done",
                name: "Флюоресцентный люминесцентный метеоритный бургер",
                createdAt: "2024-04-14T18:11:22.550Z",
                updatedAt: "2024-04-14T18:11:24.190Z",
                number: "38113"
            },
            {
                _id: "661c1c1c97ede0001d065a45",
                ingredients: [
                    "643d69a5c3f7b9001cfa093c",
                    "643d69a5c3f7b9001cfa0941",
                    "643d69a5c3f7b9001cfa093c"
                ],
                status: "done",
                name: "Краторный био-марсианский бургер",
                createdAt: "2024-04-14T18:10:36.458Z",
                updatedAt: "2024-04-14T18:10:38.112Z",
                number: "38112"
            }
        ],
        total: 2,
        totalToday: 123
    },
    error: new Event('WebSocket connection error')
};
