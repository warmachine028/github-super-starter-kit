import puppeteer from 'puppeteer'
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const takeSnapShot = async () => {
    const url = 'https://github.com/warmachine028/github-super-starter-kit' // Replace with your actual deployed URL
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto(url)
    await sleep(3000)
    await page.screenshot({ path: '.github/preview.png' })
    await browser.close()
}

takeSnapShot()
