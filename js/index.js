var _$width=window.screen.width;
var _$height=window.screen.height;
var _down=true;
 var index=0;
var flag=1;
$(function(){
	//设置当前屏幕高度
	$(".module").height(_$height);

    $(".nav-dot li").bind("mouseover",function(){
	    index = $(".nav-dot li").index(this);
	    addIcon(index+1)
    }).mouseout(function(){ 
    	if(index!=flag){
    		$(".nav-dot span").eq(index).removeClass();
    	}
    })
    $(".nav-dot li").bind("click",function(){
	    index = $(".nav-dot li").index(this);
	    flag=$(".nav-dot li").index(this);
	    $(".nav-dot span").removeClass();
	    addIcon(index+1)
	    $("#hjg_content").animate({marginTop:"-"+flag*_$height+"px"},500,"linear")
    });

	loaderPage();
	$(".pic").bind("click",function(){
		$(this).fadeOut("slow");
	})
})
function autoRoll() {
    $(document).on("mousewheel DOMMouseScroll", function(e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
        $(document).off("mousewheel DOMMouseScroll");
        if (delta > 0) {
            // 向上滚
             if(flag>=1){
	        	flag=flag-1;
				$("#hjg_content").animate({marginTop:"-"+(flag-1)*_$height+"px"},500,"linear")
	        }
            //要执行的方法
        } else if (delta < 0) {
            // 向下滚
           if(flag<=$("#hjg_content>div").length-1){
				
				$("#hjg_content").animate({marginTop:"-"+flag*_$height+"px"},500,"linear")
				flag=flag+1;
	        }
           //要执行的方法
        }
        $(".nav-dot span").removeClass();
		addIcon(flag);
        //使用setTimeout方法产生一个延时效果，是的每次滑动鼠标滑轮，只执行一次事件方法
        setTimeout(autoRoll, 500);

    });
}
autoRoll();
function addIcon(flag){
	var flag=flag-1;
    if(flag==0){
    	$(".nav-dot span").eq(flag).addClass("index");
    }else if(flag==1){
    	$(".nav-dot span").eq(flag).addClass("about");
    }
    else if(flag==2){
    	$(".nav-dot span").eq(flag).addClass("skill");
    }
    else if(flag==3){
    	$(".nav-dot span").eq(flag).addClass("work");
    }
    else if(flag==4){
    	$(".nav-dot span").eq(flag).addClass("project");
    }
    else if(flag==5) {
    	$(".nav-dot span").eq(flag).addClass("contact");
    }
}
var loaderPage = function() {
	$(".fh5co-loader").fadeOut("slow");
};	
function returnTop() {
     $('html').animate({ scrollTop: 0 }, 500)
     $(".goTop").css('display','none');  
}
function qq(){
	$(".popup").fadeIn("slow");
	document.getElementById("qrcode").setAttribute('src','img/qq.png')
}
function weixin(){
	$(".popup").fadeIn("slow");
	document.getElementById("qrcode").setAttribute('src','img/weixin.png')
}
function guanbi(){
	$(".popup").fadeOut("slow");
}
function seePic(){
	$(".pic").fadeIn("slow");
	document.getElementById("pic").setAttribute('src','img/user-3.jpg')
}
function seeCode(n){
	if(n==1){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/zhizhipingtaicode.png')
	}else if(n==2){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/zhizhixiaochengxuhoutaicode.png')
	}else if(n==3){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/membercode.png')
	}else if(n==4){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/wanjia.png')
	}else if(n==5){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/xileku.png')
	}else if(n==6){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/gostreet.png')
	}else if(n==7){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/Qtravel.png')
	}else if(n==8){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/qifu.png')
	}else if(n==9){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/huangjingao.png')
	}else if(n==10){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/zhizhi360.png')
	}else if(n==11){
		$(".pic").fadeIn("slow");
		document.getElementById("pic").setAttribute('src','img/erp.png')
	}
}
function closed(){
	$(".pic").fadeOut("slow");
}
function zhizhipingtai(){
	$(".popup").fadeIn("slow");
	document.getElementById("qrcode").setAttribute('src','img/zhizhipingtai.png')
}

//页面百分比设置
var startX;
var startY;
$("body").on("touchstart", function(e) {
　　　　e.preventDefault();
　　　　startX = e.originalEvent.changedTouches[0].pageX,
　　　　startY = e.originalEvent.changedTouches[0].pageY;
　　});
　　$("body").on("touchmove", function(e) {
　　　　e.preventDefault();
　　　　moveEndX = e.originalEvent.changedTouches[0].pageX,
　　　　moveEndY = e.originalEvent.changedTouches[0].pageY,
　　　　X = moveEndX - startX,
　　　　Y = moveEndY - startY;

　　　　if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
　　　　　　alert("left 2 right");
　　　　}
　　　　else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
　　　　　　alert("right 2 left");
　　　　}
　　　　else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
　　　　　　alert("top 2 bottom");
　　　　}
　　　　else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
　　　　　　alert("bottom 2 top");
　　　　}
　　　　else{
　　　　　　alert("just touch");
　　　　}
　　});

window.onload=function(){
	var sliderWidth=0;//父容器宽度
	//标识是否可点击
	var flag=1;
	var num=$("._s").length;
	if(window.screen.width>=768){
			sliderWidth=$("#_f").width();
			sliderHeight=$(".slideToolbar ._s").eq(0).height();
			
			//父容器宽高
			$(".slideToolbar").width(num*2*sliderWidth+"px")
			$(".slideToolbar").height("auto")
			//子容器宽高
			$(".slideToolbar ._s").width(sliderWidth+"px")
			$(".slideToolbar ._s").height("auto")
	}
	//mobile
	else{
		
	}
	
	
	//上一页prev
	$(".prevPageBtn").bind("click",function(){
		if(flag>1){
			flag=flag-1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".slideToolbar,.nextPageBtn").removeClass("last")
			if(flag==1){
				$(this).addClass("last");
			}
			sin();
		}
	
	})
	
	
	//下一页next
	$(".nextPageBtn").bind("click",function(){
		if(flag<num){
			flag=flag+1;
			$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
			$(".prevPageBtn,.nextPageBtn").removeClass("last")
			if(flag==num){
				$(this).addClass("last");
			}
			sin()
		}
	})
	
	
	//页码事件
	$(".dot li").bind("click",function(){	
		flag=$(this).index()+1;
		$(".slideToolbar").animate({marginLeft:"-"+sliderWidth*(flag-1)+"px"},500,"linear")
		$(".prev,.next").removeClass("last")
		if(flag==1){
			$(".prevPageBtn").addClass("last");
		}
		if(flag==num){
				$(".nextPageBtn").addClass("last");
			}
		sin();
	})
	
	function sin(){
		$(".dot li").removeClass("active");
		$(".dot li").eq(flag-1).addClass("active");
	}

    $("#more").bind("click",function(){
    	if(flag<page.length){
    		var oDivChild="";
			for(j in page[flag]){
	            oDivChild +='<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 "> '+
									'<img src="'+page[flag][j].url+'"/>'+
					            '</div>'
	           }
			oDiv += '<div class="row">'+
					oDivChild+
					'</div>';
		flag=flag+1;
    	$("#slideToolbar").append(oDiv);
    	}
    	else{
    		$("#more").html("已经加载全部")
    	}
    	
    })
}


