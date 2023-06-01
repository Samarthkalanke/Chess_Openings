<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website | Chess.com Style</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <!-- Chess.com logo or your website's logo -->
        <h1 class="logo">Your Website</h1>
        <nav class="navigation">
            <!-- Navigation links -->
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Play</a></li>
                <li><a href="#">Puzzles</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">More</a></li>
            </ul>
        </nav>
    </header>
    <main class="main-content">
        <!-- Your main content goes here -->
        <section class="featured-section">
            <h2 class="section-heading">Featured Content</h2>
            <!-- Featured content section -->
            <div class="featured-content">
                <!-- Content items -->
                <div class="content-item">
                    <!-- Content item details -->
                    <h3 class="content-title">Featured Article</h3>
                    <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" class="content-link">Read More</a>
                </div>
                <div class="content-item">
                    <!-- Content item details -->
                    <h3 class="content-title">Upcoming Event</h3>
                    <p class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" class="content-link">Learn More</a>
                </div>
            </div>
        </section>
        <section class="sidebar">
            <!-- Sidebar content -->
            <h2 class="section-heading">Sidebar</h2>
            <div class="sidebar-content">
                <!-- Sidebar items -->
                <div class="sidebar-item">
                    <!-- Sidebar item details -->
                    <h3 class="sidebar-title">Recent News</h3>
                    <ul class="sidebar-list">
                        <li><a href="#">News Item 1</a></li>
                        <li><a href="#">News Item 2</a></li>
                        <li><a href="#">News Item 3</a></li>
                    </ul>
                </div>
                <div class="sidebar-item">
                    <!-- Sidebar item details -->
                    <h3 class="sidebar-title">Tournaments</h3>
                    <ul class="sidebar-list">
                        <li><a href="#">Tournament 1</a></li>
                        <li><a href="#">Tournament 2</a></li>
                        <li><a href="#">Tournament 3</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <!-- Footer content -->
        <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
</body>
</html>


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
      <input type="radio" name="q1" value="40"> Aggressive and attacking <br>
      <input type="radio" name="q1" value="30"> Solid and Positional <br>
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
      
      document.getElementById('score').innerHTML = "Total Score: " + score + " points";
    }
  </script>
</body>
</html>