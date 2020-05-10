$(function(){
	$.get(
		'http://www.gwars.ru/me.php',
		function(data){
			console.log(data);
		}
	);
});