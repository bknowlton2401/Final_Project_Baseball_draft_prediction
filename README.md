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
      - Based on our research it does not appear that there is a correlation between a team making playoffs and also picking in the first round
 - Is there a correlation between first round draft picks and longevity in the MLB?
      - Players picked in the first seven overall round pick, tend to have longer careers than those picked in a later draft pick. 
 - Is there a correlation between Rookie of the Year and the team making it to the playoffs?
      - We were not able to measure this at this time, but is of interest for a future time. 
 
 ### Stats to include (viewable in HTML)
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
 - Average years played per Round pick
   - Using a box-and-whisker plot (using Seaborn) and a list, it appears that players who are picked in the first 7 round picks, on average have a longer career than those picked in a later round. 
![roundpick_yearsplayed_team](https://user-images.githubusercontent.com/96890065/180075826-96f11693-2c58-4620-b754-1a0cebd94cec.png)
   - Numerically the average years played per round pick
<img width="132" alt="AvgYrsPlayed_perRdPck" src="https://user-images.githubusercontent.com/96890065/180075772-656b5c96-6d45-46d1-bb54-d9dc949749e1.png">
![scatterplt_year_yrspld_rdpck](https://user-images.githubusercontent.com/96890065/180079385-23471355-755d-49de-b247-2976a140179d.png)


 - Correlation between Round pick and years played
   - using a linear regression model there is a weak negative correlation between when a player is picked in the first round and the length of their careers. 
![lnreg_rdpck_yrspld](https://user-images.githubusercontent.com/96890065/180076609-8d02997d-46d4-4995-89e6-e6dbbfee25da.png)
<img width="351" alt="Correlation_coefficient" src="https://user-images.githubusercontent.com/96890065/180076723-bfd627bb-fb82-4a7b-b1bb-5ab0b38fad04.png">
 - Division breakdown of first round draft picks. The NL West (64) and AL West (66) have had more first round draft picks than other divisions from 2000-2015. This could be due to the Houston Astros switch from NL Central to AL West.
   
   - NL West
<img width="191" alt="NLWest_playerspckd" src="https://user-images.githubusercontent.com/96890065/180077000-b30aee2d-de43-48b6-ad54-277d1e9211bb.png">


    - NL East
<img width="272" alt="NLEast_playerspckd" src="https://user-images.githubusercontent.com/96890065/180076991-8eb512b7-93cc-49c7-8929-29d27e3cf247.png">


    - NL Central
<img width="200" alt="NLCentral_playerspckd" src="https://user-images.githubusercontent.com/96890065/180076984-134c37ab-0a1f-494b-81f1-20aa8e38b4e7.png">


    - AL West
<img width="272" alt="ALWest_playerspckd" src="https://user-images.githubusercontent.com/96890065/180076971-e922f952-fa91-4f91-ae9d-c67a7f2dedd8.png">


    - AL East
<img width="200" alt="ALEast_playerespckd" src="https://user-images.githubusercontent.com/96890065/180076957-27f739c1-0037-46f6-828c-b3fc790fe154.png">


    - AL Central
<img width="200" alt="ALCentral_playerspckd" src="https://user-images.githubusercontent.com/96890065/180076943-c2d8f259-2cd7-44ae-80b8-fd75d5570e07.png">




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
![5 first round ](https://user-images.githubusercontent.com/99921692/181100524-5b4d6d27-e5f9-4b7e-a372-8fcbc2837f13.png)
![Box Pl<img width="132" alt="average years played " src="https://user-images.githubusercontent.com/99921692/181126133-c2cc47cf-aa0e-4198-9b55-d199768d37a5.png">
ot Fi<img width="132" alt="average years played " src="https://user-images.githubusercontent.com/99921692/181126178-9fafe100-0429-49e7-8fff-bbc3312c508c.png">
rst Round](https://user-images.githubusercontent.com/99921692/181126027-425b2caa-ff3d-4e64-b650-a3c361bc8365.png)

### Future information
Successes:
 - Great communication and clear direction on the project
 - Compiling, joining and merging dataframes went well
 - Running graphs to show correlations went well
 - Organizing dashboards and initial creation of HTML page
 - Machine learning to show predictions
 - Making adjustments to our project as the data lead us

Areas of Improvement:
 - minor issues in HTML development with repetition in names
