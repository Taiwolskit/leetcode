# Read from the file words.txt and output the word frequency list to stdout.
grep -o -E '\w+' words.txt | sort | uniq -c | sort -r | sed -r 's/\s+([0-9]+) ([a-z]+)/\2 \1/'
