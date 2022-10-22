import React , { createContext, useState } from 'react';


export const NavbarCreateContextFuncion = createContext();


export const NavbarProvider = ( {children} ) => {
	
	
	const [ items , setItems ] = useState("Estos son los iconos del Navbar")
	
	return (
		<NavbarCreateContextFuncion.Provider value={{
				items,
				setItems	
		}}>
		{children}
		</NavbarCreateContextFuncion.Provider>
		
	
	);
	
}