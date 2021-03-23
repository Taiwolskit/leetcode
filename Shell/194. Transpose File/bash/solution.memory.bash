# Read from the file file.txt and print its transposed content to stdout.
#!/bin/bash

head -1 file.txt | wc -w | xargs seq | xargs -n1 -I{} sh -c "cut -d' ' -f{} file.txt | xargs"
