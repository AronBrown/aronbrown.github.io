var versiBonus = new Array("Però c’è un’altra cosa che voglio dirti\nche credo sia il vero,\ngrande merito di questa fiction:\nè che non ci sono i toscani, capisci?\nPerché con quella c aspirata\ne quel senso dell’umorismo da quattro soldi\ni toscani hanno devastato questo Paese.",
	"Devi stare muto, basso profilo,\nchiappe strette e sperare in Dio."
	);

$(document).ready(function(){
	$("#button4").click(function(){
		console.log("AO")
		numero=Math.floor(Math.random()*versiBonus.length)
		randnopre = versiBonus[numero-1];
		if (typeof(randnopre)=="undefined") {
			randnopre="..."
		}
		$('#zonaDinamicaPre').text(randnopre);
		randno = versiBonus[numero];
		$('#zonaDinamicaNow').text(randno);
		randnopost = versiBonus[numero+1];
		if (typeof(randnopost)=="undefined") {
			randnopost="..."
		}
		$('#zonaDinamicaPost').text(randnopost);
	});
});
