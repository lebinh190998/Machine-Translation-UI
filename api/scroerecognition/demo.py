# -*- coding:utf-8 -*-
import os
import ocr
import time
import shutil
import numpy as np
# from PIL import Image
from glob import glob
import cv2

image_files = glob('./test_images/*.*')

if __name__ == '__main__':
    result_dir = './test_result'
    if os.path.exists(result_dir):
        shutil.rmtree(result_dir)
    os.mkdir(result_dir)

    for image_file in sorted(image_files):
        # oldname_0 = os.path.splitext(image_file)[0]
        # oldname = oldname_0.split("/")[-1]
        print(image_file)
        # image = np.array(Image.open(image_file).convert('RGB'))
        image = cv2.imread(image_file)
        t = time.time()
        result, image_framed = ocr.model(image)
        output_file = os.path.join(result_dir, image_file.split('/')[-1])
        # Image.fromarray(image_framed).save(output_file)
        cv2.imwrite(output_file, image_framed)
        print("Mission complete, it took {:.3f}s".format(time.time() - t))
        print("\n Recognition Result: \n")
        for key in result:
            print(result[key][1])
