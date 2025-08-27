function load(file) {
  $(".main-content").load(file);

  filename = file.split("/").pop().split(".")[0]
  console.log(filename)

  link = document.getElementById("current-page")
  link.setAttribute("href", `/css/${filename}.css`)
}