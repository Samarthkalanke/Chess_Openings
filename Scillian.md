## Scillian (Point Val)
If you got this point value on the test this is where you belong, the quiz showed that this is the opening that you should study for black. 
You are a very structual player that wants to get a better position and likes to read about openings alot. You like to play against higher than average elo players and like to study chess openings also this is my personal favorite so I officially love you and GothamChess is your daddy!! 

## Scilian Overview
> There are many lines for the scilian this is just the main line that people use or think of when they think of the scilian opening in chess. Other lines and information are in youtube videos below. Read the tutorials and watch the videos to learn the other lines. And mabye there will be a puzzles part where you can test this knowledge. 

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
            "wp1": "♙",
            "wp2": "♙",
            "wp3": "♙",
            "wp4": "♙",
            "wp5": "♙",
            "wp6": "♙",
            "wp7": "♙",
            "wp8": "♙",
            "wr1": "♖",
            "wr2": "♖",
            "wn1": "♘",
            "wn2": "♘",
            "wb1": "♗",
            "wb2": "♗",
            "wk1": "♔",
            "wq1": "♕",
            "bp1": "♟",
            "bp2": "♟",
            "bp3": "♟",
            "bp4": "♟",
            "bp5": "♟",
            "bp6": "♟",
            "bp7": "♟",
            "bp8": "♟",
            "br1": "♜",
            "br2": "♜",
            "bn1": "♞",
            "bn2": "♞",
            "bb1": "♝",
            "bb2": "♝",
            "bk1": "♚",
            "bq1": "♛"
        };
        // Array of moves for the Sicilian opening
        var sicilianMoves = [
            [5, 2, "wp7"],
            [5, 4, "wp7"],
            [6, 4, "bp7"],
            [3, 4, "bp2"],
            [6, 3, "bn2"],
            [2, 5, "wn1"],
            [7, 4, "bq1"],
            [4, 6, "bb2"],
            [6, 6, "bp6"],
            [1, 3, "wb1"],
            [7, 6, "bn1"],
            [5, 6, "wp5"],
            [5, 5, "wp5"],
            [2, 3, "wn2"],
            [6, 7, "bk1"]
        ];
        var currentMoveIndex = 0;
        var chessBoard = document.getElementById("chessBoard");
        // Initialize the chess board
        function initChessBoard() {
            var chessHTML = "<table>";
            for (var row = 1; row <= 8; row++) {
                chessHTML += "<tr>"
                for (var col = 1; col <= 8; col++) {
                    var squareClass = (row + col) % 2 === 0 ? "white-square" : "black-square";
                    var piece = getPieceIcon(row, col);
                    chessHTML += '<td class="chess-square ${squareClass}">${piece}</td>';
                }
            }
            chessHTML +='</table>'; 
            chessBoard.innerHTML = chessHTML;
        }
        // Get the piece icon for a given position
        function getPieceIcon(row, col) {
            var piece = "   ";
            for (var i = 0; i < sicilianMoves.length; i++) {
                var move = sicilianMoves[i];
                if (move[0] === row && move[1] === col) {
                    piece = move[2];
                    break;
                }
            }
            if (pieces.hasOwnProperty(piece)) {
                return pieces[piece];
            }
            return "";
        }
        // Go to the previous move
        function prevMove() {
            if (currentMoveIndex > 0) {
                currentMoveIndex--;
                initChessBoard();
            }
        }
        // Go to the next move
        function nextMove() {
            if (currentMoveIndex < sicilianMoves.length - 1) {
                currentMoveIndex++;
                initChessBoard();
            }
        }
        // Initialize the chess board on page load
        initChessBoard();
    </script>
</body>
</html>

