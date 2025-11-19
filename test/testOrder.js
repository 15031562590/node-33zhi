import {DB, Entry} from "http-core";
import {xxxx} from "../src/index.js";
import {main} from "../src/entry.js";

const db = new DB()
const order = await db.selectByID('18059')
console.log(order)
order.version = 0
order.status = 2

await new Entry(xxxx).test(main, null, order)


