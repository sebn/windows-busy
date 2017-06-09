#!/usr/bin/env node

var chokidar = require('chokidar');
var fs = require('fs')
var path = require('path')

var dir = path.resolve('./tmp')
if (!fs.existsSync(dir)) fs.mkdirSync(dir)
var watcher = chokidar.watch('.', {
  cwd: dir
})
watcher.on('raw', (event, path, details) => {
  console.log('Raw event info:', event, path, details);
});
