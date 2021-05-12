import React, { useState, useEffect } from "react";
import getPeople from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [people, setPeople] = useState(
			getPeople({
				getStore: () => people.store,
				getActions: () => people.actions,
				setStore: updatedStore =>
					setPeople({
						store: Object.assign(people.store, updatedStore),
						actions: { ...people.actions }
					})
			})
		);

		useEffect(() => {
			people.actions.loadSomeData(undefined, "");
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setpeople() to save data in the
			 * store, instead use actions, like this:
			 *
			 *(la funcion que hay arriba) <---- calling this function from the flux.js actions
			 *
			 **/
		}, []);

		// The initial value for the context is not null anymore, but the current people of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the people of this component
		return (
			<Context.Provider value={people}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
