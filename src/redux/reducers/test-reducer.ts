
import { initState } from '.';
import TestAction from '../actions/test-action';
import { Global_action, Global_props } from '../funcs/globals';
import { Handle_RESPONSE } from '../handle';

export const initTest_State = {
    ...initState,
};

export function Test_Reducer(state = initTest_State, action: Global_action): Global_props {
    var RES_handled = Handle_RESPONSE(action);

    switch (action.type) {
        // Stafff_RESET
        // Stafff_RESET
        // Stafff_RESET
        // Stafff_RESET
        // Stafff_RESET
        case TestAction.GET.REQUEST:
            return {
                ...state,
                latest: action.type,
                loading: true,

            }
        case TestAction.GET.SUCCESS:
            return {
                ...state,
                latest: action.type,
                loading: false,
                toast_success: RES_handled.toast_success("Test request"),
            }
        case TestAction.GET.FAILURE:
            return {
                ...state,
                latest: action.type,
                loading: false,
                toast_error: RES_handled.toast_error("Test request")
            }
        default:
            return state;
    }
}
