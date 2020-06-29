# Project1
FIND MY DREAM PROPERTY 

## Elevator pitch
This application is designed to simplify and optimise the property search process for users. 

It takes a variety of factors into consideration to find relevant properties for users, such as the distance from the property listing to their workplace, and a set of criteria such as ideal number of bedrooms, bathrooms, car parks, max. price and property type, and allows them to save their properties. When I save a property, it is saved into my favourites. 

## User story
The process of searching for the right property can be stressful, especially when there are so many factors influencing the buyer's decision. Which is why our application seeks to overcome this by considering the main factors that come into play when choosing a house/apartment/land. 

We wanted to take into consideration the distance between listed properties and the user's work address without them having to go to another application such as google maps. 

We also took the obvious factors into account, such as house price, number of bedrooms, bathrooms, car parks, property type.

AS A home buyer or renter with a busy schedule
I WANT to locate properties that fit my chosen criteria
SO THAT I can allocate my time towards ONLY properties of interest. 

## Technologies used
Our main API used was the domain API from https://www.domain.com.au/. This was used to retrieve the properties that match the user's search criteria. The google maps geocoding API was used to get more accurate and unambiguous location results

We also used the Distance Matrix API from the Google Cloud Platform to compute the distance between a selected property and the work address that the user inputs.

## Tasks and roles

Benson - Domain API and dynamic HTML rendering
Barbara - User interface and presentation 
Shakib - HTML/CSS and Google maps API


## Screen shot


#### Desktop Version

![Desktop Version](https://github.com/bdcoelho/Project1/blob/master/css/img/Desktop.png "Desktop Version")


## Main challenges
Our main challenge was making sure the branches were successfully merged and that conflicts were resolved. 

We also experienced difficulty in how to use the materialize css framework as we found it to be more manual than Bootstrap, where we had to utilise jQuery to make components functional and responsive. 

