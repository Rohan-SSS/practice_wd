from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")     # dynamic pages
@app.route("/home")
# def test_me():
#     return "<h1>ha badiya bhai</h1>"
# @app.route("/about/<username>") # any string can e given rather than hardcoding every route
# def about_page(username):
#     return f"<h1>About page of {username}</h1>"
def home_page():
    return render_template('home.html')


@app.route("/market")
def market_page():
    items = [    {'id': 1, 'name': 'Phone', 'barcode': '893212299897', 'price': 500},    {'id': 2, 'name': 'Laptop', 'barcode': '123985473165', 'price': 900},    {'id': 3, 'name': 'Keyboard', 'barcode': '231985128446', 'price': 150},    {'id': 4, 'name': 'Mouse', 'barcode': '218573671235', 'price': 50},    {'id': 5, 'name': 'Headphones', 'barcode': '219865143567', 'price': 100},    {'id': 6, 'name': 'Smartwatch', 'barcode': '128765432198', 'price': 200},    {'id': 7, 'name': 'Tablet', 'barcode': '178653421987', 'price': 350},    {'id': 8, 'name': 'Printer', 'barcode': '187654321238', 'price': 250},    {'id': 9, 'name': 'External Hard Drive', 'barcode': '128765432198', 'price': 120},    {'id': 10, 'name': 'Wireless Router', 'barcode': '198765432187', 'price': 80},    {'id': 11, 'name': 'Smart Speaker', 'barcode': '218743765321', 'price': 150},    {'id': 12, 'name': 'Virtual Reality Headset', 'barcode': '178945632187', 'price': 400},    {'id': 13, 'name': 'Gaming Mouse', 'barcode': '197865432187', 'price': 70},    {'id': 14, 'name': 'Gaming Keyboard', 'barcode': '187654321987', 'price': 120},    {'id': 15, 'name': 'Gaming Headset', 'barcode': '217896543218', 'price': 150},    {'id': 16, 'name': 'Smart Thermostat', 'barcode': '178654329871', 'price': 120},    {'id': 17, 'name': 'Security Camera', 'barcode': '219876543219', 'price': 100},    {'id': 18, 'name': 'Fitness Tracker', 'barcode': '187654321876', 'price': 80},    {'id': 19, 'name': 'Wireless Earbuds', 'barcode': '219876543219', 'price': 90},    {'id': 20, 'name': 'Portable Charger', 'barcode': '187654321897', 'price': 40}]
    return render_template('market.html', items=items)


if __name__ == '__main__':
    app.run(debug=True)