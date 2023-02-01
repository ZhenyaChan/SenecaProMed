### SenecaProMed
Run the following command to run in localhost: npm i <br>
using nodemon: npm run dev <br>

__Server is connected to Mongodb__

## SenecaProMed MongoDB and Outlook account
    User: senecapromed@outlook.com 
    Password: senec@ProMed1234 
    MongoDB connection String: mongodb+srv://senecapromed:senec%40ProMed1234@senecapromeddb.xjhswji.mongodb.net/UsersDB?retryWrites=true&w=majority
    

## Working API request
Home: Localhost:3000


### User signup
#### Note: No duplicate username in DB. Server will use user email as a username. Passowrd:will be replace by 10 bcrypt
```
Create client  :
localhost:3000/client/signup
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

Create Driver: 
localhost:3000/driver/signup
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

Creat Pharmacy
localhost:3000/pharmacy/signup
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
```
Get all

Admin Get all Client: localhost:3000/admin/clients/all_clients
Admin Get All Driver:  localhost:3000/admin/drivers/all_drivers
Admin Get All Pharmacies: localhost:3000/admin/pharmacies/all_pharmacies

ByiD

Admin Get a Client by id: localhost:3000/admin/client/63d58747619d1e7dd77c7ac3  
Admin Get a Driver by id: localhost:3000/admin/driver/63d55c83f0b73682d19641a7  
Admin Get a Pharmacies by id: localhost:3000/admin/pharmacy/63d2baacefeeb764469acecd  

```

**Back-end server control flow<br>
server.js   -> controllers -> services -> user model<br>**


## GitHUB creating branch: 
    $ git branch new_branch_name
    $ git checkout new_branch_name (<= branch name should match)
    $ git push origin branch_name
    $ git merge master (<= merges master into current branch)     
