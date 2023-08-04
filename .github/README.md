<div align="center">
  <img src="logo.png" width="222" height="78" />
</div>

<h1 align="center">
 NLW Heat, Real-time Feedback
</h1>

Project of a real-time feedback application developed with modern and efficient technologies, the application allows users to provide real-time feedback, making the experience more interactive and effective.

On the frontend, React and TypeScript are used to create a dynamic and responsive user interface. To send and receive data from the API, Axios is used, which allows us to easily send and receive HTTP requests. For styling, Sass was chosen, which is a more advanced and efficient CSS style sheet language. Additionally, we utilize Socket.io to establish real-time communication with the server and update the UI based on user interactions. Finally, Vite to compile and serve the application quickly and efficiently.

On the backend, Node.js and TypeScript were used to create a fast and scalable server. To allow real-time communication with the client, Socket.io was used, which is a JavaScript library that provides an API for real-time communication between the client and the server. Express as a framework for creating routes and controlling incoming HTTP requests. To protect our routes and ensure application security, the Json Web Token was used. Finally, Axios to send HTTP requests to other APIs when needed.

With this Real-Time Feedback application, users can provide instant feedback, making the experience more dynamic and interactive.

## :hammer_and_wrench: Tools

### Frontend

* React
* TypeScript
* Axios
* Sass
* Socket.io
* Vite

### Backend

* Node.js
* TypeScript
* Socket.io
* Express
* Json Web Token
* Axios

## :mailbox_with_mail: Utilities
 
### Web Sockets 

Web Sockets is a technology that allows real-time bidirectional communication between a client (usually a web browser) and a server, without the need for page refreshes. It works as a persistent communication channel that allows the transfer of data between the client and the server efficiently and reliably.

However, implementing Web Sockets is not a simple task, as it requires detailed configuration of the server, in addition to custom code for the client. To help with this task, the Socket.io library was created.

Socket.io is a JavaScript library that provides an API for real-time communication between the client and the server. It allows developers to build web applications that support real-time, two-way communication without having to deal with the implementation details of Web Sockets. Socket.io is also cross-browser and cross-device compatible and supports fallbacks in case of incompatibility.

In addition, Socket.io also provides additional features such as the ability to create communication channels, emit custom events and send messages to specific customer groups. These features can be used to build real-time web applications such as chats, multiplayer games, and real-time collaboration systems.

In short, Web Sockets and Socket.io are technologies that enable real-time, two-way communication between a client and a server. While Web Sockets provides the communication infrastructure, Socket.io provides an abstraction layer to simplify implementation and provide additional features.
 
### Sass

Sass (Syntactically Awesome Style Sheets) is a web styling language that is an extension of CSS (Cascading Style Sheets). It's designed to make web styling easier, more efficient, and more flexible.

Sass syntax is based on a set of rules and conventions that allow the developer to create more complex styles, keeping the code organized and easy to read. Sass adds a lot of useful functionality to CSS, such as variables, mixins, inheritance, nesting, and functions. These features make the code more modular and reusable, which saves time and reduces the possibility of errors.

Sass variables allow the developer to define values that can be used throughout the code, making it easier to maintain and update styles. Mixins allow the developer to define a set of rules that can be reused throughout the code. Nesting allows the developer to nest CSS rules within other rules, which helps keep the code organized and easy to read. Inheritance allows the developer to create classes that inherit properties from other classes, reducing redundancy in code.

Sass is compiled into CSS, which means it must be processed before being used on a website. There are several tools that can be used to compile Sass, including command line compilers, IDE plugins, and online services. With Sass, the developer can write more efficient and flexible styles, saving time and reducing code complexity.

### Clean Architecture & Domain Driven Design (DDD)

Clean Architecture and Domain Driven Design (DDD) are two approaches to software development that seek to create more scalable, flexible and maintainable systems. While different in their approach, both focus on organizing the code around business concepts and keeping the code clean and decoupled.

