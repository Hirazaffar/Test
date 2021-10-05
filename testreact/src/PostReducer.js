


export const PostReducer = (state , action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {
               
                loading: false,
                post: action.payload,
                error: ""

            }
            case "FETCH_ERROR":
                return {
                   
                    loading: false,
                    post: {},
                    error: "something went wrong"
    
                }
            default :
            
                return state;
    
   
}

}
