import React,{useRef,useEffect} from 'react'

function RefsComp (){
    const inputRef  = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const ClickedRef=()=>{
        alert(inputRef.current.value)
    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            
            <button onClick={ClickedRef} >Click</button>
        </div>
    )
}

export default RefsComp


