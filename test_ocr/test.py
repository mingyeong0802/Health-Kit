import requests
import uuid
import time
import json
import base64

with open("C:\\Users\\user\\OneDrive\\바탕 화면\\4\\capston\\test_ocr\\test_img.png", "rb") as f:
    img = base64.b64encode(f.read())


URL ='your_url'
KEY = 'your_key'

output_file = 'C:\\Users\\user\\OneDrive\\바탕 화면\\4\\capston\\output1.json'

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