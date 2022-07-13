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
 
 ## Machine Learning 
 ### Preprocessing
 Before running our machine learning model, we needed to clean our dataframe as well as preprocess the data so that it would be acceptable for our model choice. First, a function was created to Extract, Transform, and Load our data for preprocessing. Our original data was in the form of multiple CSV files that were organized by year. Using the glob module, our function looped through all individual CSV files and combined them into one DataFrame. After looking at the types of the dataframe columns as well as the number of null values for each column, our function dropped columns that were not needed, sorted our DataFrame by year and then round pick, and filled any NAn values with 0. It was then observed that our "Team", "Bonus", and "Rnd" columns had string values in different forms. Using regular expressions and the RE module, the function parsed these columns and returned string values all in one form. After running this function, we were able to get a clean dataframe to start preprocessing 
 
To preprocess our data for the machine learning model, we first needed to encode all categorical variables. Using OneHotEncoder, the categorical variables were encoded and merged with our dataframe. The data were then scaled using StandardScaler. 
 
 ### Feature Selection
 We did not need to use all variables in our Dataframe as features for our model. The variables such as the "player's name" and where they were "drafted out of" were both identifying variables that were not needed for the model. These variables were dropped from our features list. Our target variable was whether that team made it to the playoffs that year or not. A value of 0 indicated that the team did not make the playoffs, and a value of 1 indicated that they did make the playoffs. 
 
 ### Training/Testing Set
 We used a testing split of 75/25%. The data was split into training and testing data using the train_test_split function from the sklearn library.  
 
 ### Limitations & Benefits
 The model that was run was a random forest model. This model was chosen since our data was tabular and non-linear. We also wanted a model that would be robust against potential outliers. We were also interested in being able to rank the importance of our input variables. Some limitations could be that our model overfitted our data and would not be able to produce similar results with data on other players.
 
 
 ## Database
 A data base was created using SQL and pgAdmin. In order to create the database, an ERD was first created to visualize the data tables and how our data is connected. 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/QuickDBD-export.png)
 
 Using pandas, the mock data was cleaned and separate dataframes were created that matched the tables in the ERD. The dataframes were stored as tables in SQL. These tables will hold the "ready to use" data for our machine learning models and other analysis.  
 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/Resources/Screen%20Shot%202022-07-02%20at%209.54.53%20PM.png)
 
 ![This is an image](https://github.com/bknowlton2401/Final_Project_Baseball_draft_prediction/blob/dsilvaggio/Resources/Screen%20Shot%202022-07-02%20at%209.53.52%20PM.png)
 

## Communication Protocols
 - We will communicate via Slack messaging.
