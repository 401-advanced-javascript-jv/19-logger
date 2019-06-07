'use strict';

const QClient = require('@nmq/q/client');

const database = new QClient('database');
const file = new QClient('file');

const databaseEvents = {
  post: 'post',
  get: 'get',
  put: 'put',
  delete: 'delete',
  patch: 'patch',
  error: 'error',
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
