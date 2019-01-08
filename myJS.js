//lettering js
// $(".loading").lettering();

function getAnimation(){
    // animation data.json URL
    let commentUulJson = "https://jimmy-hung.github.io/myWebLottie/data.json";

    // amimation action
    var animation = bodymovin.loadAnimation({

      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: commentUulJson,
      
      });
}

function toChangedElement(response){

    document.getElementById("tomorrow").innerHTML = response.version;

}

window.onload=function(){
  $.ajax({ 
    type: 'GET', 
    url:'https://app-versions.herokuapp.com/index/index/4c59282b-eb9b-4b74-86c7-0fd2d338667b',
    dataType: 'json',
    // crossDomain: true,

    

    success: function (response){

      var isOpen = response.version;

      if (isOpen == 1){
        getAnimation()

        toChangedElement(response)
      }

      if (isOpen == 2){

        toChangedElement(response)
        var newUrl = response.msg.new_url;

        getAnimation()

        console.log(response);
        console.log(response.msg.is_active);
        console.log(isOpen);
        console.log(newUrl);
        
        setTimeout(function() { window.location = newUrl; }, 5000);
      }
    },

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}

 // alert("today is not my day shit LOL");
