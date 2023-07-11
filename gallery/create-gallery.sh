#!/bin/bash

json='['

# Add existing images from the "thumb" folder.
for thumb in ./thumb/*; do
  if [ -f "$thumb" ]; then
    thumb_name=$(basename "$thumb")
    json=$json'{"thumb": "/gallery/thumb/'${thumb_name}'"},'
  fi
done

# Add existing images from the "large" folder.
for image in ./large/*; do
  if [ -f "$image" ]; then
    image_name=$(basename ${image})
    thumb="thumb/${image_name}"
    convert -thumbnail 600 $image $thumb
    json=$json'{"thumb": "/gallery/'${thumb}'"},'
  fi
done

# Remove the last comma.
json=${json::-1}
json=$json']'
echo $json > ./gallery.json
