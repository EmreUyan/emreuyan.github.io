var sites = [
  '../index.html',
  '../sayfa/fpschess.html'
];

function randomSite() {
  var i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}