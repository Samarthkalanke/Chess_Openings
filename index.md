## Quiz

<!DOCTYPE html>
<html>
<head>
  <title>Quiz</title>
  <style>
    .question {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Quiz</h1>
  
  <div class="question">
    <h3>Question 1:</h3>
    <p>How would you describe your playstyle?</p>
    <form>
      <input type="radio" name="q1" value="0"> Madrid (40 points)<br>
      <input type="radio" name="q1" value="0"> London (30 points)<br>
      <input type="radio" name="q1" value="0"> Rome (20 points)<br>
      <input type="radio" name="q1" value="3"> Paris (10 points)<br>
    </form>
  </div>
  
  <div class="question">
    <h3>Question 2:</h3>
    <p>Which planet is known as the Red Planet?</p>
    <form>
      <input type="radio" name="q2" value="0"> Venus (40 points)<br>
      <input type="radio" name="q2" value="0"> Jupiter (30 points)<br>
      <input type="radio" name="q2" value="0"> Saturn (20 points)<br>
      <input type="radio" name="q2" value="5"> Mars (10 points)<br>
    </form>
  </div>
  
  <div class="question">
    <h3>Question 3:</h3>
    <p>Who painted the Mona Lisa?</p>
    <form>
      <input type="radio" name="q3" value="0"> Vincent van Gogh (40 points)<br>
      <input type="radio" name="q3" value="0"> Pablo Picasso (20 points)<br>
      <input type="radio" name="q3" value="0"> Claude Monet (30 points)<br>
      <input type="radio" name="q3" value="2"> Leonardo da Vinci (10 points)<br>
    </form>
  </div>
  
  <button onclick="calculateScore()">Submit</button>
  
  <h3 id="score"></h3>
  
  <script>
    function calculateScore() {
      var score = 0;
      
      var q1Answer = document.querySelector('input[name="q1"]:checked');
      if (q1Answer !== null) {
        score += parseInt(q1Answer.value);
      }
      
      var q2Answer = document.querySelector('input[name="q2"]:checked');
      if (q2Answer !== null) {
        score += parseInt(q2Answer.value);
      }
      
      var q3Answer = document.querySelector('input[name="q3"]:checked');
      if (q3Answer !== null) {
        score += parseInt(q3Answer.value);
      }
      
      document.getElementById('score').innerHTML = "Total Score: " + score + " points";
    }
  </script>
</body>
</html>