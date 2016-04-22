function resetFont(){
	var HTML=document.getElementsByTagName('html')[0];
	var ww=document.documentElement.clientWidth/640;
	HTML.style.fontSize=100*ww+'px';
}
resetFont();
window.onresize=function (){
	resetFont();
}

function setCookie(Key,Value,Days){//设置Cookie
	var dates=new Date();
	dates.setDate(dates.getDate()+Days);
	document.cookie=Key+"="+escape(Value)+"; expires="+dates;
}
	function getCookie(Key){//获取cookie
	var arr=document.cookie.split('; ');
	// ['user1=laowang','user2=laozhang']
	for (var i = 0; i < arr.length; i++) {
		var arr2=arr[i].split('=');
		//['user1','laowang']
		if (arr2[0]==Key) {
			return unescape(arr2[1]);
		};
	};
	return false;
	}
$('.wfp1').click(function(){
	setCookie('wfp1','1','20')
	$('.yewrap').show();
})
$('.wfp2').click(function(){
	setCookie('wfp1','2','20')
	$('.yewrap').show();
})
$('.yep4').click(function(){
	window.open('chouj.html','_self')
})

$('.cjfi1').click(function(){
	if(getCookie('wfp1')=='1'){
		if(getCookie('cjimg1')=='3'){
			window.open('ycj.html','_self')
		}else{
			var xz=Math.floor(Math.random()*2);
			if(xz==0){
				window.open('neijiang.html','_self');
			}else{
				window.open('no.html','_self');
			};
			setCookie('cjimg1','3','20');

		};
	}
	 if(getCookie('wfp1')=='2'){
		if(getCookie('cjimg2')=='4'){
			window.open('ycj.html','_self')
		}else{
			var xz=Math.floor(Math.random()*2);
			if(xz==0){
				window.open('waijiang.html','_self');
			}else{
				window.open('no.html','_self');
			};
			setCookie('cjimg2','4','20');
		};
	}
	
})




$('.njp4').click(function(){
	window.open('guiz.html','_self')
})

$('.smp6').click(function(){
	$('.hdsm').hide();
})
$('.yep5').click(function(){
	$('.yewrap').hide();
})
$('.wfp3').click(function(){
	$('.hdsm').show();
})
$('.wjp6i1').click(function(){
	$('.fenx').show();
})
$('.njp5i1').click(function(){
	$('.fenx').show();
})
$('.fenx').click(function(){
	$('.fenx').hide();
})
$('.xclzp5').click(function(){
	$('.tjcg').show();
})
$('.xclzp6').click(function(){
	$('.hdgz').show();
})
$('.gzp3').click(function(){
	$('.hdgz').hide();
})
var arr1=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var len=arr1.length;
$('.njd1 ul li').eq(0).html(arr1[Math.floor(Math.random()*len)]);
$('.njd1 ul li').eq(1).html(arr1[Math.floor(Math.random()*len)]);
$('.njd1 ul li').eq(2).html(Math.floor(Math.random()*10));
$('.njd1 ul li').eq(3).html(Math.floor(Math.random()*10));
$('.njd1 ul li').eq(4).html(Math.floor(Math.random()*10));

