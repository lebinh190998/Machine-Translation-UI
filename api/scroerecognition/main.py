import flask
import ocr

app = flask.Flask("__main__")

@app.route('/')
def my_index():
    return flask.render_template("index.html", token="Hello Flask")

@app.route('/api/<img>', methods=['GET'])
def api(img):
     
    image = cv2.imread(file)

    t = time.time()
    result, image_framed = ocr.model(image)
    print("Mission complete, it took {:.3f}s".format(time.time() - t))
    print("\n Recognition Result: \n")
    for key in result:
        print(result[key][1])
    return result[key][1]
    

app.run(debug=True)