const puppeteer = require("puppeteer")
const Processor = require("./processor")

class Spider {
  constructor() {
    this.pagePool = []
    this.watingUrl = []
    this.followedUrl = new Set()
    this.MAX_PAGE_NUM = 10
    this.processor = new Processor()
  }

  async start() {
    this.browser = await puppeteer.launch({
      headless: false,
      slowMo: 1000
    })
    const page = await this.browser.newPage()
    this.pagePool.push({
      page,
      done: false
    })
    this.watingUrl.push("https://www.lagou.com/")
    while (this.watingUrl.length > 0) {
      const url = this.watingUrl.pop()
      const content = await page.goto(url)
      this.followedUrl.add(url)

      this.processor.process({
        url,
        content
      })
      const urls = await page.evaluate(() => {
        const links = document.querySelectorAll('a')
        return Object.values(links).map(link => {
          return link.href
        })
      })
      this.watingUrl = this.watingUrl.concat(this.findValidateUrls(urls))
    }
  }

  findValidateUrls(urls) {
    if (urls)
      return urls.filter(url => {
        return url && !this.followedUrl.has(url) && /^https:\/\/www.lagou.com.*/.test(url)
      })
    return []
  }

  shouldFollow(url) {
    if (!(url in readedUrl) && /.*lagou.com*./.test(url))
      return true;
    return false;
  }
}

module.exports = {
  Spider
}