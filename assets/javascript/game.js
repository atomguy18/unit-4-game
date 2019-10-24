var wins = 0;
    var losses = 0;

    $(document).ready(function () {

      var random = Math.floor(Math.random() * 100) + 1;
      $(".randomNum").text(random);
      var savedNum1 = Math.floor(Math.random() * 12) + 1;
      var savedNum2 = Math.floor(Math.random() * 12) + 1;
      var savedNum3 = Math.floor(Math.random() * 12) + 1;
      var savedNum4 = Math.floor(Math.random() * 12) + 1;
      var score = 0

      function reset() {
        random = Math.floor(Math.random() * (100 - 19 + 1) + 19);
        $(".randomNum").text(random);
        savedNum1 = Math.floor(Math.random() * 12) + 1;
        savedNum2 = Math.floor(Math.random() * 12) + 1;
        savedNum3 = Math.floor(Math.random() * 12) + 1;
        savedNum4 = Math.floor(Math.random() * 12) + 1;
        score = 0;
        $(".score").text(score);
      };

      function add(num1, num2) {
        return (num1 + num2);
      };

      $("#crystal-1").click(function () {
        score = add(savedNum1, score)
        $(".score").text(score);
      });
      $("#crystal-2").click(function () {
        score = add(savedNum2, score)
        $(".score").text(score);
      });
      $("#crystal-3").click(function () {
        score = add(savedNum3, score)
        $(".score").text(score);
      });
      $("#crystal-4").click(function () {
        score = add(savedNum4, score)
        $(".score").text(score);
      });
      
      $("button").click(function () {
        console.log('score', score)
        if (score > random) {
          losses = add(1, losses)
          $(".losses").text(losses);
          alert("YOU LOSE!");
          reset();
        } else if (score == random) {
          wins = add(1, wins)
          alert("YOu win!")
          $(".wins").text(wins);
          reset();
        }
      });
      reset()
    });