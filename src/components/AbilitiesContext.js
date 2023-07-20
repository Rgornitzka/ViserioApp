import { createContext, useContext, useState } from "react";

const AbilitiesContext = createContext();

const AbilitiesProvider = ({ children }) => {
	const [abilities, setAbilities] = useState([]);
	const value = { abilities, setAbilities };

	return (
		<AbilitiesContext.Provider value={value}>
			{children}
		</AbilitiesContext.Provider>
	);
};

const useAbilities = () => 
	useContext(AbilitiesContext);

export { AbilitiesProvider, useAbilities };
