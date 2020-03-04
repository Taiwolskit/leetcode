# Read from the file file.txt and print its transposed content to stdout.
#!/bin/bash

nlines=$(head -n1 file.txt | tr -s ' ' '\n' | wc -l)
seq 1 $nlines | xargs -I '{}' sh -c "cut -f'{}' -d' ' file.txt | tr -s '\n' ' ' ; printf '\n'" | awk '{$1=$1};1'
