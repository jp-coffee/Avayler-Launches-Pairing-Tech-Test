## TOTD pairing session

We are a small group of FE engineers and so value communication and collaboration highly.

In this pairing session we could like you to fetch launch data from the spacex data api and display the results on the screen.

Please use https://api.spacexdata.com/v3/launches for the url to fetch the data and style the components as you wish.

The data that we would like you to display are:

- mission_name
- launch_date
- core_serial from the cores array in first_stage
- payload_id and payload_type from paylods array in second_stage
- display the image from mission_patch in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Also, please consider that these properties may not be returned for all objects in the API.

## Task to be completed

We would like you to clone this repository and amend the home page to display a list of Cards with the launch data retrieved from the spacex data api. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v3/launches

Your solution should cover the following tasks:

- Make api request on page load
- Store response json into component state
- Display data top 10 items

The data that we would like you to display are:

- mission_name
- launch_date_utc
- from rocket object
  - list core_serial from the cores array in first_stage
  - payload_id and payload_type from payloads array in second_stage
- display the image from mission_patch_small in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Note
flight_number as a unique property for each launch object.
