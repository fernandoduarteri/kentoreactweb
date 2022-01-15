import React, { useEffect, useState } from 'react'
import { getLikes } from '../helpers/fetch';
import GridItem from './GridItem';

const GridList = (props) => {
    const [likes, setLikes] = useState([]);
    useEffect(() => {

        const getData = async () => {

            const response =await  getLikes(props.user);
            setLikes(response.data);

        }

        getData();


    }, [props.user])
    return (
        <div className= "mt-3">
            {likes && <GridItem likes={likes} />}
        </div>
    )
}

export default GridList
