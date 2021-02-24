import flask

app = flask.Flask("__main__")

@app.route('/api', methods=['GET'])
def api(img):
    return {
        'title': 'testing',
        'img': img
    }

app.run(debug=True)