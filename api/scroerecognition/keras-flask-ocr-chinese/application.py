import os
import sys
sys.path.append(r"C:\Users\tinnvt\Documents\project_CV_NLP\Computer_Vision\scroerecognition\ocr.py")
import ocr
import cv2
import time
from flask import Flask, request, send_from_directory, render_template
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['jpg'])

UPLOAD_FOLDER = 'uploads'


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def predict(file):
    image = cv2.imread(file)

    t = time.time()
    result, image_framed = ocr.model(image)
    print("Mission complete, it took {:.3f}s".format(time.time() - t))
    print("\n Recognition Result: \n")
    for key in result:
        print(result[key][1])
    return result[key][1]


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route("/")
def template_test():
    return render_template('home.html', label='', imagesource='file://null')


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            output = predict(file_path)
    return render_template("home.html", label=output, imagesource=file_path)


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)


if __name__ == "__main__":
    app.run(debug=False, threaded=False, port=6000)
