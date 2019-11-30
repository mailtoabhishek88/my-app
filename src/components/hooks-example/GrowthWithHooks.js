import React, { useState, useEffect } from 'react';
import STATIC_DATA from '../../constants/static-data';
import 'bootstrap/dist/css/bootstrap.min.css';


let staticData = null;

let initXY = {
    x: null,
    y: null
}

const GrowthWithHooks = () => {

    const [growth, setGrowth] = useState(0);
    const [born, setBorn] = useState(false);
    const [nirvana, setNirvana] = useState(false);
    const [time, setTime] = useState(Date);
    const [mousePos, setMousePos] = useState(initXY);

    // Runs only at mounting lke -----> componentDidMount
    useEffect(() => {
        console.log('I am Born')
        // Immitating API call like scenario
        setTimeout(() => {
            staticData = STATIC_DATA
        }, 2000)
    }, [])

    // On Every Update
    useEffect(() => {
        console.log('Without second parameter run on mounting and after every update')
        if (born) {
            console.log('I am learning and growing')
        }
        if (growth > 50) {
            setNirvana(true)
        }

        const handle = setInterval(() => {
            setTime(Date)
        }, 1000)

        // for clearing up the things before executing current hook
        return () => {
            console.log('Cleaning up timer handle')
            clearInterval(handle)
            console.log('Cleaning up mistakes first for further learning')
        }
    })

    useEffect(() => {
        const handle = window.addEventListener('mousemove', mouseMoveHandle);

        return window.removeEventListener('mousemove', handle);
    }, [])

    // Whenever any change happen to 'nirvana'
    useEffect(() => {

        document.title = nirvana ? "This is Nirvana" : 'React App'
    }, [nirvana])

    const mouseMoveHandle = (event) => {
        setMousePos({
            x: event.clientX,
            y: event.clientY
        })
    }



    const growthHandle = () => {
        setBorn(true)
        setGrowth(growth + 10)
    }

    const learnAgainHandle = () => {
        setBorn(false);
        setGrowth(0);
        setNirvana(false)
    }
    if (staticData) {
        return (
            <div>
                Current Time is : {time}
                Growth Home Page
            <h2>{born ? 'Growth : ' : null} {growth}</h2>
                <div>
                    {!nirvana ? <button onClick={growthHandle}> {staticData.addGrowth}</button> : <div>
                        wanna back to old days and grow ? <button onClick={learnAgainHandle}>Learn from start Again</button>
                    </div>}
                </div>
                <hr />
                <div>Mouse Position : <span>{`x: ${mousePos.x} | y: ${mousePos.y}`}</span></div>
            </div>
        )
    }
    else {
        return <>
            Loading...
            <div className="spinner-border m-5" role="status">

            </div>
        </>
    }
};

export default GrowthWithHooks;