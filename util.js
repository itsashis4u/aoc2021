const fs = require('fs')

function getFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function getFileContentFormatted(filePath) {
  return getFileContent(filePath).split('\n').map(line => line.trim()).filter(line => line.length > 0)
}

module.exports = {
  getFileContent,
  getFileContentFormatted
}
