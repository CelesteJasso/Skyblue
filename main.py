from fastapi import FastAPI
from bs4 import BeautifulSoup
from selenium import webdriver
import csv
import json
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/getJSON/")
async def getJSON():
    csvFilePath = r'data.csv'
    jsonFilePath = r'data.json'
    data = csv_to_json(csvFilePath, jsonFilePath)
    return data


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []

    # read csv file
    with open(csvFilePath, encoding='utf-8') as csvf:
        # load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf)

        # convert each csv row into python dict
        for row in csvReader:
            # add this python dict to json array
            jsonArray.append(row)

    # convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonResponse = jsonf.write(jsonString)
    return jsonArray

# obtener webscaping desde trovit


@app.get("/scrapping")
async def root():
    tipo = 'Renta'
    driver = webdriver.Chrome()
    registros = []
    for pagina in range(1, 50):
        url = get_url(pagina, tipo)
        print(url)
        driver.get(url)
        sopa = BeautifulSoup(driver.page_source, 'html.parser')
        resultados = sopa.find_all('div', {'class': 'snippet-content'})
        for tarjeta in resultados:
            registros.append(extraer_datos(tarjeta, tipo))
    driver.close()
    with open(tipo+'s.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['compra_renta', 'tipo', 'precio',
                        'superficie', 'municipio', 'recamaras', 'banios', 'publicado', 'sitio'])
        writer.writerows(registros)
    return registros


# genera url para consultar datos


def get_url(num_pagina, tipo):
    if tipo == 'Venta':
        url = 'https://casas.trovit.com.mx/index.php/cod.search_homes/type.1/what_d.Nuevo%20Leon/origin.2/rooms_min.0/bathrooms_min.0/region.Nuevo%20León/order_by.relevance/resultsPerPage.25/isUserSearch.1/page.'
    if tipo == 'Renta':
        url = 'https://casas.trovit.com.mx/index.php/cod.search_homes/type.2/what_d.Nuevo%20Leon/origin.2/rooms_min.0/bathrooms_min.0/region.Nuevo%20León/order_by.relevance/resultsPerPage.25/isUserSearch.1/page.'
    url += str(num_pagina)
    return url

# extrae datos desde la tarjeta


def extraer_datos(tarjeta, tipo):
    try:
        compra_renta = tipo
    except:
        compra_renta = ''
    try:
        tipo = tarjeta.find('div', {'class': 'item-title'}).text
    except:
        tipo = ''
    try:
        precio = tarjeta.find('span', {'class': 'actual-price'}).text
    except:
        precio = ''
    try:
        superficie = tarjeta.find(
            'div', {'class': 'item-property item-size'}).text
    except:
        superficie = ''
    try:
        municipio = tarjeta.find('span', {'class': 'address'}).text
    except:
        municipio = ''
    try:
        recamaras = tarjeta.find(
            'div', {'class': 'item-property item-rooms'}).text
    except:
        recamaras = ''
    try:
        banios = tarjeta.find(
            'div', {'class': 'item-property item-baths'}).text
    except:
        banios = ''
    try:
        publicado = tarjeta.find('span', {'class': 'item-published-time'}).text
    except:
        publicado = ''
    try:
        sitio = tarjeta.find('span', {'class': 'item-source'}).text
    except:
        sitio = ''
    resultados = (compra_renta, tipo, precio, superficie, municipio,
                  recamaras, banios, publicado, sitio)

    return resultados
