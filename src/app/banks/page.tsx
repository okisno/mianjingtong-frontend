import Title from "antd/es/typography/Title";
import { listQuestionBankVoByPageUsingPost } from "@/api/questionBankController";
import QuestionBankList from "@/components/QuestionBankList";
import "./index.css";

export const dynamic = 'force-dynamic';

/**
 * 题库列表页面
 * @constructor
 */
export default async function BanksPage() {
    let questionBankList = [];
    // 题库数量不多，直接全量获取
    const pageSize = 200;

    try {
        const questionBankRes = await listQuestionBankVoByPageUsingPost({
            pageSize,
            sortField: "createTime",
            sortOrder: "descend",
        });
        questionBankList = questionBankRes.data.records ?? [];
    } catch (e) {
        console.error("获取题库列表失败，" + e.message);
    }

    return (
        <div id="banksPage" className="max-width-content">
            <Title level={3}>题库大全</Title>
            <QuestionBankList questionBankList={questionBankList} />
        </div>
    );
}
