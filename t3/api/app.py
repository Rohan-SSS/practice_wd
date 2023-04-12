from flask import Flask, render_template, send_file, jsonify, request
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
import io

import time
import math
from predict import *
from test import *

app = Flask(__name__)

@app.route('/')
def works():
    return "it works"


@app.route('/prediction')
def get_predictions():
    symbol = request.args.get('symbol')
    x, y = get_preds(symbol)
    # data = {'x': x.tolist(), 'y': y.tolist()}
    # last_x = data['x'][-1][-1]
    # last_y = data['y'][-1][-1]
    if x[-1] > 0.25:
        pct = (x[-1] * 100)
        pctc = 100 if pct > 100.00 else pct
        return jsonify({'prediction': pctc})
    elif x[-1] < -0.25:
        pct = (-(x[-1] * 100))
        pctc =  -100 if pct > 100.00 else pct
        return jsonify({'prediction': pctc})
    else:
        return "0"

# @app.route('/get_chart_json')
# def get_chart_json():
#     get_temp_csv()

