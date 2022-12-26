# NLW Heat | Domain Driven Design

![banner](banner.png)

> Another project carried out at the Rocketseat event, `Next Level Week - Heat`, in this edition we build an end-to-end application, with
> the purpose of authenticating the user via Github's authentication provider so that the user can send a message about the expectations of the event.
> The application was initially developed following good back-end development practices, such as `separating controller responsibilities into services`,
> as you can see in the `main` branch, but when redoing the project I used `Domain Drive Design` concepts to improve my knowledge of clean architecture.

:arrow_right: Clean Architecture & Domain Drive Design <br />
:arrow_right: Factories and Mappers <br />
:arrow_right: Middlewares <br />
:arrow_right: Github Authentication - Web application Flow <br />

<br />

## Clean Architecture & Domain Drive Design 

A software system that is difficult to develop is unlikely to have a long, healthy lifespan. Therefore, `the architecture` must facilitate the development of this system by the development teams.

### Product, Module and Component

- <strong>Component</strong>

A component is a `single piece`, usually relatively small in scope, possibly general purpose.

Components are units of deployments. `They are the smallest entities that can be deployed as part of a system`, in interpreted languages, they are aggregations of source files. Components can be bundled into a single executable. They can also be bundled into a single file or deployed independently as separate dynamically loaded plugins. In any case, when effectively deployed, well-designed components always retain the ability to be independently deployed and therefore independently developed.

```
Product - application, library, package, service
  Module - GUI, core logic, data, etc...
    Component - purpose specific collection of objects
```

 - <strong>Product</strong>

The product is a functional system that aggregates a collection of modules (the fundamental parts for the functioning of the system).

 - <strong>Module</strong>
 
JavaScript modules are a way for you to share information between files, so all files that import this module will be able to use and benefit from its functions or information that has been exposed. This way, we avoid having to keep loading N files.

```
Shapes             <- Package/Library name
  - Circle.js      <-
  - Rectangle.js   <- Modules that belong to the Shapes package/library
  - Square.js      <-
```

The dynamically linked files, which can be assembled at runtime, are the software components of our architectures. It took 50 years, but we've reached a point where component plugin architecture can be applied as the typical pattern, as opposed to the herculean effort it was in the past.

Teams with different structures require different architectural decisions. On the one hand, a small team of five developers could very well work together to develop a minolithic system with no defined components or interfaces. In fact, this team would likely see architectural frameworks as something of an obstacle during the early days of development. That's probably why so many systems don't have good architecture: they started with none because the team was small and didn't want to face the hassle of a superstructure.

*<i>Clean Architecture By Robert C. Martin</i> <br />

### Main benefits of a good software architecture

In a simple way, we can list the main benefits of software architecture:

 - Risk reduction with information security and systemic interruptions
 - Efficient interaction between different sectors of the company
 - Provision of flexible and high quality solutions
 - Easy integration with different solutions
 - Easy scalability if needed
 - Less impact if there is a need for maintenance

In addition, good practices and requirements related to software architecture allow the development of solutions to be based more easily on the `agile methodology`, facilitating the management of deliveries.

Still on the benefits of software architecture, when looking for a specific modeling that allows combining different components, in order to guarantee the benefits listed above, software architects are based on the so-called architectural vision, which is what guarantees the choice of architecture ideal for the evaluated solution.

For this, the architect evaluates all the architectural options for implementing the application, selecting the set of solutions that will determine the best functioning of the system.

Among the types of software architecture decisions, we have:

 - processing;
 - flow, use cases and business logic;
 - infrastructure;
 - implantation.
 
### Domain Driven Design

When you talk about Domain-Driven Design (DDD), you immediately think of the `architectural model`, the DDD building blocks and related design patterns.

However, to work with DDD we need to develop some more skills, such as learning to model domains effectively, and for that, we need to become what Eric Evans calls `Knowledge Crunchers`, someone prepared to receive, filter and organize a avalanche of information. Domain-Driven Design is, first of all, `communication`. In DDD modeling and implementation go hand in hand. Domain experts (users, analysts, and other domain experts) along with developers and architects work hand in hand with a common goal: to build domain-driven software to meet customer needs.

To do this, in the first place, it is necessary that everyone uses a common language and that there is no translation in the communication between team members. The team therefore develops a ubiquitous (general and universal) language that expresses the knowledge of business experts for the domain model (for the code).

 - <strong>Domain and Model</strong>
 
The domain of a software are the activities performed by the user and their area of ​​interest. The domain can be as complex as the processes and data it comprises.

 - A model is, according to Evans (2004, p. 2) `“a simplification. It is an interpretation of reality that abstracts the relevant aspects to solve the problem in question and ignores extraneous details”.`

