const passport=require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GOOGLE_CLIENT_ID="86571725022-nte83du45ntuu9a2o9vdc09lbgmp55ra.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://quiz-maker12.herokuapp.com/google/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user,done)=>{
  done(null,user);
});

passport.deserializeUser((user,done)=>{
  done(null,user);
})


