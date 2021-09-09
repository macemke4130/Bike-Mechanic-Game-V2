# Database Structure
    <!-- List of every question in game -->
    - parts Table
        - id
        - win <!-- Correct Answer -->
        - lose1
        - lose2
        - lose3
    <!-- List of random wrong answers -->
    - wrong Table
        - id
        - lose
    - photos Table
        - id
        - part_id <!-- References parts Table -->
        - filename
    <!-- High Scores of players -->
    - highscores
        - id
        - name
        - totalscore
        - 100club - Boolean <!-- Every question correct -->
        - 100clubnum - Int <!-- How many answers there were at time of win -->
        - scoredate