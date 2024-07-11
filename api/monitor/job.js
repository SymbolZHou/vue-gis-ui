import {request} from "@/utils/request"

// 查询定时任务调度列表
export function getList(data) {
  return request({
    url: "/monitor/job/list",
    method: "get",
    params: data
  })
}

// 查询定时任务调度详细
export function getJob(jobId) {
  return request({
    url: "/monitor/job/" + jobId,
    method: "get"
  })
}

// 新增定时任务调度
export function add(data) {
  return request({
    url: "/monitor/job",
    method: "post",
    data: data,
    action: {
      text: "新增"
    }
  })
}

// 修改定时任务调度
export function update(data) {
  return request({
    url: "/monitor/job",
    method: "put",
    data: data,
    action: {
      text: "修改"
    }
  })
}

// 删除定时任务调度
export function remove(jobId) {
  return request({
    url: "/monitor/job/" + jobId,
    method: "delete",
    action: {
      text: "删除",
      confirm: true
    }
  })
}

// 任务状态修改
export function changeJobStatus(jobId, status) {
  const data = {
    jobId,
    status
  }
  return request({
    url: "/monitor/job/changeStatus",
    method: "put",
    data: data
  })
}

// 定时任务立即执行一次
export function runJob(jobId, jobGroup) {
  const data = {
    jobId,
    jobGroup
  }
  return request({
    url: "/monitor/job/run",
    method: "put",
    data: data
  })
}
export function exportList() {
  return request({
    url: "/monitor/job/export",
    method: "POST",
    responseType: "blob",
    noHandleResponse: true
  })
}
