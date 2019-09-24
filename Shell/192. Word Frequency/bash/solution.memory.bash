# Read from the file words.txt and output the word frequency list to stdout.
sed -ze 's/\s\s*/\n/g' words.txt | sort | uniq -c | sort -r -n | sed -e 's/^ *\([0-9]\+\) *\(.*\)$/\2 \1/'