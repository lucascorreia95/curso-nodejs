"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost/meat-api'
    },
    security: {
        saltRounds: process.env.SALT_ROUND || 10,
        apiSecret: process.env.API_SECRET || 'meat-api-secret',
        enableHTTPS: process.env.ENABLE_HTTPS || false,
        certificate: process.env.CERTI_HTTPS || '../security/keys/cert.pem',
        key: process.env.CERTI_KEY_FILE || '../security/keys/key.pem'
    }
};
