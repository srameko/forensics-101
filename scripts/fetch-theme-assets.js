#!/usr/bin/env node
const https = require('https')
const fs = require('fs')
const path = require('path')

const url = 'https://raw.githubusercontent.com/srameko/czechitas-cybersecurity-slidev-template/main/theme/assets/czechitas_lidi.png'
const outPath = path.join(__dirname, '..', 'theme', 'assets', 'czechitas_lidi.png')

async function main() {
  try {
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    if (fs.existsSync(outPath)) {
      console.log(`${outPath} already exists, skipping download.`)
      return
    }
    console.log(`Downloading ${url} -> ${outPath}`)
    const file = fs.createWriteStream(outPath)
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${url}: ${res.statusCode}`)
        process.exitCode = 1
        res.resume()
        return
      }
      res.pipe(file)
      file.on('finish', () => {
        file.close()
        console.log('Download complete')
      })
    }).on('error', (err) => {
      console.error('Download error', err)
      process.exitCode = 1
    })
  } catch (err) {
    console.error('Error', err)
    process.exitCode = 1
  }
}

main()
