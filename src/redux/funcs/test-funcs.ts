import { Global_props, Global_state } from "./globals";

interface getStateProps extends Global_props {

}
class TEST_FUNCS {
    getState(state: Global_state): getStateProps {
        return state.test
    }
}
export default TEST_FUNCS