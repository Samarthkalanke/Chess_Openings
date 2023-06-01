## Sc andi (Change) (Point Val)
If you got this point value on the test this is where you belong, the quiz showed that this is the opening that you should study for black. 
You are a very structual player that wants to get a better position and likes to read about openings alot. You like to play against higher than average elo players and like to study chess openings also this is my personal favorite so I officially love you and GothamChess is your daddy!! 

## Scandi Overview
> There are many lines for the scilian this is just the main line that people use or think of when they think of the scilian opening in chess. Other lines and information are in youtube videos below. Read the tutorials and watch the videos to learn the other lines. And mabye there will be a puzzles part where you can test this knowledge. 

## Scandi Main line

<!DOCTYPE html>
<html>
<head>
    <title>Sicilian Opening Chess</title>
    <style>
        /* Define CSS styles for the chess board */
        .black {
            color: black;
        }
        .white {
            color: white;
        }
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
        }
        .white-square {
            background-color: #3CB371;
        }
        .black-square {
            background-color: #b58863;
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
        var whitepieces = {
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
            "wq1": "♕"
        };
        var blackpieces = {
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
        // Array of initial positions for the chess pieces
        var initialPositions = [
            [1, 1, "br1"], [1, 2, "bn1"], [1, 3, "bb1"], [1, 4, "bq1"], [1, 5, "bk1"], [1, 6, "bb2"], [1, 7, "bn2"], [1, 8, "br2"],
            [2, 1, "bp1"], [2, 2, "bp2"], [2, 3, "bp3"], [2, 4, "bp4"], [2, 5, "bp5"], [2, 6, "bp6"], [2, 7, "bp7"], [2, 8, "bp8"],
            [7, 1, "wp1"], [7, 2, "wp2"], [7, 3, "wp3"], [7, 4, "wp4"], [7, 5, "wp5"], [7, 6, "wp6"], [7, 7, "wp7"], [7, 8, "wp8"],
            [8, 1, "wr1"], [8, 2, "wn1"], [8, 3, "wb1"], [8, 4, "wq1"], [8, 5, "wk1"], [8, 6, "wb2"], [8, 7, "wn2"], [8, 8, "wr2"]
        ];
        var currentMoveIndex = 0;
        var chessBoard = document.getElementById("chessBoard");
        // Initialize the chess board
        function initChessBoard() {
            var chessHTML = `<table>`;
            for (var row = 1; row <= 8; row++) {
                chessHTML += `<tr>`;
                for (var col = 1; col <= 8; col++) {
                    var squareClass = (row + col) % 2 === 0 ? "white-square" : "black-square";
                    //if (row === 1) squareClass = "black-square"; // Make the bottom side black
                    var piece = getPieceIcon(row, col);
                    chessHTML += `<td><div class="chess-square ${squareClass}" id="r${row}c${col}">${piece}</div></td>`;
                }
                chessHTML += `</tr>`;
            }
            chessHTML += `</table>`;
            chessBoard.innerHTML = chessHTML;
        }
        // Array of scillian positions for the chess pieces
        var scillianPositions = [
            [1, 4, "br1"], [5, 3, "bn1"], [2, 4, "bq1"], [1, 3, "bk1"], [1, 6, "bb2"], [1, 7, "bn2"], [1, 8, "br2"],
            [2, 1, "bp1"], [2, 2, "bp2"], [2, 3, "bp3"], [2, 5, "bp5"], [2, 6, "bp6"], [2, 7, "bp7"], [2, 8, "bp8"],
            [5, 1, "wp1"], [7, 2, "wp2"], [7, 3, "wp3"], [7, 4, "wp4"], [7, 6, "wp6"], [7, 7, "wp7"], [6, 8, "wp8"],
            [8, 1, "wr1"], [6, 3, "wn1"], [8, 3, "wb1"], [8, 4, "wq1"], [8, 7, "wk1"], [6, 6, "wb2"], [8, 6, "wr2"]
        ];
        //var currentMoveIndex = 0;
        chessBoard = document.getElementById("chessBoard");
        // Initialize the chess board
        function scillianChessBoard() {
            var chessHTML = `<table>`;
            for (var row = 1; row <= 8; row++) {
                chessHTML += `<tr>`;
                for (var col = 1; col <= 8; col++) {
                    var squareClass = (row + col) % 2 === 0 ? "white-square" : "black-square";
                    //if (row === 1) squareClass = "black-square"; // Make the bottom side black
                    var piece = getScillianPieceIcon(row, col);
                    chessHTML += `<td><div class="chess-square ${squareClass}" id="r${row}c${col}">${piece}</div></td>`;
                }
                chessHTML += `</tr>`;
            }
            chessHTML += `</table>`;
            chessBoard.innerHTML = chessHTML;
        }
        // Get the piece icon for a given position
        function getScillianPieceIcon(row, col) {
            for (var i = 0; i < scillianPositions.length; i++) {
                var position = scillianPositions[i];
                if (position[0] === row && position[1] === col) {
                    var piece = position[2];
                    if (blackpieces.hasOwnProperty(piece)) {
                        return blackpieces[piece];
                    }
                    if (whitepieces.hasOwnProperty(piece)) {
                        return whitepieces[piece];
                    }
                    break;
                }
            }
            return "";
        }
         // Get the piece icon for a given position
        function getPieceIcon(row, col) {
            for (var i = 0; i < initialPositions.length; i++) {
                var position = initialPositions[i];
                if (position[0] === row && position[1] === col) {
                    var piece = position[2];
                    if (blackpieces.hasOwnProperty(piece)) {
                        return blackpieces[piece];
                    }
                    if (whitepieces.hasOwnProperty(piece)) {
                        return whitepieces[piece];
                    }
                    break;
                }
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
           // if (currentMoveIndex < initialPositions.length - 1) {
           //     currentMoveIndex++;
                scillianChessBoard();
               // initChessBoard();
           // }
        }
        // Initialize the chess board on page load
        initChessBoard();
    </script>
</body>
</html>



## Scandi Tutorial 
> # Youtube Vids(GothamChess and Others)
    > Gotham Chess 10 min overview https://www.youtube.com/watch?v=qM4e7g2RukI
    > Gotham Chess Beth Harmon stuff https://www.youtube.com/watch?v=65VWIFlc4C4
    > Simplify Chess openings https://simplifychess.com/sicilian-defense/


