const apiKeyMiddleware = (req, res, next) =>{
    const apikey = req.headers['api-key']

    if(!apikey || apikey !== process.env.API_KEY)
    {
        return res.status(401).json({ error: 'Invalid API key' })
    }
    next()
}

module.exports = apiKeyMiddleware