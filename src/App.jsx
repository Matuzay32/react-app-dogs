import React,{useState,useEffect} from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helpers/getDog";
import Error from './components/Error'




const initialDog = {
  image: "",
  breed: {
    id:1,
    name: ""
  }
} 
const initialLoading = false;

function App() {

const [dog, setDog] = useState(initialDog);
const [loading , setLoading] = useState(initialLoading);
const [error, setError]   = useState(null);


useEffect(()=>{
  updateDog(0);



},[])

const updateDog=(breedId)=>{
  setLoading(true);
  getDog(breedId)
  .then((newDog)=>{
    setDog(newDog)
  setLoading(false);

  }).catch((e)=>{
    console.log(e)
    setError("Error al cargar el perro")
  })
  
}



  return (
      <div className="app">
          <Select updateDog = {updateDog} />
          {error && <Error error={error}/>}
            
          <Card dog={dog} updateDog = {updateDog} loading={loading} error={error}/>


      </div>
    
  );
}

export default App;
