const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, cardIndex } = action;
    const newState = [...state]
    switch (type) {
        case 'RANDOMIZE_CARD':
            return randomCard(state, cardIndex)
    }
    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)

    return state;
}

function randomCard(arrayOfCards, cardIndex) {
    const newArrayOfCards = [...arrayOfCards]
    const availableValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K"]
    const availableSuits = ["C", "D", "H", "S"]
    newArrayOfCards[cardIndex] = {
        value: availableValues[Math.floor(Math.random() * availableValues.length)],
        suit: availableSuits[Math.floor(Math.random() * availableSuits.length)]
    }
    return newArrayOfCards
}