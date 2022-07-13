# Final_Project_Baseball_draft_prediction

## Purpose
The purpose of this analysis is to see if there is a correlation between longevity and the draft round pick of a major league baseball player.


## Data Source
The data sources used are Baseball Reference [link](https://www.baseball-reference.com/) and Kaggle [link](https://www.kaggle.com/code/rmbright/baseball-hr-player-demographics-career-length).  
 - Baseball Reference was used because it gives statistics on every major league baseball player since the inception of the MLB in 1876.  The site has statistics on first round draft picks dating back to 1965, that includes the player, the selecting team, position and signing bonus [link](https://www.baseball-reference.com/draft/).  The site also shows each rookie of the year dating back to 1947.  This includes their team, league, and batting statistics [link](https://www.baseball-reference.com/awards/roy.shtml). 
  - Kaggle was used to gather sorted data files for teams, players, career lengths, and playoff information.


## Questions
### Correlations
 - Is there a correlation between first round draft picks and the team making it to playoffs?
 - Is there a correlation between first round draft picks and longevity in the MLB?
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

## Communication Protocols
 - We will communicate via Slack messaging.

## Outline
### Clean data
 - Find usable data from Baseball Reference and Kaggle
 - Remove unnecessary columns
 - Merge dataframes
 - Cleaned up player names
 - Cleaned up team franchise ids
 
### Compare data
 - Gathered results of teams that made the playoffs from 2000-2015
![Histogram of playoff qualifying franchise](https://user-images.githubusercontent.com/96890065/178832634-bf6a4627-a4bf-4503-9919-159a40319a35.JPG)
 - Gathered results of teams with a Round pick of 1-5 in the First Round (2000-2015)
![top five teams 2000-2015](https://user-images.githubusercontent.com/96890065/178832979-76b37dfd-152f-43bb-9ad0-3de0362ad17b.JPG)
 - Combined both histograms to compare making the playoffs and teams that had a top 5 round pick in the first round (2000-2015)
 ![top5_playoffs](https://user-images.githubusercontent.com/96890065/178833211-a0743284-1de1-4f17-922c-992cfc1e517a.png)
 - Found results for career lengths from players who started between 2000-2015
 ![careerlength](https://user-images.githubusercontent.com/96890065/178833384-83418f59-7f35-40fe-bc71-28c37cf1989a.png)
 - Used a boxplot to show the average years played (career length) to all First Round picks
 ![roundpick_yearsplayed_team](https://user-images.githubusercontent.com/96890065/178833534-aa21da0b-167b-42eb-a591-4c2912bdfccd.png)

### Analyze data
 - TBD

### Machine Learning
 - Preprocessing
   - Merged multiple CSV files to one readable CSV file for first round draft picks using ETL and glob module.  Dropped unnecessary columns and sorted dataframe by year then round pick and filled any NAN with 0. Adjusted string values to be the same for needed columns.
   - Used OneHot Encoder for the categorical variables and scaled using StandardScaler.
 - Training/Testing Set
   - We used a testing split of 75/25%. The data was split into training and testing data using the train_test_split function from the sklearn library.
 - Database
   - A data base was created using SQL and pgAdmin. In order to create the database, an ERD was first created to visualize the data tables and how our data is connected.
![QuickDBD-export](https://user-images.githubusercontent.com/96890065/178836568-177ddbd7-bea2-42e2-8527-f61ddb4ec97c.png)
   - The dataframes were stored as tables in SQL.
<img width="369" alt="Screen Shot 2022-07-02 at 9 54 53 PM" src="https://user-images.githubusercontent.com/96890065/178836667-b920a7e6-11b7-45cf-a48b-7f6dc912f93f.png">
<img width="367" alt="Screen Shot 2022-07-02 at 9 53 52 PM" src="https://user-images.githubusercontent.com/96890065/178836689-1eef0013-6aa9-4680-b595-0f227c1daef1.png">

### Dashboard/Presentation
TBD
