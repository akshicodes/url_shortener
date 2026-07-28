const Url = require('../models/Url');
const shortid = require('shortid');
const validator = require('validator');

exports.createShortUrl = async (req, res) => {
    try{
        const { url } = req.body;
        if(!url){
            return res.status(400).json({
                message: "URL is required"
            });
        }

        if (!validator.isURL(url)) {
            return res.status(400).json({
                message: "Invalid URL",
            });
        }

        const existingUrl = await Url.findOne({
            originalUrl: url,
        });

        if (existingUrl) {
            return res.status(200).json({
    shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`,
});
        }

        const shortCode = shortid.generate();

        const newUrl = new Url({
            originalUrl: url,
            shortCode
        });

        await newUrl.save();

        res.status(201).json({
    shortUrl: `${process.env.BASE_URL}/${shortCode}`,
});

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}

exports.redirectUrl = async (req, res) => {
    try {

        const { shortCode } = req.params;

        const url = await Url.findOne({ shortCode });

        if (!url) {
            return res.status(404).json({
                message: "URL not found"
            });
        }

        url.clicks++;

        await url.save();

        res.redirect(url.originalUrl);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};