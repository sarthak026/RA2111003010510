import requests

url = 'http://20.244.56.144/test/register'

data = {
    'companyName': 'goMart',
    'ownerName': 'Rahul',
    'rollNo': 'RA2111003010510',
    'ownerEmail': 'sa5251@srmist.edu.in',
    'accesscode': 'bntKpm'
}


response = requests.post(url, json=data)

# Check the response
if response.status_code == 200:
    print("POST request was successful.")
else:
    print("POST request failed with status code:", response.status_code)
    print("Response content:", response.text)
