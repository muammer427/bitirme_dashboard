import json
import requests

def get_batch_request(api_key, api_secret, supplier_id, batch_request_id):
    # Trendyol API endpoint URL
    url = f"https://api.trendyol.com/sapigw/suppliers/{supplier_id}/products/batch-requests/{batch_request_id}"
    
    # Request headers
    headers = {
        'User-Agent': '917636 - SelfIntegration',
        'Content-Type': 'application/json'
    }
    
    # Authentication
    auth = (api_key, api_secret)
    
    # Send GET request
    response = requests.get(url, auth=auth, headers=headers)
    
    return response

# Trendyol API bilgileri
supplier_id = "917636"
api_key = 'rsBHmEiBBitroVb4yXSt'
api_secret = 'ConmRKqRFud4910EvX4M'

# Batch request ID
batch_request_id = 'b63e4e46-ed99-452a-9242-6d4448d8313d-1715776061'

# GET isteği yap
response = get_batch_request(api_key, api_secret, supplier_id, batch_request_id)

# Yanıtı daha okunabilir bir formatta yazdır
print(json.dumps(response.json(), indent=4, ensure_ascii=False))
