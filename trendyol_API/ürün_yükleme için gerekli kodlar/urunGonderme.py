import requests

def create_products(url, supplier_id, api_key, api_secret, user_agent, product_data):
    headers = {
        'User-Agent': user_agent,
        'Content-Type': 'application/json'
    }
    auth = (api_key, api_secret)
    endpoint = url.format(supplierid=supplier_id)
    response = requests.post(endpoint, auth=auth, headers=headers, json=product_data)
    return response

# Trendyol API endpoint URL
url = 'https://api.trendyol.com/sapigw/suppliers/{supplierid}/v2/products'

# Trendyol API bilgileri
supplier_id = 917636
api_key = 'rsBHmEiBBitroVb4yXSt'
api_secret = 'ConmRKqRFud4910EvX4M'

# Entegrasyon bilgileri
user_agent = '917636 - SelfIntegration'

# Ürün verisi
product_data = {
  "items": [
    {
      "barcode": "barkod-1234",
      "title": "Bebek Takımı Pamuk",
      "productMainId": "1234BT",
      "brandId": 1791,
      "categoryId": 4563,
      "quantity": 100,
      "stockCode": "STK-345",
      "dimensionalWeight": 2,
      "description": "Ürün açıklama bilgisi",
      "currencyType": "TRY",
      "listPrice": 250.99,
      "salePrice": 120.99,
      "vatRate": 20,
      "cargoCompanyId": 10,
      "deliveryOption": {
        "deliveryDuration": 1,
        "fastDeliveryType": "FAST_DELIVERY"
      },
      "images": [
        {
          "url": "https://tr.pinterest.com/pin/26388347805817478/"
        }
      ],
      
    }
  ]
}

response = create_products(url, supplier_id, api_key, api_secret, user_agent, product_data)

if response.status_code == 200:
    print("Ürünler başarıyla oluşturuldu!")
    print("Response:", response.json())
else:
    print("Ürün oluşturma işlemi başarısız oldu.")
    print("Hata kodu:", response.status_code)
    print("Hata mesajı:", response.text)
