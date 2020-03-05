![GitHub Logo](/client/src/images/Logos/grid.png)
## The Grid
The Grid is a social hub for the gaming community. You can sign up, create a profile, 
add allies, create/join clans, share posts, and comment on them. 

### Built With
M E R N  | Description
------------- | -------------
Mongo  | a cross-platform document-oriented database program.
Express  | designed for building web applications and APIs.
React  | is a JavaScript library for building user interfaces
NodeJs  | JavaScript runtime environment that executes JavaScript code outside of a browser.

### Installation
Use the package manager [npm](https://www.npmjs.com/).
```bash
git clone https://github.com/JohnCdev/Project-3.git.
```
once in your local file in the command line.
```bash
npm i 
```
### Deployed
Using [Heroku](https://www.heroku.com/).
[the-grid](https://the-grid.herokuapp.com/).

## Authors
* John Carver - [github](https://github.com/JohnCdev).
* Charles Danner - [github](https://github.com/charlesdanner).
* Shawn Galloway - [github](https://github.com/shawngway).
* Anthony McPherson - [github](https://github.com/AQM28202).
* Tripp Stringfield - [github](https://github.com/jastring1).

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements
* [Bootstrap](https://getbootstrap.com/).
* [react-media](https://www.npmjs.com/package/react-media).
* [react-moment](https://www.npmjs.com/package/react-moment).
* [react-helmet](https://www.npmjs.com/package/react-helmet).
* [react-router](https://www.npmjs.com/package/react-router).
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
* [bcrypt](https://www.npmjs.com/package/bcrypt).
* [axios](https://www.npmjs.com/package/axios).
* [mongoose](https://www.npmjs.com/package/mongoose).

## Walkthrough
This guide will help show you how to use the application and all of its features

### Features
* User Sign Up
* User Log In/Out
* Create/Update User Profile
* Feed Page
* Posts
* Comments
* User Profile Pages
* Friend Requests with Notifications
* My Clans Page
* Create Clan
* Clan Page
* Discover Page

### Landing Page

Upon Entering the Site the User will have 2 Options

* Sign Up 
* Log In

![Grid Landing](/client/src/images/Walkthrough/grid_landing.JPG)

### Sign Up

* The Sign Up Page allows the User to Create an account with User Name and Password that will be hashed with Bcrypt
* The User must also fill out their basic profile information upon creating an account

![Grid SignUp](/client/src/images/Walkthrough/grid_singup.JPG)

### Log In

* After Signing Up the User will be Redirected to the Log In page
* User must enter Valid Log In information to access the site

![Grid LogIn](/client/src/images/Walkthrough/grid_login.JPG)

### Feed Page

* Once Logged In the user will be redirected to the Feed Page
* This page shows all of the users posts and posts of their Allies

![Grid Feed](/client/src/images/Walkthrough/grid_feed.JPG)

* Clicking on the Make Post button will prompt the user to add a post to the feed

![Grid FeedwPost](/client/src/images/Walkthrough/grid_feedwithpost.JPG)

* Under Each Post there is a bar that shows the number of comments that have been made for that post
* Clicking on the Comment Bar will expand the post to reveal the comments made on each post
* This also allows the User to make a comment for that specific post

![Grid FeedComment](/client/src/images/Walkthrough/grid_feedcomment.JPG)

### Edit Profile

* In the top right of the Feed page their is a small logo of the user's selected profile picture
* Clicking this will redirect the user to the edit profile page where they can update profile information
* All of this information will be updated in the database 

![Grid Edit Profile](/client/src/images/Walkthrough/grid_editprofile.JPG)

* If the User changes their profile picture, all previous posts will be updated with the newely selected picture

![Grid Profile Pic](/client/src/images/Walkthrough/grid_editprofilepic.JPG)

### Discover Page

* The Discover page allows the user to search for Allies to friend request or Clans to Join

![Grid Discover](/client/src/images/Walkthrough/grid_discover.JPG)

### Ally Requests (Friends)

* After searching for an Ally through the Discover Page the user has the ability to go to the Users Profile
* If the user is not friends with that user, they will not be able to see any posts made by that user
* They will have the option to send an Alliance Requests
* Once sent, the Aliiance request will change to 'Request Sent'

![Grid Not Friends](/client/src/images/Walkthrough/grid_notfriendswith.JPG)
![Grid ReqSent](/client/src/images/Walkthrough/grid_requestsent.JPG)

* Once sent, the requested user's notification bar in the navigation will changes colors indicating that there is a new notification
* When clicked on, the user can see what the notification is
* When the actual Notification is clicked on, the user will be navigated to the other users profile page to accept request

![Grid Notification](/client/src/images/Walkthrough/grid_notification.JPG)

* Once the request is accept, both users will recieve a notification that they have formed an Alliance
* Now both user's will have access to each others profile information and posts/comments
* Each users posts will now appear on each others feed page
* The Ally will appear in the Allies Bar on the Users Feed page 
* When the user removes a friend, their posts and profiles will not longer be accessible and removed from Allies Bar

![Grid Notification](/client/src/images/Walkthrough/grid_notification2.JPG)
![Grid userProfile](/client/src/images/Walkthrough/grid_userprofile.JPG)

### Clans (Groups)

* Clicking on Clans in the Navigation will bring to user to the My Clans Page
* The User will be able to view each Clan that they are a member of with a link to that Clan Page
* The User also has the ability to Create a new Clan

![Grid My Clans](/client/src/images/Walkthrough/grid_myclans.JPG)

* Each Clan has its own Page where all of the posts and comments made will only appear on that page and not in any other feed

![Grid Clan Page](/client/src/images/Walkthrough/grid_clanwithpost.JPG)

* When a User creates a Clan, they are automatically added to that Clan as the Founder
* Once created, These Clans will be searchable through the Discover Page

![Grid Create Clan](/client/src/images/Walkthrough/grid_createclan.JPG)
















