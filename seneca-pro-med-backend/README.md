# SenecaProMed

## Getting Started

- `npm install`: install all dependencies.
- `npm start`: starts this express server on port 8080

## Scripts

- `npm run dev`: uses nodemon to start a dev environment that will rebuild after each change.
- `npm run test`: runs unit all units tests.
- `npm run test:watch`: keeps running all units tests after each change.
- `npm run test <test-filename>`: runs a single targeted unit tests.
- `npm run test:watch <test-filename>`: keeps running a single targeted units test after each change.
- `npm run coverage`: runs all tests and includes a coverage report at the end that shows the amount of source code covered by all of our tests.

## SenecaProMed MongoDB and Outlook account

    User: senecapromed@outlook.com
    Password: senec@ProMed1234
    MongoDB connection String: mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority

## API Endpoints

API-Base: <http://localhost:8080/>

### User signup

> Note:
>
> - No duplicate usernames in DB.
> - Server will use user email as a username.
> - Password will be secured by 10 bcrypt.

``` JSON
// Create Admin :
// localhost:8080/admin/signup
{
  "firstName": "William",
  "lastName": "Brown",
  "password": "mysecurepassword",
  "password1": "mysecurepassword",
  "phoneNumber": "905-555-5678",
  "email": "williambrown@example.com",
  "postalCode": "L6Y 4R2",
  "street": "10 Peel Centre Dr",
  "city": "Brampton",
  "province": "Ontario",
  "country": "Canada"
}

// Create client  :
// localhost:8080/client/signup
{
  "password": "a",
  "password1": "a",
  "firstName" : "john1",
  "lastName" : "doe",
  "phoneNumber": ["416-111-2222"],
  "email" : "kevin@mail.com",
  "postalCode": "L1S 1W1",
  "city": "Brampton",
  "province": "Ontario",
  "country": "CA"
}

// Create Driver: 
// localhost:8080/driver/signup
{
  "password": "a",
  "password1": "a",
  "firstName" : "john1",
  "lastName" : "doe",
  "phoneNumber": ["416-111-2222"],
  "email" : "kevin@mail.com",
  "postalCode": "L1S 1W1",
  "city": "Brampton",
  "province": "Ontario",
  "country": "CA"
}

// Create Pharmacy
// localhost:3000/pharmacy/signup
{
  "password": "a",
  "password1": "a",
  "pharmacyName" : "shoppers drug mart",
  "phoneNumber": ["416-111-2222"],
  "email" : "shoppers@mail.com",
  "postalCode": "L1S 1W1",
  "city": "Brampton",
  "province": "Ontario",
  "country": "CA"
}
```

### Admin

- Get all
  - Admin Get all Client: localhost:3000/admin/clients/all_clients
  - Admin Get All Driver: localhost:3000/admin/drivers/all_drivers
  - Admin Get All Pharmacies: localhost:3000/admin/pharmacies/all_pharmacies

- Get
  - Admin Get a Client by id: localhost:3000/admin/client/63d58747619d1e7dd77c7ac3  
  - Admin Get a Driver by id: localhost:3000/admin/driver/63d55c83f0b73682d19641a7  
  - Admin Get a Pharmacies by id: localhost:3000/admin/pharmacy/63d2baacefeeb764469acecd  

## Server Control Flow

app.js -> Controllers -> Services -> User Model

## GitHub: Steps to Create a New Branch

- `git branch <new-branch-name>`: creates a new branch with the requested name
- `git checkout <new-branch-name>`: branch name should match.
- `git push origin <new-branch-name>`: pushes the main (the current branch) to the new branch.
- `git merge master`: merges master (or main) into current branch
