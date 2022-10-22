import React from 'react';
import { RenderHijo1 } from './RenderHijo1' 
import { RenderHijo2 } from './RenderHijo2'
import { RenderProvider } from './RenderContextFuncion'

export const RenderContext = () => {

	
	return (
	
		<>
			<RenderProvider>
			
				<RenderHijo1 />
				<RenderHijo2 />
			</RenderProvider>
		</>
	
	);
	
}