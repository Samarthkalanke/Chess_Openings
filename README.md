## Monkey Curry's Chess Openings learnings

# Presented by Samarth Kalanke 

# Run Instructions and Deployed Projects 

[Here](https://samarthkalanke.github.io/Chess_Openings/) is the deployed website for students to view and interact. [Here](https://chessopeningbackendkun.duckdns.org) is the deployed backend server that contains the database used by the frontend website.

To run the website online, simply go to the links replied. 

Running repositories locally is different. To run this repository locally with Jekyll, [test your site locally with](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll). To run [this](https://github.com/Samarthkalanke/ChessOpeningsBackendkun) backend server, simply run the main.py file to test your backend locally with Flask.


# The Project and how it works 

This project is meant to find what is the best two chess openings for the user and teaches them how to study it. The project starts at the index.md where the quiz at the top determines the score of the user. The score is a variable that is stored in the quiz that is added on based on which answer you select for each question. Each answer per question has its own point value. The higher the score value the harder the opening you are sent to, for example if you get anywhere between 200-170 you are advised to click the +170 button at the buttonw which will take you to learn the Ruy Lopez which is one of the hardest openings for white to learn. There are 5 total buttons taking you to the different pages of the white openings corresponding to the score ranges that are dennoted on the button itself. A lower value will prompt you into learning a easier opening. Inside this page there is a little overview of the opening and down there is a chess board where if you click the > button it shows one of the many positions that can transpose from the opening that still stays in the opening logic. This gives the user a understanding of the opening and below are videos and a website to help further explain the positon and the goal of the position that you are trying to get from that position. The transparent pieces are always the white ones and the filled out ones are the black pieces. On the bottome it takes you to the respective opening for black that is on the same difficulty level to learn. It is a simular page but the chess board will yeild a different position when clicked. Also on the index.md there is a chart where you can enter your score value and your name and it stores it on the deployed backend just so that your score will always be there. It will also rank it and compare it to other users who took the quiz so you can know where they are at. You are also able to delete your take if you want to redo the quiz with a delete function being present as well. 


# Organization 

I tried my best to organize it as much as possible by myself and there was a lot of things that I had to learn along the way. I did want to make one more functionality that I have got started on working but I didn't end up doing for the sake of this submission but I will end up continuing in the future because I truely enjoyed working on this. It was going to be a mini quiz where possible positions in each opening page gets randomized and you have to play the right move to get the question right. It gives you a random position that is in the opening logic and next you have to play the next best move. I have spent around 40 hours on this although most of it came from using resoureces around me and using the tools that are presented to me because these functionalities were a lot harder to make than I expected. 




