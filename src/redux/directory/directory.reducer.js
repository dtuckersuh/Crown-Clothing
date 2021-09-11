const initialState = {
    sections: [
        {
            title: 'HATS',
            imageUrl: '/images/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'JACKETS',
            imageUrl: '/images/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'SNEAKERS',
            imageUrl: '/images/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'WOMENS',
            imageUrl: '/images/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'MENS',
            imageUrl: '/images/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;