Clean Architecture is a software development approach proposed by Robert Martin (Uncle Bob) that focuses on the separation of concepts and the clear definition of boundaries between the different layers of the system. The idea is to create a modular, technology-independent design that can be easily adapted to changing business requirements and technology changes. Clean Architecture is based on a set of principles such as separation of concerns (SoC), dependency inversion (IoC) and object-oriented programming (OOP).

Domain Driven Design, on the other hand, is an approach that focuses on modeling the business domain and creating a rich and expressive domain model. The idea is to create software design that accurately reflects business needs and processes, rather than focusing on technical issues. DDD is based on a set of patterns and practices, such as aggregation, entities, value objects, domain services, and ubiquitous language.

Both approaches seek to create a software design that is flexible, scalable, and easy to maintain. They are especially useful on complex projects and on large teams, where coordination between different parts of the system can be a challenge. By applying Clean Architecture and Domain Driven Design principles, development teams can create systems that are easier to understand, maintain, and evolve.

## :speech_balloon: Explanations

### Factories

Factory Pattern is a software design pattern that belongs to the category of creational patterns. It defines an interface or abstract class for creating objects, but lets subclasses decide which concrete class to implement. In other words, the Factory Pattern is a creation pattern that provides a way to encapsulate the creation of objects in a single place.

The Factory Pattern's goal is to provide a flexible way to create objects without explicitly specifying concrete classes. This allows the code to be more extensible and reusable, as changes to concrete classes only affect Factory code and not code that uses the object created by Factory.

The Factory Pattern is commonly used in situations where the code needs to create objects of different classes but does not know in advance which class to create. The Factory Pattern allows concrete classes to be dynamically created based on the needs of the code.

There are several types of Factory Pattern, including Simple Factory, Factory Method and Abstract Factory. Each of these Factory Pattern types has its own characteristics and specific use cases.

* <strong>Example 1</strong>:

If we have complex logic and we have to create several objects repeatedly with the same logic, we can write the logic once in a function and use that function as a factory to create our objects. It's exactly the same as a real-world product factory.

We have a factory function that will produce new robots with a single logic. Using this we can produce as many objects/robots as we want.

```js
// Function creating new objects 
// without use of 'new' keyword
function createRobot(name) {
  return {
    name: name,
    talk: function () {
      console.log('My name is ' 
      + name + ', the robot.');
    }
  };
}

// Create a robot with name Chitti
const robo1 = createRobot('Chitti');
robo1.talk();
// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot('Chitti 2.O Upgraded');
robo2.talk();
```

> output: 

```
My name is Chitti, the robot.
My name is Chitti 2.0 Upgraded, the robot.
```

<br />

* <strong>Example 2</strong>:

```js
// Factory Function creating person
var Person = function (name, age) {
  // creating person object
  var person = {};

  // parameters as keys to this object  
  person.name = name;
  person.age = age;

  // function to greet
  person.greeting = function () {
      return (
      'Hello I am ' + person.name 
          + '. I am ' + person.age 
          + ' years old. '
      );
  };
  return person;
};

var person1 = Person('Abhishek', 20);
console.log(person1.greeting());

var person2 = Person('Raj', 25);
console.log(person2.greeting());
```

> output: 

```
Hello I am Abhishek. I am 20 years old. 
Hello I am Raj. I am 25 years old. 
```

<br />

### Data Mappers
 
Data Mapper is a design pattern used in object-oriented programming to separate data persistence logic from application business logic.

The idea is that, instead of making an application's business objects know how to persist in a database, this is done by an intermediate layer, the Data Mapper, which is responsible for mapping the business objects into database entities and vice versa.

This separation of responsibilities ensures that business classes don't need to know how information is stored in a database, and it allows the developer to change the database schema without affecting business logic. In addition, the Data Mapper also provides a way to query a database without the business logic needing to know specific details of the query.

In summary, the Data Mapper is a middle layer that allows the business classes to be independent of the data persistence logic, making the code more organized, scalable and easier to maintain.
 
The responsibility of a Mapper is to make all the transformations:

* From Domain to DTO
* From Domain to Persistence
* From Persistence to Domain

