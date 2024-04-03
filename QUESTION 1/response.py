import requests

# Prepare request data
request_data = {
    "companyName": "goMart",
    "clientID": "37bb493c-73d3-47ea-8675-21f66ef9b735",
    "clientsecret": "XOy010RPasKWOdAN",
    "ownerName": "Rahul",
    "ownerEmail": "sa5251@srmist.edu.in",
    "rollNo": "RA2111003010510"
}

# Make the POST request
url = "http://20.244.56.144/test/auth"
response = requests.post(url, json=request_data)

# Check response status
if response.status_code == 200:
    print("Request successful")
    # Parse the response
    data = response.json()
    access_token = data["access_token"]
    expires_in = data["expires_in"]
    print("Access token:", access_token)
    print("Expires in:", expires_in)
else:
    print("Request failed. Status code:", response.status_code)
    print("Response content:", response.text)
