## Scillian (Point Val)
If you got this point value on the test this is where you belong, the quiz showed that this is the opening that you should study for black. 
You are a very structual player that wants to get a better position and likes to read about openings alot. You like to play against higher than average elo players and like to study chess openings also this is my personal favorite so I officially love you and GothamChess is your daddy!! 

## Scilian Overview
> There are many lines for the scilian this is just the main line that people use or think of when they think of the scilian opening in chess. Other lines and information are in youtube videos below. Read the tutorials and watch the videos to learn the other lines. And mabye there will be a puzzles part where you can test this knowledge. 

## Scilian Main line

<html>
<head>
    <title>Sicilian Opening Chess</title>
    <style>
        /* Define CSS styles for the chess board */
        .chess-board {
            display: flex;
            width: 400px;
            height: 400px;
        }
        .chess-square {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            color: black;
        }
        .white-square {
            background-color: #f0d9b5;
        }
        .black-square {
            background-color: #b58863;
            color: white;
        }
        /* Styles for arrow buttons */
        .arrow-buttons {
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }
        .arrow-button {
            padding: 5px 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div id="chessBoard"></div>
    <div class="arrow-buttons">
        <button class="arrow-button" onclick="prevMove()">&lt;</button>
        <button class="arrow-button" onclick="nextMove()">&gt;</button>
    </div>
    <script>
        // Define the chess pieces icons
        var pieces = {
            "wp": "♙",
            "wr": "♖",
            "wn": "♘",
            "wb": "♗",
            "wk": "♔",
            "wq": "♕",
            "bp": "♟",
            "br": "♜",
            "bn": "♞",
            "bb": "♝",
            "bk": "♚",
            "bq": "♛"
        };
        // Array of moves for the Sicilian opening
        var sicilianMoves = [
            [1, 7, "wp"],
            [3, 7, "wp"],
            [6, 7, "bp"],
            [1, 4, "bp"],
            [2, 6, "bn"],
            [0, 1, "wn"],
            [6, 4, "bq"],
            [5, 6, "bb"],
            [6, 6, "bp"],
            [0, 2, "wb"],
            [7, 6, "bn"],
            [4, 6, "wp"],
            [4, 5, "wp"],
            [0, 5, "wn"],
            [7, 0, "bk"]
        ];
        var currentMoveIndex = 0;
        var chessBoard = document.getElementById("chessBoard");
        var board = createChessBoard();
        // Initialize the chess board
        function initChessBoard() {
            var chessHTML = "";
            for (var row = 0; row < 8; row++) {
                for (var col = 0; col < 8; col++) {
                    var squareClass = (row + col) % 2 === 0 ? "white-square" : "black-square";
                    var piece = getPieceIcon(row, col);
                    chessHTML += `<div class="chess-square ${squareClass}">${piece}</div>`;
                }
            }
            chessBoard.innerHTML = chessHTML;
        }
        // Create an 8x8 chess board
        function createChessBoard() {
            var board = [];
            for (var row = 0; row < 8; row++) {
                board[row] = [];
                for (var col = 0; col < 8; col++) {
                    board[row][col] = "";
                }
            }
            return board;
        }
        // Get the piece icon for a given position
        function getPieceIcon(row, col) {
            var piece = board[row][col];
            if (pieces.hasOwnProperty(piece)) {
                return pieces[piece];
            }
            return "";
        }
        // Go to the previous move
        function prevMove() {
            if (currentMoveIndex > 0) {
                currentMoveIndex--;
                updateBoard();
            }
        }
        // Go to the next move
        function nextMove() {
            if (currentMoveIndex < sicilianMoves.length - 1) {
                currentMoveIndex++;
                updateBoard();
            }
        }
        // Update the chess board based on the current move
        function updateBoard() {
            resetBoard();
            for (var i = 0; i <= currentMoveIndex; i++) {
                var move = sicilianMoves[i];
                var row = move[0];
                var col = move[1];
                var piece = move[2];
                board[row][col] = piece;
            }
            initChessBoard();
        }
        // Reset the chess board
        function resetBoard() {
            board = createChessBoard();
        }
        // Initialize the chess board on page load
        initChessBoard();
    </script>
</body>
</html>


## Scillian Tutorial 
> # Youtube Vids(GothamChess and Others)
    > Gotham Chess 10 min overview https://www.youtube.com/watch?v=qM4e7g2RukI
    > Gotham Chess Beth Harmon stuff https://www.youtube.com/watch?v=65VWIFlc4C4
    > Simplify Chess openings https://simplifychess.com/sicilian-defense/