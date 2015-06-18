/*count Words*/
function countWords(){
	s = document.getElementById("inputString").value;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	document.getElementById("wordcount").value = s.split(' ').length;

/*change background images*/	
	if (s.split(' ').length <= 10) {
		document.body.style.background = "black url('image/night_step1.jpg') no-repeat left top ";
		document.getElementById('audiotag1').play();
		document.getElementById('audiotag2').pause();
		document.getElementById('audiotag3').pause();
	} else if (s.split(' ').length <= 20){
		document.body.style.background = "black url('image/dawn_step2.jpg') no-repeat left top ";
		document.getElementById('audiotag1').pause();
		document.getElementById('audiotag2').play();
		document.getElementById('audiotag3').pause();
	}else {
		document.body.style.background = "black url('image/morning_step1.jpg') no-repeat left top ";
		document.getElementById('audiotag1').pause();
		document.getElementById('audiotag2').pause();
		document.getElementById('audiotag3').play();
	};

}

/* function decideBGimage() {
	if (s.split(' ').length <= 10) {
		document.body.style.background = "#f3f3f3 url('night_step1.jpg') no-repeat left top ";
	} else if (s.split(' ').length <= 20){
		document.body.style.background = "#f3f3f3 url('dawn_step2.jpg') no-repeat left top ";
	}else {
		document.body.style.background = "#f3f3f3 url('morning_step1.jpg') no-repeat left top ";
	};
} 
*/

/* function changeBGimage() {
    document.body.style.background = "#f3f3f3 url('night_step1.jpg') no-repeat left top ";
}
*/


