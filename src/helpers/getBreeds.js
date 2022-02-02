async function getBreeds() {
    const url  = 'https://api.thedogapi.com/v1/breeds'
    const res  =  await fetch(url);
    const breeds =  await res.json();  
    if(!res.ok){
        const {url ,status, statusText} = res
        throw new Error(`Error : ${status} ${statusText} fetch url ${url} `)
    }
    
    return breeds;
}

export default getBreeds;