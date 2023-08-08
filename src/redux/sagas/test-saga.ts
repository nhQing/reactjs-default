import TestAction from "../actions/test-action";
import { Global_action } from "../funcs/globals";
import { Axios_POST, Handle_TAKE_EVERY } from "../handle";


export const watcherTest = [
    Handle_TAKE_EVERY(TestAction, 'GET', Test_GET),
];

function Test_GET(action: Global_action) {
    var url = `password/reset`;
    return Axios_POST(url, {
        token: action.payload?.token,
        password: action.payload?.password
    });
} 