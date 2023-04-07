from flask import Flask, render_template, send_file
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
import io

import time
from predict import *
from test import *

app = Flask(__name__)
@app.route('/')
def works():
    return "it works"


@app.route('/predict')
def get_predictions():
    x, y = get_preds()
    data = {'x': x.tolist(), 'y': y.tolist()}
    
    return str(data)