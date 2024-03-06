var homeContainer = document.getElementsByClassName('homeContainer')[0];

/* create a small window with Google Streetview set to a random location in the world, allow the user to guess where that is */
var streetview = document.createElement('iframe');
streetview.src = 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1459098181237!6m8!1m7!1sL4pXQXZ-QzqXQXZ-QzqXQ!2m2!1d-33.8674869!2d151.2069902!3f0!4f0!5f0.7820865974627469';
streetview.width = '600';
streetview.height = '450';
streetview.frameborder = '0';
streetview.style = 'border:0';
streetview.allowfullscreen = '';
document.body.appendChild(streetview);

var map = document.createElement('iframe');
map.src = 'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1459098181237!6m8!1m7!1sL4pXQXZ-QzqXQXZ-QzqXQXZ-QzqXQ!2m2!1d-33.8674869!2d151.2069902!3f0!4f0!5f0.7820865974627469';
map.width = '600';
map.height = '450';
map.frameborder = '0';
map.style = 'border:0';
map.allowfullscreen = '';
document.body.appendChild(map);