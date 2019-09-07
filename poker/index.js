const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const randomizeCardOne = document.getElementById('card1Button');
const randomizeCardTwo = document.getElementById('card2Button');

randomizeCardOne.addEventListener('click', (e) => {
    dispatch({ type: 'RANDOMIZE_CARD', cardIndex: 0 })
})

randomizeCardTwo.addEventListener('click', (e) => {
    dispatch({ type: 'RANDOMIZE_CARD', cardIndex: 1 })
})
