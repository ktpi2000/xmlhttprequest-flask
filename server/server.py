from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.debug = True

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print(request.get_data().decode('utf-8'))
        return 'good'
    return 'goooooood'

if __name__ == '__main__':
    app.run()
