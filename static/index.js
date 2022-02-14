import HomeComponent from './components/home/home-component.js';

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}
const router = async () => {
  const routes =[
    { path: "/", view: HomeComponent}
    // ,
    // { path: "/posts", view: () => console.log("posts")},
    // { path: "/settings", view: () => console.log("set")}
  ];


  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatched: location.pathname === route.path
    }
  });

  window.addEventListener('popstate', router);

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatched);

  if(!match){
    match = {
      route: routes[0],
      isMatched: true
    }
  }

  const view = new match.route.view;
  $('#app').load('./static/components/'+view.getHtml());
};


document.addEventListener("DOMContentLoaded", () => {

  document.body.addEventListener('click', e =>{
    if(e.target.matches('[data-link]')){
      e.preventDefault();
      navigateTo(e.target.href);
    }
  })

  router();
});
