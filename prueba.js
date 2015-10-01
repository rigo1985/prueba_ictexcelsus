cadena = 'Cadena de pruebas';
function invertir_cadena(cadena)
{
	/*
	La forma más optima es la siguiente:
	* 
	*  return cadena.split('').reverse().join('');
	* 
    */

    aux = '';
	var i = cadena.length - 1;
    while (i >= 0) { aux += cadena.charAt(i--); }
    return aux;
}

function invertir_palabra_en_cadena(cadena)
{
	arr_aux = [];
	arr_cad = cadena.split(" ");
    for (var i = 0; i < arr_cad.length; i++)
    {
        arr_aux.push(invertir_cadena(arr_cad[i]));
    }
    arr_aux = arr_aux.join(' ');
    return arr_aux;
}

function invertir_orden_de_palabras_en_cadena(cadena)
{
	/*
	La forma más optima es la siguiente:
	* 
	*  	return cadena.split(" ").reverse().join(' ');
	* 
    */
	arr_aux = [];
	arr_cad = cadena.split(" ");
    for (var i = 0; i < arr_cad.length; i++)
    {
        arr_aux.unshift(arr_cad[i]);
    }
    arr_aux = arr_aux.join(' ');
    return arr_aux;
}

met_invertir_cadena = invertir_cadena(cadena);
met_inv_word_cadena = invertir_palabra_en_cadena(cadena);
met_inv_orden_cad = invertir_orden_de_palabras_en_cadena(cadena);
alert(met_invertir_cadena);
alert(met_inv_word_cadena);
alert(met_inv_orden_cad);
