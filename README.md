# Final_Project_Baseball_draft_prediction

## Purpose
The purpose of this analysis is to see if there is a correlation between longevity and the draft round pick of a major league baseball player.


## Data Source
The data source used is Baseball Reference [link](https://www.baseball-reference.com/).  This source was used because it gives statistics on every major league baseball player since the inception of the MLB in 1876.  The site has statistics on first round draft picks dating back to 1965, that includes the player, the selecting team, position and signing bonus [link](https://www.baseball-reference.com/draft/).  The site also shows each rookie of the year dating back to 1947.  This includes their team, league, and batting statistics [link](https://www.baseball-reference.com/awards/roy.shtml). 


## Questions
### Correlations
 - Is there a correlation between first round draft picks and the team making it to playoffs?
 - Is there a correlation between second round draft picks and longevity in the MLB?
 - Is there a correlation between Rookie of the Year and the team making it to the playoffs?
 
 ### Stats to include
 - Initial signing salary/bonus
 - Average annual salary over the length of players career
 - What awards did the players accummulate?
 - How many games did they play?
 - If the average MLB players career is 4-6 years, how doe 1st and 2nd round players compare?
 - What is their overall batting average?
 - What is their overall ERA (for pitchers only)?
 - What is their length per team (as applicable)?
 
 ### Database
 A data base was created using SQL and pgAdmin. In order to create the database, an ERD was first created to visualize the data tables and how our data is connected. 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/QuickDBD-export.png)
 
 Using pandas, the mock data was cleaned and separate dataframes were created that matched the tables in the ERD. The dataframes were stored as tables in SQL.
 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/Resources/Screen%20Shot%202022-07-02%20at%209.54.53%20PM.png)
 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/Resources/Screen%20Shot%202022-07-02%20at%209.53.52%20PM.png)
 

## Communication Protocols
 - We will communicate via Slack messaging.
