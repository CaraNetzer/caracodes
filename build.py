from bs4 import BeautifulSoup
import markdown, os

def convert_md_to_html():
  try:

    for file in os.listdir("markdown_docs"):

      filename, ext = os.path.splitext(file)

      if ext == ".md":
        with open(f"markdown_docs/{file}", 'r') as f:
            text = f.read()
            html = markdown.markdown(text, extensions=['attr_list'])

        with open(f"html/{filename}.html", 'w') as f:
            f.write(html)

  except OSError as e:
      print(f"custom error: {e}")

def build():
  convert_md_to_html()

  for body in os.listdir("html"):

    with open("index.html", "r") as file:
      html = BeautifulSoup(file, "html.parser")
      main_content = html.find("div", id="main-content")

      with open(f"html/{body}", "r") as inner_file:
        inner_file_html = BeautifulSoup(inner_file, "html.parser")
        main_content.insert(0, inner_file_html)

      with open(f"html/{body}", "w") as inner_file:
        inner_file.write(str(html.prettify(formatter="minimal")))

build()

