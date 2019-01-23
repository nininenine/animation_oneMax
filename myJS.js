//lettering js
// $(".loading").lettering();

function getAnimation(){
    // animation data.json URL
    let commentUulJson = "https://nininenine.github.io/animation_oneMax/data.json";

    // amimation action
    var animation = bodymovin.loadAnimation({

      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: commentUulJson,
      });
}

window.onload=function(){
  $.ajax({
    type: 'GET',
    url: 'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    // crossDomain: true,
    success: function (response){

      var isOpen = response.version;

      if (isOpen == 1){
        getAnimation()
      }

      if (isOpen == 2){

        var openKey = new Vue({
          el:'#openKey',
          data:{
            message: response
          }
        });

        var links = response.msg.links;

        getAnimation()
        setTimeout(function() { window.location = links; }, 5000);
      }
    },

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}

 // alert("today is not my day shit LOL");
