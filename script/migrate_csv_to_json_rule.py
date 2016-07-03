#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import json
import csv
import os


def parse_args():
    parser = argparse.ArgumentParser(description="Migration csv to json rule database.")
    parser.add_argument('--csv', required=True, help='Specify a path of csv file to migrate.')
    parser.add_argument('--output', default="out.csv", help='Specify a path of output file with generate stuff.')
    _parser = parser.parse_args()
    return _parser


def parse_csv(parser):
    """
    Parser csv file and generate python object.
    :param parser: argument application parser
    :return: representation object of csv parsing
    """
    if not os.path.isfile(parser.csv):
        print("Error, try to open csv file %s, but not exist." % parser.csv)
        return

    with open(parser.csv, newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for row in spamreader:
            print(', '.join(row))

    return {}


def generate_json(parser, serialize_obj):
    with open(parser.output, "w") as json_file:
        json.dump(serialize_obj, json_file)


if __name__ == '__main__':
    args = parse_args()
    obj = parse_csv(args)
    generate_json(args, obj)
