import HomeComponent from './components/home/home-component.js';
import AboutMeComponent from './components/about-me/about-me-component.js';
import ContactMeComponent from './components/contact-me/contact-me-component.js';
import ProjectsComponent from './components/projects/projects-component.js';

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}
const router = async () => {
  const routes =[
    { path: "/", view: HomeComponent},
    { path: "/about-me", view: AboutMeComponent},
    { path: "/contact-me", view: ContactMeComponent},
    { path: "/projects", view: ProjectsComponent}
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
      console.log('--------------', e.target.href);
      navigateTo(e.target.href);
    }
    else{
      console.log('Else--------------', e.target.href);
    }
  })

  router();
});

$('.navbar-toggler').click(function () {
  if ($('.navbar').hasClass('menu-expand')) {
    $('#app').removeClass('content-menu-expand');
    $('.navbar').removeClass('menu-expand');
  } else {
    $('.navbar').addClass('menu-expand');
    $('#app').addClass('content-menu-expand');
  }
});
