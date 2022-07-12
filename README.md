# Final_Project_Baseball_draft_prediction
The purpose of this analysis is to see if there is a correlation between longevity and the draft round pick of a major league baseball player.

## Outline
### Playoff Appearances 2000-2015
- First I imported all MLB teams since the creation of Major League Baseball in 1871, through 2015.  Then I removed all teams previous to the year 2000. 
- Next I created a Histogram to show that from 2000-2015 to show the average season lengths was 162 games played by all teams.
![Histogram of season lengths](https://user-images.githubusercontent.com/96890065/178162304-72e5ecba-09be-4144-b804-9d13fe37dd35.JPG)
- I created a histogram to show the number of times a team won the World Series between 2000-2015.
![Histogram of WS winning franchise](https://user-images.githubusercontent.com/96890065/178162342-7e65909f-24c2-481e-99a4-c0019aee9689.JPG)
- I also created a dataframe to indicate if a team made it to the playoffs (includes a Division win, Wild Card entry, League win, and World Series win).
![team_playoffs](https://user-images.githubusercontent.com/96890065/178162408-f03b4e06-ae53-425d-8c4e-2793bf1bc212.JPG)
- From this dataframe I was able to create histogram to show how many times a team made the playoffs from 2000-2015.
![Histogram of playoff qualifying franchise](https://user-images.githubusercontent.com/96890065/178162390-61d262cf-d2bd-459f-8d57-30aaefbfe94e.JPG)

### First Round Draft picks 2000-2015
- I updated the AllFirstRoundDraft.csv to include the fanchise_id and renamed it AllFirstRoundDraftwithfranchise_id.csv. 
- I then narrowed down the dataframe to indclude the top 5 round picks in the First Round per team per year.
- I created a histogram to show which teams had the most top 5 picks in the First Round.
![top five in First Round](https://user-images.githubusercontent.com/96890065/178162538-321d7ae3-4637-4cf1-ae27-a96b62739bda.JPG)
- I created a table to indicate if the team had a top 5 pick in the First Round. 
![top five table](https://user-images.githubusercontent.com/96890065/178163228-2744c531-19f1-499f-a2d2-1edfd81531d3.JPG)
- I created a histogram to show the number of occurances each team had a top 5 First Round pick.
 ![top five teams 2000-2015](https://user-images.githubusercontent.com/96890065/178163223-6ea21f2a-30b3-49b0-a149-aaf6e6e66788.JPG)

### Top 5 First Round Draft picks vs Making the Playoffs
- I combined the 2 histograms into 1 to show that there is no correlation between a team having the top 5 first round picks and their team making the playoffs. 

### Career Lengths 2000-2015
- After importing the career_lengths CSV, I cleaned it up to remove players who started after 2015 and to round the years played to a whole number. 
- I created a histogram to show career lengths from 2000-2015. 
![careerlength](https://user-images.githubusercontent.com/96890065/178385389-5e8d4c46-7b5a-4e92-8140-ebdf3b701555.png)
- The average career length during that time was about 5 years.

### Match First Round picks to career length
- after reading in the AllFirstRoundDraftswithfranchise_id CSV, I cleaned up the names to eliminate an astrick before any names and '(minors)' after any name.  
- I merged this new dataframe with players career lengths and created a new CSV
- I calculaged the average years played by a first round draft pick with their team.
- Using Seagrams, I created a box plot.
![careerlgth_player_team](https://user-images.githubusercontent.com/96890065/178385746-263b0736-b43a-4a1d-887e-d1878782e945.png)