With a model we get:

 - `Abstract the complexity of the business` through a simplified representation of it — a model.
 - The model serves as something `common and palpable to all team members`, which, together with the ubiquitous language, allows everyone to actively participate in the progressive construction of the same.
 - The model (provided it is done correctly) `guarantees that what is being specified is what is being implemented`.
 - The model `is the means of communication used by the team`. Thanks to the link between model and implementation, developers can speak in the language of the software when communicating with domain experts (without having to translate the message).
 - The model is distilled knowledge — `it's the way the team agrees to structure the knowledge extracted from the domain`.

`The model is evolving`: With each iteration between domain experts and the technical team, the model becomes deeper and more expressive, richer, and developers transfer this source of value to the software.

Thus, `the model is gradually enriched` with the expertise of domain experts distilled by the developers, making the team gain more and more insight into the business and that knowledge is transferred to the model (to the code) through the building blocks of DDD.

When new business rules are added and existing rules are changed or removed, the implementation is refactored to reflect these model changes in the code.

In the end, the model (which ultimately will be the software) will express the business with a wealth of knowledge.

 - As Evans (2004, p. 23) explains `“DDD puts a lot of knowledge into the model that deeply reflects the domain. This is only possible through collaboration between those who know the domain and those who know how to create software. And because development is iterative, that collaboration continues throughout the life of the project.”`

That is, Domain-Driven Design leads us to build software guided by knowledge and business modeling before any appeal for technology.

Obviously in order for us to successfully implement the domain model, we need engineering.

And, therefore, the DDD `guides us through its building blocks` to use some consecrated architecture principles and design patterns, among them I highlight:

 - Domain isolation with layered architecture.
 - Model representation through well-defined software artifacts (entities, value objects, services, factories, repositories, specs, modules, etc).
 - Lifecycle management of domain objects with aggregates.
 
<strong>The 5 ingredients of an effective model:</strong>

 - Link the model with the implementation: this link is made from the beginning, when the model is still primitive and will be maintained until the end. This bond is deep, the implementation must 100% reflect the model.
 - Cultivate a language based on the model: in the beginning it will be necessary for developers and domain experts to understand each other's terms, but later both will speak the same language, organizing the communication sentences in a structure consistent with the model and without ambiguities.
 - Develop a model rich in knowledge: objects have data and associated behaviors. The model should not just be a data structure (anemic model), it should capture domain knowledge to solve domain problems.
 - Distill the model: the model must be refined. Just as important concepts must be added, concepts that have no relevance must be removed. With each iteration the model will get richer and have more value.
 - Brainstorming and experimentation: direct interaction between developers and domain experts, through brainstorming and on-the-spot diagramming, turns discussions into model labs, in which several variations of experiments can be exercised and the result can be used if it shows value or discarded otherwise.
 
*<i>medium.com/cwi-software/domain-driven-design-do-in%C3%ADcio-ao-c%C3%B3digo-569b23cb3d47</i> <br />

<br />

## Factories and Data Mappers 

 - <strong>Factories</strong>

`Function factory` is similar to constructor functions/class functions, but instead of using new to create an object, factory functions simply `create an object and return it`.

Factory functions are a very useful tool in JavaScript. Factory functions in JavaScript are similar to constructor functions/class functions, but do not require the use of the `this` keyword for inner values ​​or the use of the `new` keyword when instantiating new objects. Factory functions can contain built-in values, methods, etc., just like normal regular functions. Factory functions differ from regular functions in that they always return an object, which will contain any value, method, etc.

### Why is it useful?

If we have `complex logic and we have to create several objects repeatedly with the same logic`, we can write the logic once in a function and use that function as a factory to create our objects. It's exactly the same as a real-world product factory.

Example 1:

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

//Create a robot with name Chitti
const robo1 = createRobot('Chitti');
robo1.talk();
// Create a robot with name Chitti 2.O Upgraded
const robo2 = createRobot('Chitti 2.O Upgraded');
robo2.talk();
```

output: 

```
My name is Chitti, the robot.
My name is Chitti 2.0 Upgraded, the robot.
```

example 2:

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

output: 

```
Hello I am Abhishek. I am 20 years old. 
Hello I am Raj. I am 25 years old. 
```

 - <strong>Data Mappers</strong>
 
The responsibility of a Mapper is to make all the transformations:

 - From Domain to DTO
 - From Domain to Persistence
 - From Persistence to Domain

I often find myself in situations where a project has a model on both the server and the client, passed through an API, but with such minor differences between the two that it precludes just using a direct read from the JSON or JSON.stringify (). Sometimes a property is collapsed into one from the `API` but needs to be split into different properties on the `client`.

Since this concern occurs over and over again, it makes sense to centralize the `translation` of the `API response object <==> Javascript object model`, `standardize` it and take it out so that the right part of your application can be concerned with him.

 - Examples

```ts
// src/mappers/mappers.ts

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

