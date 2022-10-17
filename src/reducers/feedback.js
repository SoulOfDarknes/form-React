const defaultState = {
    name: '',
    email: '',
    message: '',
};

export default function feedbackReducer(state = defaultState, action) {
    switch (action.type) {

        default:
            return state;
    }
}