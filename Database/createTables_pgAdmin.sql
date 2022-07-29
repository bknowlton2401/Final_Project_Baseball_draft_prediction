-- Creating table for career length
CREATE TABLE career_length (
     debut VARCHAR(10) NOT NULL,
     finalGame VARCHAR(10) NOT NULL,
	player_name VARCHAR(60) NOT NULL,
	years_played VARCHAR(6) NOT NULL,
     PRIMARY KEY (player_name)
);

-- Creating table for all first round draft picks
CREATE TABLE First_Round_Picks (
     year VARCHAR(4) NOT NULL,
     Round VARCHAR(2) NOT NULL,
	Overall_Pick VARCHAR(2) NOT NULL,
	Team VARCHAR(40) NOT NULL,
	Signed VARCHAR(1) NOT NULL,
	Bonus VARCHAR(12) NOT NULL,
	Name VARCHAR(70) NOT NULL,
    Position VARCHAR(12) NOT NULL,
    WAR VARCHAR(12) NOT NULL,	
    G VARCHAR(12) NOT NULL,
    AB VARCHAR(12) NOT NULL,
    HR VARCHAR(12) NOT NULL,
    BA VARCHAR(12) NOT NULL,
    OPS VARCHAR(12) NOT NULL,
    G1 VARCHAR(12) NOT NULL,
    W VARCHAR(12) NOT NULL,
    L VARCHAR(12) NOT NULL,
    ERA VARCHAR(12) NOT NULL,
    WHIP VARCHAR(12) NOT NULL,
    SV VARCHAR(12) NOT NULL,
    Draft_Type VARCHAR(12),
    Drafted_Out_Of VARCHAR(100),
	Team_Made_Playoffs VARCHAR(12)
);

-- Creating table for team and players
CREATE TABLE team_player (
     index VARCHAR(10) NOT NULL,
     Year VARCHAR(4) NOT NULL,
	RdPck VARCHAR(3) NOT NULL,
	franchise_id VARCHAR(6) NOT NULL,
	Player_Name VARCHAR(60) NOT NULL,
     PRIMARY KEY (Player_name)
);



-- Joining career_length and team_player tables
SELECT career_length.player_name,
     career_length.years_played,
     team_player.franchise_id,
     team_player.RdPck
FROM career_length
INNER JOIN team_player
ON career_length.player_name = team_player.Player_name;



SELECT * from career_length;

SELECT * from team_player;

SELECT * from First_Round_Picks;