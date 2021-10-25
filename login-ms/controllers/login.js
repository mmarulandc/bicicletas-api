const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '124929819813-l7cvnm7ugtvdtuu91j3ncugh8pj05ovm.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

module.exports.login = async (req, res) => {
  let token = req.body.token;
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
  }
  verify()
  .then(()=>{
      return res.status(200).json({
        token: token,
      })
  })
  .catch(console.error);

}