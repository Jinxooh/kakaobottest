import greenlock from 'greenlock-express';

const lex = greenlock.create({
  configDir: '/etc/letsencrypt/live/jadoochat.standard.kr',
  server: 'production',
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
