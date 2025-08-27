#!/usr/bin/env python

import markdown, os

dir = os.getcwd()

try:

  for file in os.listdir(dir):

    filename, ext = os.path.splitext(file)

    if ext == ".md":
      with open(file, 'r') as f:
          text = f.read()
          html = markdown.markdown(text, extensions=['attr_list'])

      with open(f"../html/{filename}.html", 'w') as f:
          f.write(html)

except OSError as e:
    print(e)