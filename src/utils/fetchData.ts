// src/utils/request.ts
function checkResponse(response: Response) {
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

export default function fetchData(url: string, options?: RequestInit) {
    return fetch(url, options).then(checkResponse);
}