async function getDog(breedId) {
  
    const url =
			breedId === 0 || !breedId
				? "https://api.thedogapi.com/v1/images/search"
				: `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;

   	const res = await fetch(url);
	const [data] = await res.json();

	if(!res.ok){
        const {url ,status, statusText} = res
        throw new Error(`Error : ${status} ${statusText} fetch url ${url} `)
    }
		console.log(data);

    let { url: image, breeds } = data;
		//desestructura el array de razas
		let [breed] = breeds;
		// si no hay raza que devuelva una random
		if (!breed) {
			breed = {
				id: 0,
				name: "random",
			};
		}

		const dog = {
			image,
			breed,
		};

		return dog;
}

export default getDog;