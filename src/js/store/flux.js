const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [
				{
					climate: "",
					created: "",
					diameter: "",
					edited: "",
					films: ["http://www.swapi.tech/api/films/1/"],
					gravity: "",
					name: "",
					orbital_period: "",
					population: "",
					residents: ["http://www.swapi.tech/api/people/1/"],
					rotation_period: "",
					surface_water: "",
					terrain: "",
					url: "https://www.swapi.tech/api/planets/1/"
				}
			],
			urlRoot: "https://www.swapi.tech/api/"
		},

		actions: {
			loadSomeData: () => {
				console.log("Entro");
				fetch(getStore().urlRoot.concat("planets"))
					.then(function(response) {
						console.log(response);
						if (!response.ok) {
							console.log(response);

							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson });
					})
					.catch(function(error) {
						"Looks like there was a problem! ", error;
					});
			}
			/*//let responseAsJson = response.json();
				console.log(responseAsJson);
                console.log(resultFetch);
                */
		}

		/*
                
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });/*/

		/*
                    fetch(urlRoot.concat("planets"))
                    .then(function(response))
                        if (!response.ok) 
                            throw Error(response.statusText);                    
                        }
                    .then(function(responseAsJson) => setStore({ "foo": data.bar })),
                */

		//reset the global store
		//setStore({ demo: demo });
	};
};

export default getState;
