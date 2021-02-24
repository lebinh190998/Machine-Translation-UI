## Introduction
Implement end-to-end variable length Chinese character detection and recognition based on Tensorflow and Keras

* Text detection: CTPN
* Text recognition: DenseNet + CTC

## Environment deployment
``` Bash
sh setup.sh
```
* Note: You need to comment out the for gpu part and uncomment the for cpu part before executing the CPU environment

## Demo
Put the test images into the test_images directory, and the test results will be saved in test_result

``` Bash
python demo.py
```

## Model training

### CTPN training
See ctpn/README.md for details

### DenseNet + CTC training

#### 1. Data preparation

Data set: https://pan.baidu.com/s/1QkI7kjah8SPHwOQ40rS1Pw (password: lu7m)
* A total of about 3.64 million pictures, divided into training set and validation set according to 99:1
* The data is randomly generated using Chinese corpus (news + classical Chinese) through changes in font, size, grayscale, blur, perspective, and stretching
* 5990 characters including Chinese characters, English letters, numbers and punctuation
* Each sample is fixed with 10 characters, and the characters are randomly intercepted from sentences in the corpus
* The picture resolution is unified to 280x32

After decompression, the image is placed in the train/images directory, and the description file is placed in the train directory

#### 2. Training

``` Bash
cd train
python train.py
```

#### 3. Results

| val acc | predict | model |
| -----------| ---------- | -----------|
| 0.983 | 8ms | 18.9MB |

* GPU: GTX TITAN X
* Keras Backend: Tensorflow

#### 4. Generate your own sample

Refer to [SynthText_Chinese_version](https://github.com/JarveeLee/SynthText_Chinese_version), [TextRecognitionDataGenerator](https://github.com/Belval/TextRecognitionDataGenerator) and [text_renderer](https://github.com/Sanster/ text_renderer)

## Show results

<div>
<img width="420" height="420" src="https://github.com/YCG09/chinese_ocr/blob/master/demo/demo_detect.jpg"/>
<img width="420" height="420" src="https://github.com/YCG09/chinese_ocr/blob/master/demo/demo_rec.jpg"/>
</div>

## Reference

[1] https://github.com/eragonruan/text-detection-ctpn

[2] https://github.com/senlinuc/caffe_ocr

[3] https://github.com/chineseocr/chinese-ocr

[4] https://github.com/xiaomaxiao/keras_ocr