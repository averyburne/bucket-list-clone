# Bucket list

Client Repo: [Bucket List Client Repo](https://github.com/T-hatSquad/bucket-list-client)\
API Repo: [Bucket List API Repo](https://github.com/T-hatSquad/bucket-list-api)\
Deployed Client: [Bucket List Deployed Client](https://t-hatsquad.github.io/bucket-list-client/)\
Deployed API: [Bucket List Deployed API](https://gentle-ocean-46464.herokuapp.com/)

## Set Up
Browser template: [browser template](https://git.generalassemb.ly/ga-wdi-boston/browser-template)\
To install dependencies: `npm install`\
To run locally: `grunt serve`

## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a bucket list item with a title and description.
- As a signed in user, I would like to update my bucket list item's title and description.
- As a signed in user, I would like to delete my bucket list item.
- As a signed in user, I would like to see all my bucket list items but not other users'.
- As a signed in user, I would like to cross off items to complete them.

## Wireframes
[Wireframe](https://imgur.com/gallery/iAuZDEj)

## Planning

### Initial Set up and MVP
Since we were able to build the MVP for the API rather quickly we got to work on the\
client side application early on in the project. It started off being very easy as\
much of the HTML forms, event functions, and ajax calls (especially the authentication)\
were very similar to past projects. However, since this was our first team project we\
wanted to get some experience with team workflow and version control, so we attempted\
to figure out how to deal with merge conflicts, which brought up the first major problem...

### Git Problems
At this point we wanted to get practice on how to resolve merge conflicts in both Atom\
and on GitHub. This started of fairly simple, it mostly involved just making sure the\
right code from both sides of the merge conflict was showing up, although I can see why\
this would become a bigger problem with a larger file. The strangest part that happened\
was after two of our group members had committed their changes and resolved the conflicts\
After that, another group member tried to merge and and resolve the conflicts, but noticed\
that only the changes from the second group member were on the file and not the changes\
the first group member made, which did make any sense to us since he only got those\
those changes from the file of resolved changes.

After a lot of research we believe we found the source of the problem to be that the\
third group member attempted to rebase the commit with the resolved conflicts to the\
original dev branch which did not have any of the changes. So the rebase would not include\
the first changes, but "replayed" the merge from the second group member and therefore\
making it apart of the rebase, here is a link to a picture illustrating the situation.\
[Git workflow](https://imgur.com/gallery/b6ny5j8)

### Finishing MVP
Once that Git problem was sorted out we didn't have much trouble finishing the MVP\
We got the forms working and the list items to be displayed upon sign in. We also got the\
web page to update the API and to update the UI at the same time. One other cool feature\
we were glad we got to add before finishing was a Dark Mode button, since the group\
preferred to use the browser in Dark mode we decided to add that funcionality into our\
web application. With the MVP working we decided we had enough time to start on a stretch\
goal, which ended up being a map listing pins for the locations of people's bucke list\
items.

### Making the Map
Making the map proved to be fairly challenging as it was a technology none of us were\
familiar with, this meant we had to really dive into the documentation before getting\
into the coding. The documentation was somewhat overwhelming, but we did manage to find\
the parts that were relevant to our project. First we had to obtain an API Key so Google\
would allow us to use their map services. After that we had to obtain the HTMl scripts\
to load in the map, and then we had to use the initMap function made by Google that allows\
us to add the pins on the map.

The first major issue we came across was that the map would automatically load up every\
time the page loaded, so it didn't let us give it any data to put on the map. Our work\
around for this was to add the HTML scripts in a Handlebars file that would only load up\
on the page after a user has signed in (and after the map script got the locations of\
the users list items). The next major issue we came across was getting the initMap script\
to read from the list of coordinates in the API instead of just the ones we hard coded into\
the function. We attempted to import the location array into the initMap file, but we\
kept getting an error saying 'require' could not load in that file. We attempted to find a\
solution online, but could not find any other people who had a similar issue. Eventually,\
we had our instructor, Mike, look at our code and suggest a fix. The issue was that since\
the initMap function is ran via an HTML script it does not have access to any data in any\
of our other JavaScript files. Our fix for that was to just store the locations array in\
a data attribute in an HTML element and then have the initMap function loop through that\
instead of the one stored in JavaScript, this worked well and allowed us to add our\
locations onto the map.

## Future Goals
We managed to accomplish all our goals before the end of the project including the stretch\
goals, but if we were given more time we definitely could have achieved some other stretch\
goals. Some other stretch goals that we could have considered would have been to add a\
social media feature to the website to allow users to view other users bucket list items,\
or allowing users to upload images once they have crossed an item off their bucket list.
