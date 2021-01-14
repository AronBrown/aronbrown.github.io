var versiBonus = new Array("A volte mi rendo conto che esagero\nnon so gestire i miei sentimenti e men che mai la mia rabbia\nvederti vestita in quel modo l'altra sera al Queenrider di Tivoli\nassieme a Giacomo che tu dicevi essere solo un amico\nmi ha fatto un effetto strano\nquella reazione lo sai non appartiene al Valerio con cui hai passato sei anni\ncon cui hai passato quel weekend a Istanbul\nquel mese in Giappone nel quale ci siamo promessi amore eterno\ncosa ne è ora di quel tempo passato assieme\nio non ti ho mai sfiorato con un fiore Letizia\nmai in cinque anni\nè stato orribile\nil tuo sguardo\nquel mio gesto\nil dover discutere con un agente di polizia fino alle tre del mattino\ntu ora mi vedi che faccio il clown qui in televisione\nma qua sotto c'è un cuore distrutto per te\nchiamami appena puoi");

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
