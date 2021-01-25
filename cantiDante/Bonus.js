var versiBonus = new Array("Simpatiche frasi\nin arrivo");

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