## Middlewares 

Middleware is software that different `applications use to communicate with each other`. It provides functionality to intelligently and efficiently connect applications so you can innovate faster. Middleware `acts as a bridge between diverse technologies`, tools and databases to integrate them seamlessly into a single system. The single system offers a unified service to its users. For example, a Windows frontend application sends and receives data from a Linux backend server, but the application's users are unaware of the difference.

 - <strong>Software development</strong>

Software developers use middleware to integrate different software components into other applications. The middleware offers an application programming interface (API) standard to manage the necessary input and output of data from the component. The internal binding with the component is not visible to the user. Developers use APIs to request necessary services from software components.

 - <strong>Data transmission</strong>

Software applications use middleware to reliably send and receive data streams. Data streams are a high-speed transmission of continuous data. They are important for reliable video and audio transmissions.

### Using middlewares with Express

Express is a web-based routing and middleware framework that has minimal functionality of its own: `An Express application is essentially a series of calls to middleware functions`.

Middleware functions are functions that have access to the `request (req) object`, the `response (res) object`, and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable called `next`.

Middleware functions can perform the following tasks:

 - Run any code.
 - Make changes to the request and response objects.
 - Terminate the request-response cycle.
 - Call the next middleware function on the stack.

If the current middleware function does not finish the request-response cycle, it needs to call `next()` to pass control to the next middleware function. Otherwise, the request will be suspended.

An Express application can use the following types of middleware:
 
 - Application-level middleware
 - Router-grade middleware
 - Error handling middleware
 - Integrated middleware
 - Third Party Middleware

You can load both router-level and application-level middleware with an optional mount path. It is also possible to load a number of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

#### Application-level middleware

Bind application-level middleware to an instance of the `app object` using the `app.use()` and `app.METHOD()` functions, `where METHOD is the HTTP method of the request` that the middleware function handles (such as GET, PUT, or POST) in lower case.

This example shows a middleware function without an mount path. `The function runs whenever the application receives a request`.

```js
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```

This example shows a middleware role built into the path `/user/:id`. The function runs for any type of HTTP request in the `/user/:id` path.

```js
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```

To skip the rest of the middleware functions of a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will only work on middleware functions that are loaded using the app.METHOD() or router.METHOD() functions.

This example shows a middleware sub-stack that handles GET requests on the path /user/:id.

```js
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special');
});
```

#### Router-grade middleware

Router-level middleware works the same as application-level middleware, but `is bound to an instance of express.Router()`.

```js
var router = express.Router();
```

Load router-level middleware using the `router.use()` and `router.METHOD()` functions.

The following example code replicates the middleware system shown above for application-level middleware, using router-level middleware:

```js
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});

// mount the router on the app
app.use('/', router);
```

#### Error handling middleware

> Error handling middleware always takes `four arguments`. You must provide four arguments to identify it as an error-handling middleware function. Even if you don't need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as ordinary middleware and error handling will fail.
 
Define error-handling middleware functions the same way as other middleware functions, except with four arguments instead of three, specifically with the signature `(err, req, res, next)`:

```js
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
*<i>expressjs.com/pt-br/guide/using-middleware.html</i> <br />

### ensureAuthenticated Middleware in the Application

The ensureAuthenticated middleware checks if the user's `JWT token` exists and if it hasn't expired yet, it's a way to control the requests made to the `GET /profile` and `POST /messages` routes since we don't want to get the data from a user who at least has an authentication token, for that he must go through the `/authenticate` route that will generate such a token for the user, and such route is free from the ensureAuthenticated middleware. We also want to ensure that only authenticated users can send messages on the platform, so the `POST /messages` route also has middleware. Note that the authentication token is always being sent from the client side via the headers but specifically `authorization`:

```ts
// src/infra/http/middleware/ensureAuthenticated.ts

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
// src/infra/http/routes.ts

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

## Github Authentication - Web application Flow

The web application flow to authorize users for your app is:

1. Request a user's GitHub identity
2. Users are redirected back to your site by GitHub
3. Your app accesses the API with the user's access token


### 1. Request a user's GitHub identity

```
GET https://github.com/login/oauth/authorize
```

#### Parameters
 
 - <strong>client_id <i>string Required</i></strong> - The client ID you received from GitHub when you registered.

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

#### Parameters
 
 - <strong>client_id <i>string Required</i></strong> - The client ID you received from GitHub for your OAuth App.
 - <strong>client_secret <i>string	Required</i></strong> - The client secret you received from GitHub for your OAuth App.
 - <strong>code <i>string	Required</i></strong> - The code you received as a response to `Step 1`.
 
### 3. Use the access token to access the API

`The access token allows you to make requests to the API on a behalf of a user`.

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

<i>docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow</i> <br />

