
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
      <input type="radio" name="q1" value="30"> Aggressive and attacking <br>
      <input type="radio" name="q1" value="40"> Solid and Positional <br>
      <input type="radio" name="q1" value="20"> Flexible and Adaptable  <br>
      <input type="radio" name="q1" value="10"> Tactical and Dynamic <br>
    </form>
  </div>
  
  <div class="question">
    <h3>Question 2:</h3>
    <p>Which piece do you enjoy developing early in the game?</p>
    <form>
      <input type="radio" name="q2" value="40"> Knight <br>
      <input type="radio" name="q2" value="30"> Bishop <br>
      <input type="radio" name="q2" value="20"> Pawn that isn't E or D pawn two squares <br>
      <input type="radio" name="q2" value="10"> Pawn that is E or D pawn two squares <br>
    </form>
  </div>
  
  <div class="question">
    <h3>Question 3:</h3>
    <p>DO you prefer open or closed positions</p>
    <form>
      <input type="radio" name="q3" value="40"> I like open positions with more tactical opportunities.<br>
      <input type="radio" name="q3" value="30"> I prefer closed positions with strategic maneuvering.<br>
      <input type="radio" name="q3" value="20"> I enjoy a mix of both.<br>
    </form>
  </div>

  <div class="question">
    <h3>Question 4:</h3>
    <p>Which of the following pawn structures appeals to you the most?</p>
    <form>
      <input type="radio" name="q2" value="40"> Isolated pawn structure <br>
      <input type="radio" name="q2" value="30"> Pawn chains <br>
      <input type="radio" name="q2" value="20"> Pawn majorities <br>
      <input type="radio" name="q2" value="10"> Pawn islands <br>
    </form>
  </div>

  <div class="question">
    <h3>Question 5:</h3>
    <p>Do you have a preferred piece or setup that you like to play in the early stages of the game?</p>
    <form>
      <input type="radio" name="q2" value="40"> I like to focus on a particular piece or setup and build my strategy around it.  <br>
      <input type="radio" name="q2" value="30"> I'm comfortable with different setups and don't have a specific preference. <br>
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
      
      var q4Answer = document.querySelector('input[name="q4"]:checked');
      if (q4Answer !== null) {
        score += parseInt(q4Answer.value);
      }
      
      var q5Answer = document.querySelector('input[name="q5"]:checked');
      if (q5Answer !== null) {
        score += parseInt(q5Answer.value);
      }
      
      document.getElementById('score').innerHTML = "Total Score: " + score + " points";
    }
  </script>
</body>
</html> 

<html>
<head>
  <title>If-Else Statement Example</title>
  <script>
    function checkScore() {
      // Get the score value from the input field
      var score = document.getElementById("score").value;
      // Get the button elements
      var button1 = document.getElementById("button1");
      button1.textContent = 'Ruy Lopez';
      const link = document.createElement('a');
      link.href = '/Chess_Openings/RuyLopez.html';
      link.appendChild(button);
      document.body.appendChild(link);
      //Second Button
      var button2 = document.getElementById("button2");
      button2.textContent = 'London';
      const link = document.createElement('a');
      link.href = '/Chess_Openings/London.html';
      link.appendChild(button);
      document.body.appendChild(link);
      //Second Button
      var button3 = document.getElementById("button3");
      button3.textContent = 'Kings Gambit';
      const link = document.createElement('a');
      link.href = '/Chess_Openings/KingsGambit.html';
      link.appendChild(button);
      document.body.appendChild(link);
      //Second Button
      var button4 = document.getElementById("button4");
      button4.textContent = 'Vienna';
      const link = document.createElement('a');
      link.href = '/Chess_Openings/Vienna.html';
      link.appendChild(button);
      document.body.appendChild(link);
      //Second Button
      var button5 = document.getElementById("button5");
      button5.textContent = 'Scotch';
      const link = document.createElement('a');
      link.href = '/Chess_Openings/Scotch.html';
      link.appendChild(button);
      document.body.appendChild(link);
      //Second Button
      // Reset the button styles
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      button5.style.display = "none";
      // Check the score range and show the corresponding button
      if (score >= 90) {
        button1.style.display = "block";
      } else if (score >= 80) {
        button2.style.display = "block";
      } else if (score >= 70) {
        button3.style.display = "block";
      } else if (score >= 60) {
        button4.style.display = "block";
      } else {
        button5.style.display = "block";
      }
    }
  </script>
</head>
<body>
  <h1>If-Else Statement Example</h1>

  <label for="score">Enter your score:</label>
  <input type="number" id="score">

  <button id="button1" style="display: none;">Button 1</button>
  <button id="button2" style="display: none;">Button 2</button>
  <button id="button3" style="display: none;">Button 3</button>
  <button id="button4" style="display: none;">Button 4</button>
  <button id="button5" style="display: none;">Button 5</button>

  <button onclick="checkScore()">Check Score</button>
</body>
</html>

