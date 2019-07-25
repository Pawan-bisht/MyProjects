const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./keys');
const User = require('../models/user');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
            //options for clinet ID and client Secrets
            callbackURL:'/auth/google/redirect',
            clientID:keys.google.clientID,
            clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    // accessToken : this is we receive from google if we want to go back and
    //               say alter the user profile and read their email we got it from google
    // refreshToken : this is require to refresh the access token bcoz accesstoken exprires 
    //                after a certain amount of time
    //profile       : this is the information that paasport that comes back with. Its take the
    //                  code to googleand brings back the profile info.
    //done          : this is a function called when we are done with this whole callback.

    
    //callback function fired at when code is exchnaged
    console.log(profile);
    User.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser)
        {
            console.log('Yes We found It!!!!!');
            console.log(currentUser);
            done(null, currentUser);
        }
            
        else
        {
            new User({
                googleId: profile.id,
                username: profile.displayName
            }).save().then((newUser) => {
                console.log('new user created: ', newUser);
                done(null, newUser);
            });
        }    
    }
    )
})
);