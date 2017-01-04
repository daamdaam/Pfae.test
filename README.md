Please download and store the response data from the following API endpoint into a data.json file that can you should use to consume the data: 
 
You will display the results showing the brokers logo and any other broker information you want in a carousel similar to:
http://v4-alpha.getbootstrap.com/components/carousel/#example
 
Please consider the following guidelines for your implementation:
##compatibility > IE9
- nothing special done

##consider using a style preprocessor
- Added sass to compile to ./CSS from ./SASS

##responsive support
- Taken care of by bootstrap

##coded in vanilla javascript (avoid use of 3rd party libraries like jQuery…!!)
- no vanilla js needed

##modularised approach
- Main index jsx, a carousel jsx and a navigation jsx

##offer a simple and intuitive navigation
-	navigation by rental location, actually just filters the carousel by the locations found, in this example there is only dubai and abu dhabi.  
If there are more locations detected, then the navigation will contain a link for each location and allow filtering of the carousel by that location

##animated transitions
-	No transitions used

##the use of es6 is considered a plus
-	All written in es6, using webpack for transpiling

