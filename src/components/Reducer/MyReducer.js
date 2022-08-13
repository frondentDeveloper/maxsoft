const MyInistialState = {
   photo:[],
    name:[],
    email:[]
};

export const MyReducers = (state = MyInistialState, action) => {
    switch (action.type) {
        case "GET_USER" : {
            return {...state, photo: action.payload}
        }
        case "GET_EMAIL" : {
            return {...state, email: action.payload}
        }
        case "GET_NAME" : {
            return {...state, name: action.payload}
        }
        default: {
            return state
        }
    }
};