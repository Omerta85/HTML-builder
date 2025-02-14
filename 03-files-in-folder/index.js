const { readdir, stat } = require('fs');
const { join, parse, extname } = require('path');
const { stdout } = require('process');

const pathFile = join(__dirname, 'secret-folder');

stdout.write('Інформація про файли:\n');

readdir(pathFile, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach((item) => {
    if (item.isFile()) {
      stat(pathFile + '/' + item.name, (err, stats) => {
        if (err) throw err;

        console.log(
          parse(item.name).name +
            ' ' +
            '-' +
            ' ' +
            (extname(item.name).slice(1)) +
            ' ' +
            '-' +
            ' ' +
            stats.size / 1000 +
            'kb'
        );
      });
    }
  });
});