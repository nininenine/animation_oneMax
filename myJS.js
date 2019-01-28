
var firstUrl = 'https://uniquetoone.com/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23';//ip-azure
var secondUrl = 'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae';//heroku

function getAnimation(){
    // animation data.json URL
    let commentUulJson = "https://nininenine.github.io/animation_oneMax/data.json";

    // amimation action
    var animation = bodymovin.loadAnimation({

      container: document.getElementById('openKey'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: commentUulJson,

      });
}

function getAjax2(){
  $.ajax({
    type: 'GET',
    url: secondUrl,//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    // crossDomain: true,
    success: function (response){

      if (response) {
        
      
      

{/* <div id="version" style="display: none">{{version}}
</div>
<div id="isOpen" style="display: none">{{isOpen}}
</div>
<div id="links" style="display: none">{{links}}
</div>
<div id="is_active" style="display: none">{{is_active}}
</div>
<div id="new_url" style="display: none">{{new_url}}
</div>
<div id="cover" style="display: none">{{cover}}
</div>
<div id="is_show_cover" style="display: none">{{is_show_cover}}
</div>
<div id="animation_file" style="display: none">{{animation_file}} */}
      if (response.version == 1) {
        getAnimation();
        return false;
      }
      new Vue({
          el:'#message',
          data () {
            return{
              messageData:[
                {
                  id : 'version',
                  data : response.version
                },
                {
                  id : 'isOpen',
                  data : response.msg.isOpen
                },
                {
                  id : 'links',
                  data : response.msg.links
                },
                {
                  id : 'is_active',
                  data : response.is_active
                },
                {
                  id : 'new_url',
                  data : response.is_active
                },
                {
                  id : 'cover',
                  data : response.is_active
                },
                {
                  id : 'is_show_cover',
                  data : response.is_active
                },
                {
                  id : 'animation_file',
                  data : response.is_active
                },
              ]
            }
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
function getAjax1(){
  $.ajax({
    type: 'GET',
    url: firstUrl,//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//'https://app-versions.herokuapp.com/index/index/f8d1d0e0-b1d7-4892-b960-62f907cdeaae',//http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    // crossDomain: true,
    success: function (response){
      var isOpen = response.version;
      if (isOpen == 1){
        getAnimation()
        getAjax2();
      }else if (isOpen == 2){
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

window.onload=function(){
  getAjax1();
}
