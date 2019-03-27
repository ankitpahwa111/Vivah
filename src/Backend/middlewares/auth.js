const { verifyJwt } = require('../utils/jwt')

async function userAuthViaToken(req, res, next) {
  
  const auth = req.header('Authorization')
  if (!auth) {
    return res.status(403).send({
      errors: {
        body: [
          'Only for logged in users'
        ]
      }
    })
  }

  if (!auth.startsWith('Token')) {
    return res.status(400).send({
      errors: {
        body: [
          'Authorization format not supported'
        ]
      }
    })
  }

  const token = auth.substr(6)
  try {
    const user = await verifyJwt(token)
    req.body.email = user.email;
    req.body.gender = user.gender;
    req.body.password = user.password;
    req.body.username = user.username;
    console.log(user);
    return next()
  } catch (err) {
    res.status(403).send({
      errors: {
        body: [
          'JWT verification failed'
        ]
      }
    })
  }

}

module.exports = {
  userAuthViaToken
}