I often find myself in situations where a project has a model on both the server and the client, passed through an API, but with such minor differences between the two that it precludes just using a direct read from the JSON or JSON.stringify(). Sometimes a property is collapsed into one from the API but needs to be split into different properties on the client.

Since this concern occurs over and over again, it makes sense to centralize the translation of the <strong>API response object</strong> and <strong>Javascript object model</strong>, standardize it and take it out so that the right part of your application can be concerned with him.

* <strong>Examples</strong>:

```ts
// server/src/mappers/mappers.ts

import { Message } from "../domain/entities/Message";
import { User } from "../domain/entities/User";

interface MessageModelToDomain {
  id: string;
  text: string;
  created_at: Date;
  user_id: string;
  user: User;
}

export interface MessageModelToHttp {
  id: string;
  text: string;
  created_at: Date;
  owner: string;
  user: {
    props: {
      _id: string;
      props: {
        github_id: string;
        name: string;
        avatar_url: string;
        username: string;
      };
    };
  };
}

export class UserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      github_id: user.github_id,
      username: user.username,
      avatar_url: user.avatar_url,
    };
  }
}

export class MessageMapper {
  static toDomain(message: MessageModelToDomain) {
    return new Message({
      text: message.text,
      owner: message.user_id,
      user: new User(message.user!),
    });
  }

  static toHttp(message: MessageModelToHttp) {
    return {
      id: message.id,
      text: message.text,
      created_at: new Date(message.text),
      user_id: message.owner,
      user: {
        id: message.user.props._id,
        name: message.user.props.props.name,
        github_id: message.user.props.props.github_id,
        username: message.user.props.props.username,
        avatar_url: message.user.props.props.avatar_url,
      },
    };
  }
}
```

<br />

### Middlwares

In a software application, middleware is a generic term for an intermediate layer of software that sits between different components or layers of a system, with the purpose of facilitating communication between them and adding specific features and functionality.

In practice, a middleware is a piece of code that can intercept a request or a response before it reaches its final destination. This can be used to perform validations, authentications, request logging, error handling and many other common tasks in an application.

In the architecture of a web application, the middleware is usually implemented in the HTTP server, which can execute a sequence of middlewares before passing the request to the main application. This allows for greater modularity, scalability and code reuse, as the middleware can be used in different parts of the application.

In Express, middlewares are functions that have access to the request and response objects (known as req and res, respectively) and the next middleware function in the application's request-response cycle. The cycle starts when an HTTP request is received and ends when the response is sent.

A middleware in Express can perform one or several tasks, such as:

* Manipulate or validate data in the request
* authenticate users
* Handle errors and exceptions
* Send an HTTP response with a status code, headers, and response body.

The use of middleware in Express is very flexible and can be applied at different levels of the application, such as specific routes, the entire application or groups of routes.

To use a middleware in Express, just create a function that receives three parameters (req, res and next) and call the `next()` method at the end of the code, to pass the request to the next middleware. If you do not call next(), the request will remain pending and the application will not respond.

#### ensureAuthenticated Middleware in the Application

The ensureAuthenticated middleware checks if the user's JWT token exists and if it hasn't expired yet, it's a way to control the requests made to the `GET /profile` and `POST /messages` routes since we don't want to get the data from a user who at least has an authentication token, for that he must go through the `/authenticate` route that will generate such a token for the user, and such route is free from the ensureAuthenticated middleware. We also want to ensure that only authenticated users can send messages on the platform, so the `POST /messages` route also has middleware. Note that the authentication token is always being sent from the client side via the headers but specifically `authorization`:

```ts
// server/src/infra/http/middleware/ensureAuthenticated.ts

import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({ errorCode: "token.invalid" });
  }

  /**
   * Bearer <token>
   * [0] = Bearer
   * [1] = <token>
   */
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, process.env.JWT_SECRET!) as IPayload;
    req.user_id = sub;
    return next();
  } catch (error) {
    return res.status(401).json({ errorCode: "token.expired" });
  }
}
```

```ts 
// server/src/infra/http/routes.ts

// ...
const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.get(
  "/profile",
  ensureAuthenticated,
  new GetUserByGithubIDController().handle,
);
router.post(
  "/messages",
  ensureAuthenticated,
  new SendMessageController().handle,
);
router.get("/messages/last3", new GetLastThereeMessagesController().handle);

export { router };
```

