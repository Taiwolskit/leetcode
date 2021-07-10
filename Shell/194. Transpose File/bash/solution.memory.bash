# Read from the file file.txt and print its transposed content to stdout.
while IFS=' ' read -a l; do
    for i in ${!l[@]}; do
        a[i]="${a[i]} ${l[i]}"
    done
done <file.txt
for i in ${!a[@]}; do
    echo ${a[i]}
done
