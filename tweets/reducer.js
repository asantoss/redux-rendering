const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
]
    ;

const reducer = (state = [...initialState], action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    switch (type) {
        case 'ORDER_BY_RETWEETS':
            // ACTION 1 - Sort by # likes

            return [...state.sort((a, b) => {
                return a.retweets - b.retweets
            })]
            break;
        case 'ORDER_BY_LIKES':
            // ACTION 2 - Sort by # retweets

            return [...state.sort((a, b) => {
                return a.likes - b.likes
            })]
            break;
        case 'ORDER_BY_REPLIES':

            // ACTION 3 - Sort by # replies
            return [...state.sort((a, b) => {
                return a.replies - b.replies
            })]



    }



    return state;
}