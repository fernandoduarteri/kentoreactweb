import React from 'react'

const GridItem = ({likes}) => {
    return (
        <div>
            <ul>
                {likes.map((like, index)=>{
                    return(
                        <li key={index}>{like.fan_of_music_group}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GridItem
