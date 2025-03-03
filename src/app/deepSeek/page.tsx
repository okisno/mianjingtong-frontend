"use client";

import React, { useState, useEffect } from "react";
import { Input, Button, List, Typography, message, Avatar } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";
import { tallQuestionUsingPost } from "@/api/deepSeekController";
import "./index.css";

const { Title } = Typography;
const { TextArea } = Input;

export default function AIChatPage() {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentMessage, setCurrentMessage] = useState<{ role: string; content: string } | null>(null);
    const [currentContent, setCurrentContent] = useState("");

    useEffect(() => {
        if (currentMessage) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < currentMessage.content.length) {
                    setCurrentContent(prevContent => prevContent + currentMessage.content[index]);
                    index++;
                } else {
                    clearInterval(interval);
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { role: currentMessage.role, content: currentMessage.content }
                    ]);
                    setCurrentMessage(null);
                    setCurrentContent("");
                }
            }, 50); // 调整间隔时间以控制显示速度

            return () => clearInterval(interval);
        }
    }, [currentMessage]);

    const handleSend = async () => {
        if (!inputText.trim()) {
            message.warning("请输入有效内容");
            return;
        }

        try {
            setLoading(true);

            // 添加用户消息
            const newMessages = [
                ...messages,
                { role: "user", content: inputText }
            ];
            setMessages(newMessages);

            // 调用API
            const response = await tallQuestionUsingPost({
                question: inputText
            });

            console.log("API Response:", response.data);

            // 处理响应
            const responseData = response.data;
            if (responseData?.choices?.[0]?.message?.content) {
                const aiResponse = responseData.choices[0].message.content;
                console.log("AI回复:", aiResponse);
                setCurrentMessage({ role: "assistant", content: aiResponse });
                setCurrentContent("");
            } else {
                console.error("AI回复内容为空或格式不正确");
                message.error("AI回复内容为空或格式不正确");
            }
        } catch (error) {
            console.error("请求失败:", error);
            message.error("请求失败，请检查网络连接");
        } finally {
            setLoading(false);
            setInputText("");
        }
    };

    return (
        <div className="ai-chat-container">
            <Title level={3} className="chat-title">AI问答助手</Title>

            <List
                className="chat-list"
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar
                                icon={item.role === "user" ? <UserOutlined /> : <RobotOutlined />}
                                style={{ backgroundColor: item.role === "user" ? '#1890ff' : '#52c41a' }}
                            />}
                            title={item.role === "user" ? "你的提问" : "AI回复"}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />

            {currentMessage && (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar
                            icon={<RobotOutlined />}
                            style={{ backgroundColor: '#52c41a' }}
                        />}
                        title="AI回复"
                        description={currentContent}
                    />
                </List.Item>
            )}

            <div className="input-area">
                <TextArea
                    rows={4}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="输入你的问题..."
                    disabled={loading}
                />
                <Button
                    type="primary"
                    loading={loading}
                    onClick={handleSend}
                >
                    发送问题
                </Button>
            </div>
        </div>
    );
}
