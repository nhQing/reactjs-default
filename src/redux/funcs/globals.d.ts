export interface Global_props {
    latest: string,
    loading: boolean
    toast_success: string,
    toast_error: string,
    error: {
        heading: string
        message: string,
        code: number
    },
    list: any[],
    detail: any
}
export interface Global_state {
    test,
}
export interface Global_action {
    type: string,
    payload: any,
    response: any
}

export default class GlobalFuncs {
    clearMessage(): { type: string, payload: any }
    clearError(): { type: string, payload: any }
}