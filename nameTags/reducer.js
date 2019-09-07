const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, newName } = action;
    switch (type) {
        case 'MAKE_NEW_NAME_TAG':
            return [...state.concat(newName)]
    }
    // Add a Name Tag

    return state;
}