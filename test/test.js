import {xxxx} from "../src/index.js";

const xx = new xxxx("", "")
const login = await xx.login()

console.log(login)

const courses = await xx.queryCourse()

console.log(courses)

const course = courses[0] // 做第几个课
const chapters = await xx.getChapters(course)

for (let chapter of chapters) {
    await xx.doChapter(chapter)
}
