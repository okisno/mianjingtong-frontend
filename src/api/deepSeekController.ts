import axios from 'axios';

// 创建一个 Axios 实例，并设置超时时间和 baseURL
const apiClient = axios.create({
    baseURL: 'http://localhost:8101/api', // 确保这个路径与后端API路径一致
    timeout: 30000,  // 设置超时时间为 30 秒
});

export async function tallQuestionUsingPost(
    body: { question: string },
    options?: { [key: string]: any }
) {
    return apiClient.post<string>("chat", body, {
        headers: {
            "Content-Type": "application/json",
        },
        ...(options || {}),
    });
}
