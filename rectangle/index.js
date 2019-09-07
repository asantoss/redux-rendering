const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const increaseHeight = document.getElementById('height');
const increaseWidth = document.getElementById('width');
const changeToRed = document.getElementById('red');
const changeToBlue = document.getElementById('blue');

increaseHeight.addEventListener('click', (e) => {
    dispatch({ type: 'INCREMENT_HEIGHT' })
})

increaseWidth.addEventListener('click', (e) => {
    dispatch({ type: 'INCREMENT_WIDTH' })
})

changeToRed.addEventListener('click', (e) => {
    dispatch({ type: 'CHANGE_COLOR', newColor: 'red' })
})
changeToblue.addEventListener('click', (e) => {
    dispatch({ type: 'CHANGE_COLOR', newColor: 'blue' })
})
