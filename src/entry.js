/**
 * 把main方法单独出来，不用每次在一个文件里翻来翻去，入口主函数
 * @param xx
 * @returns {Promise<void>}
 */
export const main = async (xx) => {
    const {db, order} = xx, course = order.course
    const {finish, total} = await xx.superDoChapter(course)
    // await xx.superDoHomeWork(course)
    if ((finish >= total && total > 0) || (finish === order.finish && order.version >= 3)) { // 全部完成了另外一种是检测了三次，但是没有涨进度
        await db.updateOrdersChapter(order.id, 1, total, finish)
    } else {
        await db.updateOrdersChapter(order.id, 2, total, finish)
    }
}
