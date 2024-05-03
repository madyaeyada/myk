function func(small) {
  var full = document.getElementById("imgshow");
  console.log(full.getAttribute('src'));
  full.innerHTML = small.innerHTML  
}
func();
