// import letsencrypt from 'letsencrypt-express';

const lex = require('greenlock-express').create({
  configDir: '/etc/letsencrypt/live/jadoochat.standard.kr',
  server: 'https://acme-v01.api.letsencrypt.org/directory',
  challenges: { // 뭘까
    'tls-sni-01': require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' }),
  },
  approveDomains: (opts, certs, cb) => {
    if (certs) {
      opts.domains = ['jadoochat.standard.kr'];
    } else {
      opts.email = '01022267466@arreo.com';
      opts.agreeTos = true;
    }
    cb(null, { options: opts, certs });
  },
  renewWithin: 81 * 24 * 60 * 60 * 1000,
  renewBy: 80 * 24 * 60 * 60 * 1000,
});

export default lex;
