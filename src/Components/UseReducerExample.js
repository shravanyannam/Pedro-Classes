import { useReducer } from "react"

const reducer = (state, action) => {
    switch(action.type){
        case "INCREAMENT": 
            return { count: state.count + 1, showText: state.showText}
        case "toggleShowText":
            return { count: state.count, showText: !state.showText};
        default: 
            return state;        
    }
}

export function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: false})
    return (
        <div>
            <span>{state.count}</span>
            <button onClick={() => {
                dispatch({type: "INCREAMENT"});
                dispatch({type: "toggleShowText"});
                }}
            >Increase</button>
            {state.showText && <p>This is a text.</p>}
        </div>
    )
}