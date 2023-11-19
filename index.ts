import { runPlayground } from "./playground.js";
import { runServer } from "./server.js";

runServer(() => {
  runPlayground();
})

export { }