import { HOST } from "../constants/env.js";
import { METHODS, request } from "http";

const urlBuilder = (...paths) => {
    const url = paths
            .filter(x => x && typeof(x) === "string")
            .join('');

    return url;
}

const initRequest = async (contentType, method, body) => {
    return {
        method,
        headers: {
            ...(contentType && { "Content-Type": contentType })
        },
        body
    }
};

const initBaseRequest = initRequest.bind(null, "application/json");

const requester = (endpoint) => ({
    get: () => initBaseRequest('GET').then(options => fetch(urlBuilder(HOST, endpoint), options)).then(response => response.json()),
    create: data => initBaseRequest('POST', JSON.stringify(data)).then(options => fetch(urlBuilder(HOST, endpoint), options)).then(response => response.json()),
    update: data => initBaseRequest('PUT', JSON.stringify(data)).then(options => fetch(urlBuilder(HOST, endpoint), options)).then(response => response.json()),
    delete: () => initBaseRequest('DELETE').then(options => fetch(urlBuilder(HOST, endpoint), options)).then(response => response.json()),
})

export default requester;
