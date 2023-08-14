import requests
import shutil

url = 'http://cdn.islamic.network/quran/images/24_35.png'
filename = 'image.png'

response = requests.get(url, stream=True)

with open(filename, 'wb') as out_file:
    shutil.copyfileobj(response.raw, out_file)

del response