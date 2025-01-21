// @ts-ignore
/* eslint-disable */
import request from "@/libs/request";

/** check GET / */
export async function checkUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<string>("/", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** receiveMessage POST / */
export async function receiveMessageUsingPost(options?: {
  [key: string]: any;
}) {
  return request<any>("/", {
    method: "POST",
    ...(options || {}),
  });
}

/** setMenu GET /setMenu */
export async function setMenuUsingGet(options?: { [key: string]: any }) {
  return request<string>("/setMenu", {
    method: "GET",
    ...(options || {}),
  });
}
