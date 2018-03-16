// basic javascript file to that adds the navbar to the header, the footer information,
// and adds the legal team when the page has a placeholder for the legal team

$(function(){
  $("header").load("static/nav.html");
  $("footer").load("static/footer.html");
  $("#team-place-holder").load("static/team.html");
});
