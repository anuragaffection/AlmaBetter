const express = require('express')

const {
    handleGenerateNewShortUrl,
    handleRedirectUrl,
    handleGetAnalytics
} = require('../controllers/url')


const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirectUrl);
router.get('/analytics/:shortId', handleGetAnalytics)


module.exports = router;