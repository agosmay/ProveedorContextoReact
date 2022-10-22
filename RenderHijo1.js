import React , { useContext } from 'react';

import { RenderContextFuncion } from './RenderContextFuncion'


export const RenderHijo1  = () => {
	
const { datos, setDatos } = useContext(RenderContextFuncion)
	console.log('Soy el hijo del render numero 1')
	
	return (
		<>
			<h1>sOy el hijo render 1</h1>
			<h2>Estos son los dateas {datos}</h2>
			<button onClick ={()=> setDatos(Math.random()*8)}>Has click </button>
		</>
	
	);
	
	
}