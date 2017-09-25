const puppeteer = require("puppeteer")

class Spider {
    constructor() {
        this.pagePool = []
        this.watingUrl = []
        this.followedUrl = []
        this.MAX_PAGE_NUM = 10
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
            this.process({
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

    process({
        url,
        content
    }) {
        switch (url) {
            case /.*lagou.com\/jobs\/\d.html/:
                this.handleJobInfo(content)
                break;
            case /.*lagou.com\/gongsi\/\d.html/:
                this.handleCompanyInfo(content)
                break;
        }
    }

    handleJobInfo(content) {
        console.log(content)
    }

    handleCompanyInfo(content) {
        console.log(content)
    }

    findValidateUrls(urls) {
        if (urls)
            return urls.filter(url => !(url in this.followedUrl) && /.*lagou.com.*/.test(url))
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