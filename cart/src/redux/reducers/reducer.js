
// import 
const INIT_STATE={
    carts:[]
};
export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            // return {
            //     ...state,
            //     carts:[...state.carts,action.payload]
            // }
            const itemindex=state.carts.findIndex((item)=>item.id===action.payload.id);
            if(itemindex>=0)
            {
                state.carts[itemindex].qnty+=1
            }
            else{
                const temp={...action.payload,qnty:1}
                return {
                    ...state,
                    carts:[...state.carts,temp]
                }
                
            }
            
        case "RMV_CART":
        const data=state.carts.filter((ele)=>ele.id!==action.payload);
        return {
            ...state,
            carts:data
        }
        case "RMV_ONE":
            const Itemindex_dec=state.carts.findIndex((itm)=>itm.id===action.payload.id)
            if(state.carts[Itemindex_dec].qnty>=1)
            {
                const del_item=state.carts[Itemindex_dec].qnty-=1;
                console.log([...state.carts,del_item])
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }
            else if(state.carts[Itemindex_dec].qnty===1)
            {
                const data=state.carts.filter((ele)=>ele.id!==action.payload);
                    return {
                        ...state,
                        carts:data
                    }
            }
        
        default: return state
    }
}
