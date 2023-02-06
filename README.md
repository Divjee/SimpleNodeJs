# SimpleNodeJs

### For this task I used Docker to connect to the database and PostgresSql as my chosen database. 

To run this project first we need to clone the repository and navigate to the cloned repository using command prompt.

To run the project first we have to run the command in our terminal. 

    docker pull postgres
    
This command downloads the latest version of the official PostgreSQL image from the Docker hub. This image can then be used to run a PostgreSQL database instance in a Docker container.

After that we need to run the below command in our terminal.
  
    docker run --name my-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
    
The above command is used to run a Docker container for a PostgreSQL database.

Now we can use the app. To run the app type in the terminal

    node app.js
    
#### Here is a short video of have the app looks when it is running and being used.     

https://user-images.githubusercontent.com/99561972/216990600-ddd1713d-b214-43b3-a3b0-f42bee61ec1a.mp4
