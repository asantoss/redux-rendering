const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    switch (type) {
        case 'ADD_RANDOM_CIRCLE':
            return [...state.concat(generateCircle())]
            break;
    }

    // ACTION: Add a random circle

    return state;
}


function generateCircle() {
    return { radius: generateRadius(), color: generateHex() }
}
function generateHex() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}
function generateRadius() {
    return Math.floor((Math.random() * 100) + 1);
}