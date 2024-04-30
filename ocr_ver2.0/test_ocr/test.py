import requests
import uuid
import time
import json
import base64
import cv2
import ipdb
path = 'C:\\geumsangLee\\capston\\test_ocr\\img\\test3.png'

click = False
x1,y1,w,h = -1,-1,-1,-1
roi = None

def roi_img(event,x,y,flags,parm):
    global click,image,x1,y1,w,h, roi 
    if event == cv2.EVENT_LBUTTONDOWN: #왼쪽 마우그 버튼 다운(누른다), 드래그 시작
        click = True
        x1,y1 = x,y
    elif event == cv2.EVENT_MOUSEMOVE: #마우스 움직임
        if click:                      #드래그 진행 중 
            img_draw = image.copy()      #사각형 그림 표햔을 위한 이미지 복제 (매번 같은 이미지에 그려지면 이미지가 더러워짐)
            cv2.rectangle(img_draw,(x1,y1),(x,y),(255,0,0),2) #드래그 진행 영역 표시
            cv2.imshow('image',img_draw)
    elif event == cv2.EVENT_LBUTTONUP:   #왼쪽 마우스 버튼 업 (뗀다)
        if click:                         #드래그 중지
            click = False
            w = x -x1                     #드래그 영역 폭 계산
            h = y - y1                    #드래그 영역 높이 계산
            if w > 0 and h >0: #유효한 드래그 영역일 때
                img_draw = image.copy()
                cv2.rectangle(img_draw,(x1,y1),(x,y),(255,0,0),2)
                cv2.imshow('image',img_draw)
                roi = image[y1:y1+h, x1:x1+w]
                cv2.imshow('cropped', roi)
        else:# 드래그 방향이 잘못된 경우 사각형 그림이 없는 원본 이미지 출력
            cv2.imshow('image', image)
            print('좌측 상단에서 우측 하단으로 영역을 드래그하세요.')

image = cv2.imread(path)
cv2.namedWindow("image", cv2.WINDOW_NORMAL)

cv2.imshow("image", image)

cv2.setMouseCallback('image', roi_img)

while True:
    key = cv2.waitKey(1) & 0xFF
    if key == ord('q'): # 'q' 키를 누르면 종료
        break

cv2.destroyAllWindows()

cv2.imwrite('C:\\geumsangLee\\capston\\test_ocr\\roi_img\\roi_img1.png',roi)


path = 'C:\\geumsangLee\\capston\\test_ocr\\roi_img\\'
with open(path + "roi_img1.png", "rb") as f:
    img = base64.b64encode(f.read())

URL = 'https://br2v3ztqo2.apigw.ntruss.com/custom/v1/29704/b24823359e042057eab283525ace201f34c9cd5c8c2a53214a43b5f4dd6b268d/general'
KEY = 'TWNsdFhOQlZTU3JsVEx0R1hxaFRDbXpnblBBYUxmUFE='


output_file = 'C:\\geumsangLee\\capston\\test_ocr\\json_file\\test4.json'

headers = {
    "Content-Type": "application/json",
    "X-OCR-SECRET": KEY
}
    
data = {
    "version": "V1",
    "requestId": "sample_id", # 요청을 구분하기 위한 ID, 사용자가 정의
    "timestamp": 0, # 현재 시간값
    "images": [
        {
            "name": "sample_image",
            "format": "png",
            "data": img.decode('utf-8')
        }
    ]
}
data = json.dumps(data)
response = requests.post(URL, data=data, headers=headers)
res = json.loads(response.text)
print(res)



with open(output_file, 'w', encoding='utf-8') as outfile:
    json.dump(res, outfile, indent=4, ensure_ascii=False)
    
#https://yunwoong.tistory.com/153 추가 참고 블로그
