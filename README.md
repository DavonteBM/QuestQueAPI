# QuestQueAPI

QuestQue (name comes from the French pronunciation of Qu’est-ce Que, meaning 'what is it'. As well as the application idea of being a QUE of QUESTions.) is an API that allows users to create, read, update and delete items that contain a question and its answer.

_For a more in depth guide please visit the [docs](https://documenter.getpostman.com/view/28561890/2s9YeG5rXQ)_

## Endpoints

### GET

```sh
https://questque.onrender.com/answers
Gets a list of all available answers
```

```sh
https://questque.onrender.com/answers/:answerId
Gets an answer by id
```

### POST

```sh
https://questque.onrender.com/auth/register
Create a user
```

```sh
https://questque.onrender.com/auth/login
Login a user
```

```sh
https://questque.onrender.com/answers/create
Create an answer
```

### PUT

```sh
https://questque.onrender.com/answers/:answerId
Update an answer by id
```

### DELETE

```sh
https://questque.onrender.com/answers/:answerId
Delete an answer by id
```

## Schemas

#### User

| Field     | Type   | Example                       |
| --------- | ------ | ----------------------------- |
| id        | string | 5669c545abc185fa4e400e        |
| username  | string | JohnD                         |
| password  | string | password123                   |
| createdAt | date   | 2023-11-29T02:05:08.286+00:00 |
| updatedAt | date   | 2023-1-5T07:22:08.286+00:00   |

#### Answer

| Field       | Type   | Example                                                                                                                                                                                          |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id          | string | 65652cb94dda34a65e6c4533                                                                                                                                                                         |
| question    | string | What is Rene Descartes first principle?                                                                                                                                                          |
| solution    | string | That he exists                                                                                                                                                                                   |
| explanation | string | The only thing that descartes cannot doubt is that he exists. This is because because to doubt first requires him to think of the conception of doubt. Hence, he thinks and must therefore exist |
| createdAt   | date   | 2021-13-29T02:12:11.286+00:00                                                                                                                                                                    |
| updatedAt   | date   | 2023-11-29T02:05:08.286+00:00                                                                                                                                                                    |
