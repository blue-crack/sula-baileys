       const { makeWASocket } = require('@thenux/sula-baileys');
       console.log('Package loaded successfully!');

        const sock = makeWASocket({ /* config */ });
        sock.requestPairingCode('94757096717').then(code => console.log('Pairing Code:', code));
       
