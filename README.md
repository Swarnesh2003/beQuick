# beQuick
This website is  an advanced online auction platform that offers a wide range of features to both auctioneers and bidders.
We have used React for frontend ,nodejs for backend and mongodb as database.we have also used MaterialUI or additional designing
The user can either be an auctioneer and bidder or both
Each user will have a separete username and password for login.we have used cookies and sessions for authentication of login and signup.
There are separate dashboards for both auctioneers and bidders.
In the auctioneer dashboard,
There are options like
  New Auction
  Ongoing Auction
  Closed Auction and
  Transactions
  Under the New Auction,
      Auctioneers can launch a new auction by specifying the details of the product.User can also add an image to ensure the quality of the product.
  Ongoing Auction:
      Under this,the user can view the ongoing auctions that he has created (auction that is still alive)
  Closed Auction:
      The user can view the closed auction(auctions that are ended)
  Transactions:
      the user can view the history of transactions that has been made with the bidders during every auction.


In the bidder dashboard,
There are options like
  New Bid
  Ongoing Bid
  Winnings and
  Transactions
  Under the New Bid:
      Bidders can view all the auctions that has been made by the the auctioneers.They can bid in the auction they have interested in.There will be a check for 'Add to my auctions' ,this will add the auction to the ongoing auction section to give specific importance to that auction.
  Ongoing Bid:
      There will be indicators to denote whether the current bid is high or neutral comparing to the user's last bid.The user can bid from here also.      
  Winnings:
      Under this section, there will be auctions that have been won by the user.
  Transactions:
      The user directly pay the payment to the auctioneer usign payment gateway in this section.It also contains the history of all the payments with the auctioneers.
      



