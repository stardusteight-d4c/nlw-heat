import { serveHttp } from "./app";

serveHttp.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`),
);
