import { getRequest, jsonRequest } from "./http.js";
const prefix = "/api";


export function getAgents() {
    return getRequest(`${prefix}/agents`);
}

export function modifyAgent(id, data = {}) {
    return jsonRequest.put(`${prefix}/agents/${id}`, data);
}