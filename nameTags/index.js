const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const nameInput = document.querySelector('#nameForm');

nameInput.addEventListener('submit', (e) => {
    e.preventDefault()
    dispatch({ type: "MAKE_NEW_NAME_TAG", newName: nameInput.elements.name.value })
})