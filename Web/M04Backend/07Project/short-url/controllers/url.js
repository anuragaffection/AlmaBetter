
const shortid = require('shortid');
const url = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    if (!body.url) return res.status(400).json({
        error: 'url is required '
    })

    const shortId = shortid()

    await url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.render('home', {
        id: shortId
    });
}


async function handleRedirectUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                },
            }
        }
    )
    res.redirect(entry.redirectUrl)
}


async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await url.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleRedirectUrl,
    handleGetAnalytics
}