# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online 

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esas dos letras
- Si la palabra inicia con "Z", se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con un guion
- Si la palabra es un palindromo se aplica un formato de mayusculas y minusculas intercaladas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom( 'Programar' ) // Program
platzom( 'Zorro' ) // Zorrope
platzom( 'Zarpar' ) // Zarppe
platzom( 'abecedario' ) // abece-dario
platzom( 'caracteristicas' ) // caracte-risticas
platzom( 'sometemos' ) // SoMeTeMoS
```

## Créditos

- [@jjyepez](https://twitter.com/jjyepez)

## Licencia

[MIT](https://opensource.org/licenses/MIT)