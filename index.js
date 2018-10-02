function createPost() {
  // create templates
  var pageTemp = _.template(document.getElementById("page-template").innerHTML);
  var postTemp = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemp = _.template(document.getElementById("comments-template").innerHTML);

  // grab blog content
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
}
