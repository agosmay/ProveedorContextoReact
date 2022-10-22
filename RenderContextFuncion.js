import React , { createContext, useState } from 'react';

export const RenderContextFuncion = createContext();


export const RenderProvider = ({children}) => {
		const [datos, setDatos] = useState("Hello")
		return (
		
			<RenderContextFuncion.Provider value={{
				datos,
				setDatos
				
			}}>
			{children}
			</RenderContextFuncion.Provider>
		
		);
	
}