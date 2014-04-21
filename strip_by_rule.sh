#!/bin/sh

mode=$1
input_filename=$2
output_filename=$3

RULE_MARKER=PACKAGING_RULE

if [ x"$mode" = "x" ]; then
    echo "Must give command mode, use [strip|remove|above]"
    exit 1
fi

if [ x"$input_filename" = "x" ]; then
    echo "No input filename given"
    exit 1
fi

if [ x"$output_filename" = "x" ]; then
    echo "No output filename given"
    exit 1
fi

line_no=`grep -n ${RULE_MARKER} ${input_filename} | cut -d: -f 1`

if [ x"$line_no" = "x" ]; then
    # String not found, just copy the file
    cp ${input_filename} ${output_filename}
    exit 0
fi

if [ x"$mode" = "xstrip" ]; then
    sed -e "$line_no,\$d" ${input_filename} > ${output_filename}
elif [ x"$mode" = "xabove" ]; then
    sed -e "1,${line_no}d" ${input_filename} > ${output_filename}
elif [ x"$mode" = "xremove" ]; then
    sed -e "${line_no}d" ${input_filename} > ${output_filename}
else
    echo "Unknown mode $mode"
    exit 1
fi
