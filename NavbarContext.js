import React  from 'react'; 
import NavbarHijo from './NavbarHijo'
import { NavbarCreateContextFuncion } from './NavbarContext/NavbarCreateContextFuncion'
import { NavbarProvider } from './NavbarContext/NavbarCreateContextFuncion'
import { NavbarHijo2 } from './NavbarHijo2'

export const NavbarContext=()=> {
	
	
	return (
		<>
			<NavbarProvider>
			
				<NavbarHijo />
				<NavbarHijo2 />
		
			</NavbarProvider>
		</>
	
	);
	
	
	
}