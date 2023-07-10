#!/bin/bash

shopt -s globstar

# Iterate over all Markdown files recursively.
for markdown_file in ./**/*.md; do
  echo "$markdown_file"
done
