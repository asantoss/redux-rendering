const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = { ...initialState }, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, newColor } = action;
    switch (type) {
        case 'INCREMENT_HEIGHT':
            // ACTION 1 - Increment height by 10
            return { ...state, width: state.width + 10 }
            break;
        case 'INCREMENT_WIDTH':
            // ACTION 2 - Increment width by 10
            return { ...state, height: state.height + 10 }
            break;
        case 'CHANGE_COLOR':
            // ACTION 3 - Change the color
            return { ...state, color: newColor }
    }
    return state;
}