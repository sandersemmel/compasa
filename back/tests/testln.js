import fs from 'fs';
import request from 'request';
//const fs = require('fs');
//const request = require('request');
const macaroon = fs.readFileSync('/Users/sander/.polar/networks/1/volumes/lnd/alice/data/chain/bitcoin/regtest/admin.macaroon').toString('hex');
let options = {
  url: 'https://localhost:8081/v1/state',
  // Work-around for self-signed certificates.
  rejectUnauthorized: false,
  json: true, 
  headers: {
    'Grpc-Metadata-macaroon': macaroon,
  },
}
request.get(options, function(error, response, body) {
  console.log(body);
});
// Console output:
//  { 
//      "state": <lnrpcWalletState>, 
//  }