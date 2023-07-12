#!/bin/bash

json='['

shopt -s globstar

# Iterate over all Markdown files recursively.
for markdown_file in ./**/*.md; do
  html_file="${markdown_file%.md}.html"
  
  # Replace the local path with the /blog/ URL path.
  markdown_file_path="${markdown_file/.\//\/blog\/}"
  
  # Replace .md with .html in markdown_file_path.
  html_file_path="${markdown_file_path%.md}.html"
  
  # Extract the first line from the markdown file.
  # Replace the markdown syntax if it exists.
  title=$(head -n 1 "$markdown_file" | sed 's/^# //')
  
  # Extract the parent directory name from the markdown file path.
  tag=$(basename $(dirname "$markdown_file"))
  
  # Read the HTML template and replace ##FILE_NAME## with the markdown file path.
  sed "s|##FILE_NAME##|${markdown_file_path}|g" template.html > "$html_file"
  
  # Append the HTML file path, title, and tag to the JSON string.
  json=$json'{"post": "'${html_file_path}'", "title": "'${title}'", "tag": "'${tag}'"},'
done

# Remove the last comma.
json=${json::-1}
json=$json']'

# Output the JSON string to a file.
echo $json > ./posts.json
