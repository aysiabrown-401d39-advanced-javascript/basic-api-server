'ues strict';

const notFoundHandler = (req, res, next) => {
    res.status(404).send(`Could not find what you were looking for.`);
}

module.exports = notFoundHandler;