const {
    shouldFollow
} = require("./spider")

test("test url follow function", () => {
    expect(shouldFollow('https://www.lagou.com/jobs/288839.html')).toBe(true)
    expect(shouldFollow('https://https://yanzhi.lagou.com/')).toBe(true)
    expect(shouldFollow('http://www.baidu.com')).toBe(false)
})