from bs4 import BeautifulSoup
import markdown, os, json, sys

cssroute = sys.argv[1]
htmlroute = sys.argv[2]

def convert_md_to_html(folder, subfolder):
  try:

    for file in os.listdir(folder):

      filename, ext = os.path.splitext(file)

      if ext == ".md":
        with open(f"{folder}/{file}", 'r') as f:
            text = f.read()
            html = markdown.markdown(text, extensions=['attr_list'])

        with open(f"html/{subfolder}/{filename}.html", 'w+') as f:
            f.write(html)

  except OSError as e:
      print(f"custom error: {e}")


def build_blog_index():

  with open('posts.json', 'r') as file:
    posts = json.load(file)

  with open("html/blog.html", "w+") as blog_index:
    for post in posts:
      blog_index.write("<div class='post-card'>"
        + f"<h3><a href='./blog/{post["file_name"]}'>{post["title"]}</a></h3>"
        + f"<p>Date: {post["date"]}</p>"
        + f"<p>{post["tagline"]}</p>"
        + "</div>")



def build(folder):

  for body in os.listdir(folder):

    if not os.path.isdir(f"./{folder}/" + body):
      with open("index.html", "r") as file:
        html = BeautifulSoup(file, "html.parser")
        main_content = html.find("div", id="main-content")

        with open(f"{folder}/{body}", "r") as inner_file:
          inner_file_html = BeautifulSoup(inner_file, "html.parser")
          main_content.insert(0, inner_file_html)

        with open(f"{folder}/{body}", "w") as inner_file:
          html_str = str(html.prettify(formatter="minimal"))
          html_str = html_str.replace("{cssroute}", cssroute).replace("{htmlroute}", htmlroute)
          inner_file.write(html_str)



convert_md_to_html("markdown_docs", ".")
convert_md_to_html("blog_posts", "blog")
build_blog_index()
build("html")
build("html/blog")

