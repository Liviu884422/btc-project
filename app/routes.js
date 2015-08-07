module.exports = function(app,passport) {
  app.get('/',isLoggedIn,function(request,response) {
    response.render('index');
  });
  app.get('/profile',isLoggedIn,function(request,response) {
    response.render('profile', {
      user: request.user
    });
  });
  app.get('/logout',function(request,response) {
    request.logout();
    response.redirect('/');
  });
  app.post('/signup',passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
  }));
  app.get('/signup',function(request,response) {
    return response.render('signup', {
      err: request.flash('signupMessage')
      });
  });
  app.post('/login',passport.authenticate('local-login',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash: true
  }));
  app.get('/login',function(request,response) {
    return response.render('login', {
      err: request.flash('loginMessage')
      });
  });
  app.get('/signout',function(request,response) {
    request.logout();
    response.redirect('/');
  });
  app.get('/portal',function(request,response) {
    return response.render('portal')
  });

};

function isLoggedIn(request,response,next) {
  if(request.isAuthenticated()) {
    return next()
  }
  response.redirect('/portal');
};
