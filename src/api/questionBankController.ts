// @ts-ignore
/* eslint-disable */
import request from "@/libs/request";

/** addQuestionBank POST /questionBank/add */
export async function addQuestionBankUsingPost(
  body: API.QuestionBankAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/questionBank/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestionBank POST /questionBank/delete */
export async function deleteQuestionBankUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/questionBank/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editQuestionBank POST /questionBank/edit */
export async function editQuestionBankUsingPost(
  body: API.QuestionBankEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/questionBank/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionBankVOById GET /questionBank/get/vo */
export async function getQuestionBankVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionBankVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseQuestionBankVO_>("/questionBank/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionBankByPage POST /questionBank/list/page */
export async function listQuestionBankByPageUsingPost(
  body: API.QuestionBankQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionBank_>("/questionBank/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionBankVOByPage POST /questionBank/list/page/vo */
export async function listQuestionBankVoByPageUsingPost(
  body: API.QuestionBankQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionBankVO_>(
    "/questionBank/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listMyQuestionBankVOByPage POST /questionBank/my/list/page/vo */
export async function listMyQuestionBankVoByPageUsingPost(
  body: API.QuestionBankQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageQuestionBankVO_>(
    "/questionBank/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** updateQuestionBank POST /questionBank/update */
export async function updateQuestionBankUsingPost(
  body: API.QuestionBankUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/questionBank/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
