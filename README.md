# SimpleNodeJs

To run this project Docker should be installed in your system. 

To run the project first we have to run the command 

    docker pull postgres
    
After that we have to run this command below
  
    docker run --name my-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
    
This will create needed container and connection to the database(Postgres)

Now we can use the app. To run the app type in the terminal

    node app.js
