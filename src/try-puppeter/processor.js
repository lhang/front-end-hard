import Saver = require("./saver")

export default class Processor {
  constructor() {
    super()
    this.saver = new Saver()
  }

  process({
    url,
    content
  }) {
    if (/lagou.com\/jobs\/\d+.html/.test(url)) {
      this.saver.save('jobs', this.handleJobInfo(content))
    } else if (/lagou.com\/gongsi\/\d+.html/.test(url)) {
      this.saver.save('company', this.handleCompanyInfo(content))
    }
  }

  getJobInfo(content) {

  }

  getCompanyInfo(content) {

  }
}