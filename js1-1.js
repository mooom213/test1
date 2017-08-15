<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>

	<style>
		 .box{width:1902px; height:400px; position: relative;}
		 .slide{width:1902px; height: 400px; overflow: hidden;  position: relative;}
         .slide .img{ position: absolute;width:1902px; height: 400px;    }
         .slide .img01{ background: url(images/1.jpg) no-repeat ; display: none;}
         .slide .img02{ background: url(images/2.jpg) no-repeat ; display: none;}
         .slide .img03{ background: url(images/3.jpg) no-repeat ; display: none;}

         .slide .show{ display: block; }
         .round-btn{ position: absolute; right:20px; bottom: 20px; height: 16px;width:400px;  text-align: right;}
         .round-btn span{display: inline-block; width:12px; height:12px; border-radius: 6px;margin-right:6px; border:1px solid #fff; }

         .round-btn span.current{ background: #fff }

         .next{ background: url(images/right.png) no-repeat;  position:absolute; right:0px; top: 50%; margin-top: -35px;  width:30px; height:60px; display: block;}

         .prev{ background: url(images/right.png) no-repeat;  position:absolute; left:220px; top: 50%; margin-top: -35px;  width:30px; height:60px; transform:scaleX(-1);display: block;}
	</style>
	
<body>

<div class="box" id="box">
	<div class="slide" id="banner">
		<a href=""  >
			<div class="img img01 show"></div>
		</a>
		<a href=""  >
			<div class="img img02"></div>
		</a>
		<a href=""  >
			<div class="img img03"></div>
		</a>
		
	</div>
	<div  class="next" id="next"></div>
	<div  class="prev" id="prev"></div>
	<div class="round-btn" id="dots">
		<span class="current"></span>
		<span></span>
		<span></span>
	</div>
</div>


<script type="text/javascript">

 function byId(id){

     return typeof(id)==="string"?document.getElementById(id):id;


 }
	
 
var timer = null,
    index = 0,
    pics = byId("banner").getElementsByTagName("div"),
    len = pics.length,
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev"),
    next = byId("next");
	
 function slideImg(){
   var box = byId("box");  
   box.onmouseover = function(){
      
           if(timer)clearInterval(timer);
   };
   box.onmouseout = function(){

   	 timer = setInterval(function(){           
   	 	   index ++;
   	 	   if(index >= len){
   	 	   	  index = 0;
   	 	   }
   	 	   changeImg();
   	 },3000);
   };

   box.onmouseout();

   for(var d=0;d<len;d++){
       dots[d].id = d;
   	   dots[d].onclick=function(){

   	   	 index = this.id;
   	   	
         changeImg()
   	   }
   }

  next.onclick = function(){
      
     index++;

     if(index >= len) index = 0;
     changeImg()

   }

   prev.onclick = function(){
      
     index--;

     if(index < 0) index = len - 1;
     changeImg()

   }

 }

 function changeImg(){
    for(var i=0;i<len;i++){
    	pics[i].style.display = "none";
   	    dots[i].className="";

    }
 	pics[index].style.display = "block";
 	dots[index].className="current"

 }
slideImg()	     

</script>


	
</body>
</html>
