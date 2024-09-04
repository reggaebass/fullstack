import React, { useState, useEffect }from 'react'

export const Home = () => {
    const [apiData, setApiData] = useState([{}])

    useEffect(() => {
        fetch('/api').then(
            r => r.json()
        ).then(
            data => {
                setApiData(data)
            }
        )
    }, [])
    return(
        <>
        {(typeof apiData.testArr === 'undefined') ? (
            <p>loading...</p>
        ) : (
            <>{
                apiData.testArr.map((test, i) => (
                    <div key={i}>{test}</div>
                ))
            }</>
        )}
        </>
    )
}