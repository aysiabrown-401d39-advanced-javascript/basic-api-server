# Lab : Class 03
## Basic API Server


### Links & Resources
- [CI/CD]()
- [Deployed Backend](https://aysiab-basic-api-server.herokuapp.com/)
- No applicable Front End 

Setup
- When running from your local machine, install dependencies from package.json using `npm i` within the repository from your terminal 

### `.env` requirements 
- `PORT  : port number

### Initialize & Run Instructions:
- Launch local server using `nodedemon` or `node index.js`
- [Postman](https://www.postman.com/) is the recommended way to run your GET, POST, PUT & DELETE requests at the following routes
    - `/pets` 
    - `/show`
- Server is set up to innately run at `localhost:3000`

### Tests
- Testing for:
    - 404 on a bad route || Passing
    - 404 on a bad method || Passing
    - The correct status codes and returned data for each REST route
        - Create a record using POST || Pets: Passing
        - Read a list of records using GET *
        - Read a record using GET *
        - Update a record using PUT *
        - Destroy a record using DELETE *

* all tests denoted with an asterisks either need to be altered, or written for `/pets` and `/show`


### UML
- will be added later 