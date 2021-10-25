const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '124929819813-l7cvnm7ugtvdtuu91j3ncugh8pj05ovm.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

module.exports.checkAuthenticated = (req, res, next) => {
  const token = req.headers.authorization || "";

  let user = {};
  console.log(token);
  async function verify() {
      console.log("entra")
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      });
      const payload = ticket.getPayload();
      user.name = payload.name;
      user.email = payload.email;
      user.picture = payload.picture;
    }
    verify()
    .then(()=>{
        req.user = user;
        next();
    })
    .catch(err=>{
        console.log(err)
        res.redirect('/login')
    })

}