# SUBA-PROJECT
Employed at Subah Info Solutions as a backend web devloper,my premier task was to implement a backend service for a school management system. I created nodejs project for the task and managed the codebase with git as my version control. I save my user data to Mongodb database to store information passed by users during requests. I deployed my backend application to netflify.i also used Postman to test my endpoints.


# Description
This is a REST API that allows you to create and read sudents.

# Live Environment

- The Deployed Version of the API can be found at [Vercel](https://vercel.com/shafikaawusims/suba-project/BFh4UCDkrZA74Lv5GiEJd7EXrr9e)

- The API documentation for the deployment can be found at [Postman](https://documenter.getpostman.com/view/25902982/2s93CHuEkX)

# Usage

- Clone the repository

```bash
git clone https://github.com/shafikaawusims/SUBA-PROJECT

```

- Navigate to the project directory and add your database credentials to the `.env` file

```bash
cd SUBA-PROJECT
```
- Run the application

```bash
npm run start
```

- Test the endpoints using Postman or any other API testing tool

# Endpoints

| Name | Request Method | Endpoint | Parameters | Response code |
| --- | --- | --- | --- | --- |
| Get single student | GET | localhost:3000/student/{studentId} | studentId: int | 200 OK |
| Add Student | POST | localhost:3000/student/add | None | 201 Created |

## Sample Data

Sample JSON data to test `Add Student` endpoint

```json
{
    "firstName": "Shafika",
    "lastName": "Mohammed",
    "dataOfBirth": "03/02/2004",
    "gender": "Female",
    "email": "samohammed_sharif@st.ug.edu.gh"
    "phoneNumber": "+23345678910",
    "alternativeNumber": "optional",
    "level": 200,
    "department": "Department of Computer Science",
    "hallOfResidence": "Eizabeth Frances Sey Hall"
}
```
