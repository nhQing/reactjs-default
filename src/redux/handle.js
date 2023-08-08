import { call, put } from "redux-saga/effects";
import axios from "axios";
var token = null;
var duration = null;
var login_at = 0;
var account = "";

if (typeof window !== "undefined") {
    console.log("we are running on the client");
    token = localStorage?.getItem("token") || null;
    duration = localStorage?.getItem("duration") || null;
    login_at = localStorage?.getItem("login_at") || 0;
    account = localStorage?.getItem("account") ? JSON.parse(localStorage?.getItem("account")) : "";
} else {
    console.log("we are running on the server");
}

export const gateway = process.env.REACT_APP_GATEWAY;
export const gateway_ekyc = process.env.REACT_APP_GATEWAY_EKYC;

// token
export const setToken = (newToken) => {
    token = newToken;
    window.localStorage?.setItem("token", newToken);
};
export const getToken = () => token;

// duration
export const setDuration = (newDuration) => {
    duration = newDuration;
    window.localStorage?.setItem("duration", duration);
};
export const getLogin = () => login_at;
export const setLoginTime = (time) => {
    login_at = time;
    window.localStorage?.setItem("login_at", login_at);
};
export const getDuration = () => duration;
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
// handle
export const Handle_TYPES = (KEY) => {
    return {
        REQUEST: KEY + "_REQUEST",
        SUCCESS: KEY + "_SUCCESS",
        FAILURE: KEY + "_FAILURE",
    };
};

import { takeEvery } from "redux-saga/effects";

// user

export function setMyAccount(model) {
    account = model;
    window.localStorage?.setItem("account", account ? JSON.stringify(account) : "");
}
export const getMyAccount = () => account;

//
//
//
//
//handle Reducer
//
//
//
export const Handle_RESPONSE = (action) => {
    // const paging = action?.response?.paging;
    // console.log('action', action);

    return {
        toast_error: (text) => text + " is failed!",
        toast_success: (text) => text + " is successed!",
        error: (text) => ({
            heading: text ?? action?.type,
            code: action?.response?.error_code,
            message: action?.response?.message,
        }),
    };
};

// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
// saga
export const Handle_TAKE_EVERY = (Action, key, handle) =>
    takeEvery(Action[key].REQUEST, grpcCall(handle, Action[key].SUCCESS, Action[key].FAILURE));

function* sagaCall(action) {
    try {
        // console.log('Saga request ------------------ : ', action.type);
        var resp = yield call(this.execute, action);

        // console.log('Saga Success : ', resp.data);
        yield put({ type: this.success, response: resp.data, payload: action.payload });
    } catch (err) {
        console.error(`Saga call Error ${action.type}:${this.failure}: ${JSON.stringify(err)}`);
        yield put({
            type: this.failure,
            payload: action.payload,
            response: err?.response?.data ?? err,
        });
    }
}

export function grpcCall(execute, success, failure) {
    return sagaCall.bind({ execute, success, failure });
}

export function metaWithAuth(meta) {
    if (!meta) {
        meta = {
            "Content-Type": "application/json",
        };
    }
    var token = getToken();
    if (token !== "") {
        meta["Authorization"] = `Bearer ${token}`;
    }
    return { headers: meta };
}

export function metaWithAuthGRPC(meta) {
    if (!meta) {
        meta = {};
    }
    var token = getToken();
    if (token !== "") {
        meta["Authorization"] = `Bearer ${token}`;
    }
    return meta;
}
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
// call API
const Handle_URL = (url) => (url.startsWith("http") ? url : gateway + "/" + url);
// __________________________________________
// __________________________________________
export function Axios_GET(url) {
    return axios.get(Handle_URL(url), metaWithAuth());
}
export function Axios_DELETE(url) {
    return axios.delete(Handle_URL(url), metaWithAuth());
}
export function Axios_PATCH(url, options) {
    return axios.patch(Handle_URL(url), options, metaWithAuth());
}
export function Axios_POST(url, options) {
    return axios.post(Handle_URL(url), options, metaWithAuth());
}
