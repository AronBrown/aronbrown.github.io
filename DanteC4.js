var versiciv = new Array("In allestimento!");

$(document).ready(function(){
	$("#button3").click(function(){
		console.log("bso")
		numero=Math.floor(Math.random()*versiciv.length)
		randnopre = versiciv[numero-1];
		if (typeof(randnopre)=="undefined") {
			randnopre="..."
		}
		$('#zonaDinamicaPre').text(randnopre);
		randno = versiciv[numero];
		$('#zonaDinamicaNow').text(randno);
		randnopost = versiciv[numero+1];
		if (typeof(randnopost)=="undefined") {
			randnopost="..."
		}
		$('#zonaDinamicaPost').text(randnopost);
	});
});
