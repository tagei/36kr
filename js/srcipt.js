// function $(id){
// 	return typeof id==='string'? document.getElementById(id):id;
// }
// window.onload=function(){

// 	var list=$('menu').getElementsByTagName('li');
// 	var divs=$('menu-content').getElementsByTagName('div');
// 	if(list.length!=divs.length)
// 		return;
// 	for(var i=0;i<list.length;i++){
// 		list[i].id=i;
// 		list[i].onclick=function(){
// 			for(var j=0;j<list.length;j++){
// 				list[j].className='';
// 				divs[j].style.display='none';
// 			}
// 			this.className='select';
// 			diva[this.id].style.display='block';
// 		}
// 	}
// }
