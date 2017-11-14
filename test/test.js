const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
	it( 'Si la palabra termina en "ar", se le quitan esas dos letras', function(){
		const traducida = platzom('Programar')
		expect( traducida ).to.equal('Program')
	})
	it( 'Si la palabra inicia con "Z", se le a;ade "pe" al final', function(){
		const traducida = platzom('Zarpar')
		const traducida2 = platzom('Zorro')

		expect( traducida ).to.equal('Zarppe')
		expect( traducida2 ).to.equal('Zorrope')
	})
	it( 'Si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con un guion', function(){
		const traducida = platzom('abecedario')
		expect( traducida ).to.equal('abece-dario')
	})
	it( 'Si la palabra es un palindromo se aplica un formato de mayusculas y minusculas intercaladas', function(){
		const traducida = platzom('sometemos')
		expect( traducida ).to.equal('SoMeTeMoS')
	})
})