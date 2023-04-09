import requests
import csv
import json
import tempfile 

from secrets import *

def get_temp_csv(ticker):
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.csv') as temp_file:
        url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol={ticker}&interval=30min&slice=year1month1&adjusted=false&apikey=UI6TB8RX6A5C76DS'
        with requests.Session() as s:
            download = s.get(url)
            decoded_content = download.content.decode('utf-8')
            cr = csv.reader(decoded_content.splitlines(), delimiter=',')
            my_list = list(cr)
        writer = csv.writer(temp_file)
        for row in my_list:
            writer.writerow(row)
        temp_csv = temp_file.name

    return temp_csv

def convert_csv_to_json(csv_path):
    # Read data from the CSV file
    with open(csv_path, mode='r') as csv_file:
        reader = csv.DictReader(csv_file)
        rows = list(reader)

    # Convert the list of dictionaries to a JSON object
    json_data = json.dumps(rows)

    return json_data

