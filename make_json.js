"use strict";
{
  const fs = require('fs');
  const path = require('path');

  const sourceName = process.argv[2];

  const lines = fs.readFileSync(path.join(__dirname, sourceName))
    .toString('utf8')
    .split(/\n+/g)
    .filter( line => line.trim().length > 0 );

  fs.writeFileSync(`${process.argv[3]}.json`, JSON.stringify(lines));
}