<br />

### Github Authentication: Web application Flow

The web application flow to authorize users for your app is:

1. Request a user's GitHub identity
2. Users are redirected back to your site by GitHub
3. Your app accesses the API with the user's access token


#### 1. Request a user's GitHub identity

```
GET https://github.com/login/oauth/authorize
```

* <strong>Parameters</strong>
 
> <strong>client_id <i>string Required</i></strong> - The client ID you received from GitHub when you registered.

```tsx
// web/src/contexts/auth.tsx

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=62d1b78795c91cac0855`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('/authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data
    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('/profile').then((response) => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    console.log('hasGithubCode', hasGithubCode);
    console.log('url', url);
    

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode)
      signIn(githubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
```

```tsx
// web/src/components/LoginBox/index.tsx

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24px" />
        Entrar com GitHub
      </a>
    </div>
  )
}
```

### 2. Users are redirected back to your site by GitHub

If the user accepts your request, GitHub redirects back to your site with a temporary code in a `code` parameter as well as the `state` you provided in the previous step in a state parameter. The temporary code will expire after 10 minutes. If the states don't match, then a third party created the request, and you should abort the process.

```
url http://localhost:3000/?code=34be57e5fea1262d6332
```

Exchange this code for an access token:

```
POST https://github.com/login/oauth/access_token
```


```ts
// server/src/infra/http/controllers/authenticate-user-controller.ts

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    
    const usersRepository = new PrismaUsersRepository();
    const service = new RegisterUser(usersRepository);
    try {
      const { code } = req.body;
      const result = await service.execute({ code: code });
      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: false,
        msg: "The code passed is incorrect or expired.",
      });
    }
  }
}
```

```ts
// server/src/domain/repositories/users-repository.ts

import { github_id, User } from '../entities/User'

export abstract class UsersRepository {
  abstract register(code: string): Promise<{token: string, user: User}>
  abstract findByGithubID(id: github_id): Promise<User | null>
}
```

```ts
// server/src/domain/use-cases/register-user.ts

export interface RegisterUserRequest {
  code: string;
}

export interface RegisterUserResponse {
  user: User;
  token: string;
}

export class RegisterUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: RegisterUserRequest): Promise<RegisterUserResponse> {
    const { token, user } = await this.usersRepository.register(request.code);

    return { token, user };
  }
}
```

* <strong>Parameters</strong>
 
> <strong>client_id <i>string Required</i></strong> - The client ID you received from GitHub for your OAuth App.
> <strong>client_secret <i>string	Required</i></strong> - The client secret you received from GitHub for your OAuth App.
> <strong>code <i>string	Required</i></strong> - The code you received as a response to `Step 1`.
 
#### 3. Use the access token to access the API

The access token allows you to make requests to the API on a behalf of a user.

```
Authorization: Bearer OAUTH-TOKEN
GET https://api.github.com/user
```

```ts
// server/src/infra/database/prisma/repositories/prisma-users-repository.ts

export class PrismaUsersRepository implements UsersRepository {
  async register(code: string): Promise<{ token: string; user: User }> {
    const acess_token_url = "https://github.com/login/oauth/access_token";
    const { data } = await axios
      .post<AccessTokenResponse>(acess_token_url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: { Accept: "application/json" },
      })
      .catch((error) => {
        throw new Error("The code passed is incorrect or expired.");
      });

    const res = await axios.get<UserResponse>("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${data.access_token}`,
      },
    });

    const { login: username, id, avatar_url, name } = res.data;

    const userData = await prisma.user.findFirst({
      where: {
        github_id: id.toString(),
      },
    });

    const user =
      userData ??
      (await prisma.user.create({
        data: {
          github_id: id.toString(),
          username,
          avatar_url,
          name,
        },
      }));

    const userInstance = new User(user);

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id,
        expiresIn: "1d",
      },
    );

    return { token, user: userInstance };
  }
}
```

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>

