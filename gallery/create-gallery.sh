#!/bin/bash

json='['

for image in ./large/*; do
    image_name=$(basename ${image})
    thumb="./thumb/${image_name}"
    convert -thumbnail 200 $image $thumb
    json=$json'{"image": "'${image}'", "thumb": "'${thumb}'"},'
done

json=${json::-1}
json=$json']'
echo $json > ./gallery.json