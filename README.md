# SampleArchitect_1
Sample asp.net mvc 5 and angularjs 1.5.8 project architecture v1.0

# Detail
   *	DTO Model (data transfer object model) is an object that defines how the data will be sent over the network to remove circular references from data model, Hide particular properties that clients are not supposed to view, omit some properties in order to reduce payload size, flatten object graphs that contain nested objects, to make them more convenient for clients, avoid “over-posting” vulnerabilities and decouple your service layer from your database layer.
   *	View is what is presented to the users and how users interact with the system. The view is expected to render the model in a meaningful way to the user. In this project, the view is made with .cshtml file including css, AngularJS and jQuery, it sends user gestures to controller and allows controller to select view.
   *	Controller is the decision maker and the glue between the model and view; it handles user actions and gestures, and responds to user events. For example, in CMS, when a user clicks the “Create” button to create a new contract, the controller for that action is invoked. The controller will then make changes to the contract model. The view will then render the modified contract model to the display so that user can view the new contract he added in the contract list.
   *	Data Model is where the application’s data objects are stored. A model object is in charge of encapsulating application state and one object could be related to other objects establishing a one-to-one or one-to-many relationship. 
   *	Repository is intermediate layer which used to separate the controller and the data access layer (database context). It queries the data source for data, maps it to DTO models, processes data and returns data to controller.

# Installation
1. Get sourcecode and run on visual studio 15.
2. Update connectionString to localhost at Web.config. 
3. Run commands: 
    * Enable-Migrations
    * Update-Database
