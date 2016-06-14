$(function(){
	var i,j,t,f,b;
	$(document).on('contextmenu',false)
	var a=0,d=0;
	var jiancha=function(s){

	var i,j,t,f,b;
		// console.log(s['x'])
		for(i=s['x']-1;i<=s['x']+1;i++){
			for(j=s['y']-1;j<=s['y']+1;j++){
				if ($('#'+i+'-'+j).is('.lei')) {
					a++;
					if ($('#'+i+'-'+j).is(':not(.qi)')) {
						d++;
					};
				};
			}
		}
		$(this).filter(':not(.qi)').addClass('unlei').text(a);
		if(d===0){
			for(t=s['x']-1;t<=s['x']+1;t++){
				for(f=s['y']-1;f<=s['y']+1;f++){
				// jiancha();
				// console.log($('#'+t+'-'+f).length)
				if ($('#'+t+'-'+f).is('.littlek')) {
					// $('#'+t+'-'+f).mousedown();
					a=0;d=0;
					for(i=t-1;i<=t+1;i++){
						for(j=f-1;j<=f+1;j++){
							if ($('#'+i+'-'+j).is('.lei')) {
								a++;
							};
						}
					}
					$('#'+t+'-'+f).filter(':not(.qi)').addClass('unlei').text(a);
				};
				
			}
		}
	}
}
var clickfn=function(e){ 
		if (e.which===1 && !($(this).is('.qi'))) {
			if ($(this).is('.lei')) {
				$('.lei').addClass('bao');
				alert('很不幸，踩到雷了');
				xuanran();
			}else{
				a=0;d=0;
				jiancha.call(this,e.data);
				if ($('.littlek:not(.unlei)').length===$('.lei').length) {
					alert('ying');
					xuanran();
				};
			}
		}else if (e.which===3 && !($(this).is('.unlei'))) {
			$(this).toggleClass('qi');
			// console.log($('.qi').length,$('.lei[class*=qi]').length)
			if ($('.lei').length===$('.lei[class*=qi]').length) {
				alert('ying');
				xuanran();
			}else if($('.qi').length===$('.lei').length){
				alert('youcuo')
			}
		}
	};

function xuanran(){
	$('.box').html('')
	for(i=0;i<10;i++){
		for(j=0;j<10;j++){
			var islei=Math.random()>0.9;
			$('<div>')
			.attr('id',i+'-'+j)
			.addClass(function(){
				return 'littlek '+(islei ? 'lei':'');
			})
			.appendTo($('.box'))
			.on('mousedown',{x:i,y:j,lei:islei},clickfn)
		}
	}
}
xuanran();

})