$(appReady);

function appReady(){
  //click fox, get fox attack data, put into var.
  var foxArr = []
  $(".fox").click(function() {

    $.get('https://cors-anywhere.herokuapp.com/http://www.smashlounge.com/api/attack/char/6')
      .then(function(response){
        console.log(response);
          foxArr =response.attacks.jab["0"];
         console.log(foxArr);
    })
  })
  $(".jab1").click(function(){
    $(".totalframes").empty().append("Total Frames: " + foxArr.total_frames+ "  Active Frames: " + foxArr.hit_start + "-" +foxArr.hit_end);
    $(".card-title").empty().append("Frame Data for Jab 1")
    // $(".activeframes").append("<p>Active Frames: " + foxArr.hit_start + "-" +foxArr.hit_end+ "<p>" )
    }
  )
}

// Gets character's attack info based on id  6= "fox"
  // $.get('https://cors-anywhere.herokuapp.com/http://www.smashlounge.com/api/attack/char/6')

// Identifies the attack class aerial
  // .then(function(response){
  //   console.log(response)
  //   console.log(response.attacks.arial);
  //    var toString = '';
  //    console.log(toString);
  //   // for (var property in response.attacks.arial) {
  //   //   toString += property + ': ' + response.attacks.arial[property]+'; ';
  //   // }
  //   $('.what').append(toString)
  // })


    // var toString = JSON.stringify(response.attacks.aerial['0'], null, 4)
    //     $('.what').append(toString);
    // });

    // console.log(response);
    // $('.what').append(toString)
    // console.log(response[1].gifs["0"].url);
    // $('.what').append(response["0"].gifs["0"]);



// $.getJSON('https://cors-anywhere.herokuapp.com/https://smashboards.com/threads/complete-fox-hitboxes-and-frame-data.285177/')
//   .then(function(response) {
//     console.log(response#post-11061109 > div > div.messageInfo.primaryContent > div.messageContent > article > blockquote > img:nth-child(11));
//   });
