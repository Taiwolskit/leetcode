# Read from the file file.txt and print its transposed content to stdout.
head -1 file.txt | wc -w | xargs seq 1 | xargs -I{} -n 1 sh -c "cut -d ' ' -f{} file.txt | paste -sd ' ' -"
