// photo gallery
  const searchForm = document.getElementById('searchForm');
  var keyword = document.getElementById('keyword');
  let dataTitle = document.querySelector('data-title');
  var images = document.getElementsByTagName('img');

  // document.addEventListener('load', function() {
  searchForm.addEventListener("keyup", function() {
      // var inputWord = keyword.value.toLowerCase();
      for (i=0; i < 12; i++) {
        var imageCapt = document.getElementsByTagName("A")[i].getAttribute("data-title").toLowerCase();
        if (imageCapt.indexOf(keyword.value.toLowerCase()) > -1) {
          images[i].style.display = '';
        } else {
          images[i].style.display = 'none';
          }
      }
  });

  lightbox.option({
    'fitImagesInViewport': true,
    'positionFromTop':	50
  })



// Capture user input, convert to lower case, log to console
// var test = keyword.addEventListener("keyup", function() {
//   var inputWord = keyword.value.toLowerCase();
//   console.log(inputWord);
// });

//loop through captions
// function filterPhoto() {
//   for (i=0; i < 10; i++) {
//     var imageCapt = document.getElementsByTagName("A")[i].getAttribute("data-title");
//     imageCapt = imageCapt.toLowerCase();
//     console.log(imageCapt);
//   }
//   // if (caption.includes(test)) {
//   //   console.log("inludes?");
//   // }
// }

//example of searchfilter
// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('keyword');
//   filter = input.value.toUpperCase();
//   textCaption = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');
//
//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
