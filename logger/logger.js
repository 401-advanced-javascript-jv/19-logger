'use strict';

const QClient = require('@nmq/q/client');

const database = new QClient('database');
const file = new QClient('file');

const databaseEvents = {
  create: 'create',
  read: 'read',
  update: 'update',
  delete: 'delete',
};

const fileEvents = {
  save: 'save',
  error: 'error',
};

for (let event of Object.keys(databaseEvents)) {
  database.subscribe(databaseEvents[event], (payload) => {
    console.log(`${databaseEvents[event]} happened`, {payload});
  })
}

for (let event of Object.keys(fileEvents)) {
  file.subscribe(fileEvents[event], (payload) => {
    console.log(`${fileEvents[event]} happened`, {payload});
  })
}
