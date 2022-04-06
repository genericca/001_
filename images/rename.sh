#! /bin/bash

i=0;
prefix="gochi_";
for image in image_*; do
    mv -- $image "$prefix$i.png";
    let i++;
done
