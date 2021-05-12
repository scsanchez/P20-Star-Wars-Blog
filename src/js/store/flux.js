const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*	exampleFunction: () => {
				getActions().changeColor(0, "green");
        		},
			loadSomeData: () => {
					fetch().then().then(data => setStore({ "foo": data.bar }))
			},
		*/ getPeople0: async () => {
				let peopleStored = [];
				let response = await fetch("https://www.swapi.tech/api/people/", { method: "GET" });
				let responseAsJson = await response.json();
				console.log(typeof responseAsJson);
				setStore({ people: responseAsJson });
			},
			getPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people/");
					if (response.ok) {
						let responseAsJson = await response.json();
						console.log(responseAsJson);
						setStore({ people: responseAsJson });
					}
					throw new Error(response.statusText, " code: ", response.status);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
