import React ,{useState, useEffect}from 'react';
import getBreeds from '../helpers/getBreeds';
import Error from './Error'

const initialBreeds = [{
    id:1,
    name:"error al cargar "

}

]



const Select = ({updateDog}) => {


useEffect(()=>{
    updateBreeds();

},[])

const updateBreeds  = ()=>{
    getBreeds()
    .then((newBreeds)=>{
        setBreeds(newBreeds);

    }).catch((e)=>{
        console.log(e);
        setError('Error en formulario no se pudierons cargar las razas')
    });

}

const [breeds, setBreeds] = useState(initialBreeds);

const [error, setError]   = useState(null);




    return (
        <><select onChange={(e) => updateDog(e.target.value)}>

            {breeds.map((breed) => <option key={breed.id} value={breed.id}> {breed.name} </option>)}



        </select>
        
        {error && <Error error ={error}/> }
        </>
    );
};


export default Select;