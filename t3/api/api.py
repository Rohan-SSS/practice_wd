from flask import Flask
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

@app.route('/time')
def get_current_time():
    return {
        'time':time.time()
    }

@app.route('/predict')
def get_predictions():
    # Generate some data
    x, y = get_preds()
    
    # # Create a new plot
    # fig = Figure()
    # axis = fig.add_subplot(1, 1, 1)
    # axis.plot(xyz(x, y))

    # # Set axis labels and title
    # axis.set_xlabel('Index')
    # axis.set_ylabel('Value')
    # axis.set_title('Model Predictions vs. True Labels')

    # # Render the plot as an image
    # canvas = FigureCanvas(fig)
    # img = io.BytesIO()
    # fig.savefig(img)
    # img.seek(0)

    # # Serve the image in a web page
    # return send_file(img, mimetype='image/png')
    data = {'x': x.tolist(), 'y': y.tolist()}
    return str(data)