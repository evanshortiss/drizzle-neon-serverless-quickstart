import { db } from "./db";
import { Elements } from "./db/schema";

console.log('Fetching elements...')
db.select()
  .from(Elements)
  .then((elements) => console.log(JSON.stringify(elements, null, 2)))
  .catch((err) => console.error(err))
