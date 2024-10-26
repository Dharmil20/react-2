import { useRef } from "react";

export function usePrev(value, initial){
    const ref = useRef({target: value, previous: initial})

    if(ref.current.target !== value){
        ref.current.previous = ref.current.target;
        ref.current.target = value;
    }

    return ref.current.previous
}

// export function usePrev(value){
//     const ref = useRef();

//     useEffect(()=>{
//         ref.current = value
//     }, [value])

//     return ref.current; 
//     //React property: It returns first, useEffect gets called later 
// }
//Refs dont re-render when they change
/*
Eska Implementation aisa hai ki: 
1. initially value 0 hai; we return ref.current ie undifined;  lastly useEffect is called due to value as a dependency which changes ref.current to 0
2. value updates to 1; we return ref.current ie 0; lastly useEffect is called due to value as a dependency which changes ref.current to 1
3. value updates to 2; we return ref.current ie 1 (from previous); ref.current updated to 2
*/