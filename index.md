
<!--
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Quiz</title>
  <style>
    .question {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <form method="POST">
  <h1>Quiz</h1>
  
  <div class="question">
    <h3>Question 1:</h3>
    <p>How would you describe your playstyle?</p>
    <form>
      <input type="radio" name="q1" value="30"> Aggressive and attacking <br>
      <input type="radio" name="q1" value="40"> Solid and Positional <br>
      <input type="radio" name="q1" value="20"> Flexible and Adaptable  <br>
      <input type="radio" name="q1" value="10"> Tactical and Dynamic <br>
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
    <form>
      <input type="radio" name="q4" value="40"> Isolated pawn structure <br>
      <input type="radio" name="q4" value="30"> Pawn chains <br>
      <input type="radio" name="q4" value="20"> Pawn majorities <br>
      <input type="radio" name="q4" value="10"> Pawn islands <br>
    </form>

  </div>

  <div class="question">
    <h3>Question 5:</h3>
    <p>Do you have a preferred piece or setup that you like to play in the early stages of the game?</p>
    <form>
      <input type="radio" name="q5" value="40"> I like to focus on a particular piece or setup and build my strategy around it.  <br>
      <input type="radio" name="q5" value="30"> I'm comfortable with different setups and don't have a specific preference. <br>
    </form>
  </div>

  <button name = "haha" id = 2> RandomButton </button>
  
  <h3 id="score"></h3>
   <button onclick= calculateScore()>Submit</button>
  
  </form>

  <script>
    var score = 0;
    function calculateScore() {
      alert("Entering Calculate Score q1") ;
      var q1Answer = document.querySelector('input[name="q1"]:checked');
      if (q1Answer !== null) {
        score += parseInt(q1Answer.value);
      }
      alert("Entering Calculate Score q2") ;
      var q2Answer = document.querySelector('input[name="q2"]:checked');
      if (q2Answer !== null) {
        score += parseInt(q2Answer.value);
      }
      alert("Entering Calculate Score q3") ;
      var q3Answer = document.querySelector('input[name="q3"]:checked');
      if (q3Answer !== null) {
        score += parseInt(q3Answer.value);
      }
      alert("Entering Calculate Score q4") ;
      var q4Answer = document.querySelector('input[name="q4"]:checked');
      if (q4Answer !== null) {
        score += parseInt(q4Answer.value);
      }
      alert("Entering Calculate Score q5") ;
      var q5Answer = document.querySelector('input[name="q5"]:checked');
      if (q5Answer !== null) {
        score += parseInt(q5Answer.value);
      }
      alert("Entering Calculate Score end") ;
    }
  </script>
</body>
</html>

  <h1>If-Else Statement Example</h1>

  <button id="button1" style="display: inline;">Button 1</button>
  <button id="button2" style="display: inline;">Button 2</button>
  <button id="button3" style="display: inline;">Button 3</button>
  <button id="button4" style="display: inline;">Button 4</button>
  <button id="button5" style="display: inline;">Button 5</button>

  <button onclick="checkScore()">Check Score</button>
</body>
</html>
-->

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/Chess_Openings/style.css">
  <title>Quiz</title>
  <style>
    .question {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <form>
  <h1>Quiz</h1>
  
  <div class="question">
    <h3>Question 1:</h3>
    <p>How would you describe your playstyle?</p>
    <input type="radio" name="q1" value="30"> Aggressive and attacking <br>
    <input type="radio" name="q1" value="40"> Solid and Positional <br>
    <input type="radio" name="q1" value="20"> Flexible and Adaptable  <br>
    <input type="radio" name="q1" value="10"> Tactical and Dynamic <br>
  </div>
  
  <div class="question">
    <h3>Question 2:</h3>
    <p>Which piece do you enjoy developing early in the game?</p>
    <input type="radio" name="q2" value="40"> Knight <br>
    <input type="radio" name="q2" value="30"> Bishop <br>
    <input type="radio" name="q2" value="20"> Pawn that isn't E or D pawn two squares <br>
    <input type="radio" name="q2" value="10"> Pawn that is E or D pawn two squares <br>
  </div>
  
  <div class="question">
    <h3>Question 3:</h3>
    <p>DO you prefer open or closed positions</p>
    <input type="radio" name="q3" value="40"> I like open positions with more tactical opportunities.<br>
    <input type="radio" name="q3" value="30"> I prefer closed positions with strategic maneuvering.<br>
    <input type="radio" name="q3" value="20"> I enjoy a mix of both.<br>
  </div>

  <div class="question">
    <h3>Question 4:</h3>
    <input type="radio" name="q4" value="40"> Isolated pawn structure <br>
    <input type="radio" name="q4" value="30"> Pawn chains <br>
    <input type="radio" name="q4" value="20"> Pawn majorities <br>
    <input type="radio" name="q4" value="10"> Pawn islands <br>
  </div>

  <div class="question">
    <h3>Question 5:</h3>
    <p>Do you have a preferred piece or setup that you like to play in the early stages of the game?</p>
    <input type="radio" name="q5" value="40"> I like to focus on a particular piece or setup and build my strategy around it.  <br>
    <input type="radio" name="q5" value="30"> I'm comfortable with different setups and don't have a specific preference. <br>
  </div>

  <h3 id="score"></h3>
  <button onclick="calculateScore(event)">Submit</button>
  
  </form>

  <script>
    function calculateScore(event) {
      event.preventDefault(); // Prevent form submission
      
      var score = 0;
      var categorey = "";
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
      document.getElementById("score").textContent = "Score: " + score;
    }
  </script>
</body>
</html>


<!doctype html>
<html>
  <head>
    <style>
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      td{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 10px;
        color: #ffffff;
      }
      th{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 10px;
        color: #000000;
        background-color: #dddddd;
      }
      tr:nth-child(even) {
        background-color: #000000;
      }
      .button {/* formatting for buttons */
        background-color: #d1d3d1; /* Green */
        border: black;
        color: rgb(0, 0, 0);
        padding: 15px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
        transition-duration: 0.4s;
      }
      .button:hover {
        background-color: #4CAF50; /* Green */
        color: white;
      }
      h6 {
        font-size: 200%;
        color: white
      }
      input {/* input box formatting */
        width: 40%;
        height: 5%;
        border: 2px solid rgb(0, 0, 0);
        border-radius: 4px;
        background-color: #d1d3d1
      }
      header {
        position: relative;
      }
      body {
        position: relative;
      }
    label {
      color: #dddddd;
    }
    </style>
    <title>Developing Frontend and Backend</title>
      <link rel="stylesheet" type="text/css" href="index.css">
  </head>
  <body>
  <br>
  <br>
  <br>
  <br>
  <br>
  <form action="/action_page.php">
    <label for="name">Name:</label>
    <input type="text" id="Name"><br><br>
    <label for="Score">Score:</label>
    <input type="number" id="Score"><br><br>
  </form>
   <p><button class="button" onclick="postFilms()">Add your list</button></p>
  <br>
  <br>
  <label for="delname">Name of Name:</label>
  <input type="text" id="Delname"><br><br>
  <p><button class="button" onclick="deleteHelper()">Delete a entry</button></p>
  <br>
  <p><button class="button" onclick="deleteFilms('-')">Delete All the Films!</button></p>
  <br>
  <table id = "Chess Score">
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </table>
  </body>
  <script language = "JavaScript">
    var myFilms = [];
    const url = "http://127.0.0.1:8086";//getting url for API
