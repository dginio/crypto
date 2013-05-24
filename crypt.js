//exemple : chars = "äzërtÿüöpqsdfghjlmwxcvbnaeyuiokAZERTYUIOPQSDFGHJKLMWXCVBN²&é"'(-è_çà)=$^ù*!:;,°+¨£%µ§/.?€~#{[|`\@]}¤<>"
//			key = "This is secret"
//			input = "Texte à chiffrer"

function IsNumeric(num) { return ( num.charCodeAt(0) > 47 && num.charCodeAt(0) < 58 ); }

function code(input, key, chars) {
	var output = ""
	for( i = 0; i < input.length; i++ ) {
		charcode = input.charCodeAt(i)+key.charCodeAt(i-(parseInt(i/key.length)*key.length));
		nb = 0;
		while ( charcode > chars.length ) {
			charcode -= chars.length;
			nb += 1;
		}
		if ( nb > 0 ) output += nb;
		output += chars[charcode-1];
	}
	return output;
}

function decode(input, key, chars) {
	var output = "";
	i = 0;
	j = 0;
	while ( i < input.length ) {
		nb = "";
		while ( IsNumeric(input[i]) ) {
			nb += input[i];
			i += 1;
		}
		if ( nb == "" ) nb = 0;
		else nb = parseInt(nb);
		output += String.fromCharCode(chars.indexOf(input[i])+(chars.length*nb)+1-key.charCodeAt(j-(parseInt(j/key.length)*key.length)));
		i += 1;
		j += 1;
	}
	return output;
}