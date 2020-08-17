import React, {useRef, useLayoutEffect} from 'react'
import '../styles/Loader.css'
function Loader() {
    const loaderRef = useRef(null);
    useLayoutEffect(()=>{
        loaderRef.current.style.transform = "translate3d(0, calc(50vh - 20px), 0)";
    })
    return (
        <div className="Loader__container" ref={loaderRef}>
            <div className="Loader">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    )
}

export default Loader
