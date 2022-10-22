import React , { useContext } from 'react';
import { NavbarCreateContextFuncion } from './NavbarContext/NavbarCreateContextFuncion'
import { NavbarProvider } from './NavbarContext/NavbarCreateContextFuncion'

const NavbarHijo = ()=> {
	const { items, setItems } = useContext(NavbarCreateContextFuncion)
	console.log('soy el hijo del navbar y me he renderizado')
	return (
		<>
			<h2>Im the Navbar son</h2>
			<h3>estos son los items {items} </h3>
			<button onClick = {()=> setItems('Blabla blaaaa')}>Cambiame los iconos</button>
		</>
	
	)
	
	
}

export default NavbarHijo;