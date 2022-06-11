# Next Level Week | Heat

<p align="center">
 <img src = "imgs/DoWhile.svg" width="350" align="center">
</p>

> Application developed from end to end, with a backend API that collects data from messages and users from GitHub. Using Socket.IO to make the server send messages to clients. Using the ORM Prisma to perform the mapping and use of the database, a technique that helps in querying and manipulating database data using an object-oriented paradigm. Finally, we developed the frontend interfaces and their integration with the backend.

### How to run the application?

- To run the application locally, download this repository with a `git clone` command.
- In server and web directory, install dependencies with `npm install` and run with `npm run dev` command.
- Use `npx prisma studio` to view and manipulate the database.

<p align="center">
 <img src = "imgs/preview01.png" width="850" align="center">
</p>

### Why <a href="https://vitejs.dev/" target="_blank">Vite</a>

<p align="center">
 <img src = "imgs/vite.svg" width="150" align="center">
</p>

Before ES modules were available in browsers, developers had no native mechanism for authoring JavaScript in a modularized fashion. This is why we are all familiar with the concept of "bundling": using tools that crawl, process and concatenate our source modules into files that can run in the browser.

Over time we have seen tools like webpack, Rollup and Parcel, which greatly improved the development experience for frontend developers.

However, as we start to build more and more ambitious applications, the amount of JavaScript we are dealing with also increased exponentially. It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with HMR, file edits can take a couple seconds to be reflected in the browser. The slow feedback loop can greatly affect developers' productivity and happiness.

Vite aims to address these issues by leveraging new advancements in the ecosystem: the availability of native ES modules in the browser, and the rise of JavaScript tools written in compile-to-native languages.

> Source: Vite Guide
