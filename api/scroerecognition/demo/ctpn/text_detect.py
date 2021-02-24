import numpy as np
# import tensorflow as tf
from demo.ctpn.detectors import TextDetector
from demo.ctpn.model import ctpn
from demo.ctpn.other import draw_boxes
'''
Progressive text is different from recognition-the network structure is cnn+rnn
'''


def text_detect(img):
    # ctpn network detected
    scores, boxes, img = ctpn(img)
    textdetector = TextDetector()
    boxes = textdetector.detect(boxes, scores[:, np.newaxis], img.shape[:2])
    # text_recs, tmp = draw_boxes(img, boxes, caption='im_name', wait=True, is_display=False)
    text_recs, tmp = draw_boxes(
        img, boxes, caption='im_name', wait=True, is_display=True)
    return text_recs, tmp, img
