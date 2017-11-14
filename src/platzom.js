export default function platzom( cad ){
	let salida = cad

	// Si la palabra termina en ar se le quitan esos 2 caracteres
	if( cad.toLowerCase().endsWith('ar') ) {
		salida = cad.slice( 0, -2 )
	}
	// Si la palabra comeinza en z se le agrega pe al final
	if( cad.toLowerCase().startsWith('z') ) {
		salida += 'pe'
	}
	// si la longitud es mayor que 10 se divide en dos y se intercala un -
	let l = salida.length
	if( l >= 10 ){
		let primeraMitad = salida.slice( 0, Math.round( l / 2 ) )
		let segundaMitad = salida.slice( Math.round( l / 2 ) )
		salida = `${primeraMitad}-${segundaMitad}`
	}
	const alreves = ( cad ) => cad.split('').reverse().join('')
	const minMay  = ( cad ) => {
		let salida = ''
		let control = true
		cad.split('').forEach((letra) => {
			salida += control ? letra.toUpperCase() : letra.toLowerCase()
			control = !control
		})
		return salida
	}

	if( cad == alreves( cad ) ) {
		salida = minMay( cad )
	}
	return salida
}