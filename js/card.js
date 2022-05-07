$(function(){
   var gameOver= true, max= 4, used= 0, puan= 0,
   cardSize= $("div.card").length
   function baslat (){
      var yildizliKey= Math.floor(Math.random()*cardSize) 
      $(".yildiz").remove()
      $(".flip-box-inner").removeAttr("style")
      $("div.flexdiv").removeAttr("style")
      $(".usedcan").text(used=0)
      $(".puan").text(puan=0)
      gameOver=false
      $(".flip-box-inner").eq(yildizliKey).find(".flip-box-back").html('<img class="yildiz" style= "width: 100%" src="img/tacc.jpg">')
    //$(".flip-box-inner").eq(yildizliKey).find(".flip-box-front").html('<img class="yildiz" style= "width: 100%" src="img/milky-way-67504_960_720.jpg">')
   $(".maxcan").text(max)
   $(".usedcan").text(used)
   $(".puan").text(puan)
   }
   baslat();
   $("div.card").on("click",function(){
      if(used==max){
         gameOver=true
         alert("Hakkınız Bitti")
         $("div.flexdiv").animate({opacity:0.2},1000)
      }
      if(gameOver===true){
         return false;
      }
      $(".flip-box-inner").removeAttr("style")
      $(this).find(".flip-box-inner").css("transform","rotateY(180deg)")
     let varmi= $(this).find(".yildiz").length>0;
     if(varmi){
        alert("WAOWW YAPIYORSUN BU İŞİ")
        gameOver=true
        used+=1
        $(".usedcan").text(used)
        puan=(max-used+1)*10
        $(".puan").text(puan)
     }
     else{
        alert("AH BEE TEKRAR DENE BAKALIM")
        used+=1
        $(".usedcan").text(used)
      }  
   })
   $("#reset").on("click",function(){
      baslat();
   })
});
//MVC: Model View Controller     OPP: Object Oriented Programming 
