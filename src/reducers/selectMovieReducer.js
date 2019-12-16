export default function (state = false, action) {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return !state;
        default:
            return state;
    }
}