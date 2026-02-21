try {
    const app = require('../backend/server');
    module.exports = app;
} catch (error) {
    console.error('Serverless Bootstrap Error:', error);
    module.exports = (req, res) => {
        res.status(500).json({
            message: 'Serverless Bootstrap Error',
            error: error.message,
            stack: process.env.NODE_ENV === 'production' ? null : error.stack
        });
    };
}
