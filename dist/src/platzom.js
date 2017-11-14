'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(cad) {
	var salida = cad;

	// Si la palabra termina en ar se le quitan esos 2 caracteres
	if (cad.toLowerCase().endsWith('ar')) {
		salida = cad.slice(0, -2);
	}
	// Si la palabra comeinza en z se le agrega pe al final
	if (cad.toLowerCase().startsWith('z')) {
		salida += 'pe';
	}
	// si la longitud es mayor que 10 se divide en dos y se intercala un -
	var l = salida.length;
	if (l >= 10) {
		var primeraMitad = salida.slice(0, Math.round(l / 2));
		var segundaMitad = salida.slice(Math.round(l / 2));
		salida = primeraMitad + '-' + segundaMitad;
	}
	var alreves = function alreves(cad) {
		return cad.split('').reverse().join('');
	};
	var minMay = function minMay(cad) {
		var salida = '';
		var control = true;
		cad.split('').forEach(function (letra) {
			salida += control ? letra.toUpperCase() : letra.toLowerCase();
			control = !control;
		});
		return salida;
	};

	if (cad == alreves(cad)) {
		salida = minMay(cad);
	}
	return salida;
}