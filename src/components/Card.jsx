import React from 'react';
import Spinner from './Spinner';

const Card = ({dog ,updateDog,loading,error}) => {
    if(loading && !error){
        return <Spinner/>
    }
    return (
        <div className='card bounce' onClick={()=>updateDog(dog.breed.id)}>
        <img src={dog.image} alt='dog'/>

        <p>{dog.breed.name} </p>

        </div>
    );
};


export default Card;