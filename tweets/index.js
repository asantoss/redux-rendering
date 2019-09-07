const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const orderByLikes = document.getElementById('sortLikes');
const orderByRetweets = document.getElementById('sortRetweets');
const orderByReplies = document.getElementById('sortReplies');

orderByLikes.addEventListener('click', (e) => {
    dispatch({ type: 'ORDER_BY_LIKES' })
})
orderByReplies.addEventListener('click', (e) => {
    dispatch({ type: 'ORDER_BY_REPLIES' })
})
orderByRetweets.addEventListener('click', (e) => {
    dispatch({ type: 'ORDER_BY_RETWEETS' })
})
