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
    csvFilePath = r'Ventasvivanuncios.csv'
    jsonFilePath = r'vivanucios.json'
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


@app.get("/viva")
async def root():
    driver = webdriver.Chrome()
    registros = []
    for pagina in range(1, 40):
        url = get_url(pagina)
        print(url)
        driver.get(url)
        sopa = BeautifulSoup(driver.page_source, 'html.parser')
        resultados = sopa.find_all('div', {'class': 'REAdTileV2'})
        for tarjeta in resultados:
            registros.append(extraer_datos(tarjeta))
    driver.close()
    with open('CasasVentasvivanuncios.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['compra_renta', 'tipo', 'precio',
                        'superficie', 'municipio', 'recamaras', 'banios', 'publicado', 'sitio'])
        writer.writerows(registros)
    return registros


def get_url(num_pagina):

    url = 'https://www.vivanuncios.com.mx/s-casas-en-venta'
    url += '/nuevo-leon/v1c1293l1018p'
    url += str(num_pagina)
    return url


def extraer_datos(tarjeta):
    try:
        compra_renta = 'Venta'
    except:
        compra_renta = ''
    try:
        tipo = tarjeta.find('a', {'class': 'tile-title-text'}).text
    except:
        tipo = ''
    try:
        precio = tarjeta.find('span', {'class': 'ad-price'}).text.strip()
    except:
        precio = ''
    try:
        superficie = tarjeta.find('div', {'class': 'surface-area'}).text
    except:
        superficie = ''
    try:
        municipio = tarjeta.find('div', {'class': 'tile-location'}).text
    except:
        municipio = ''
    try:
        recamaras = tarjeta.find(
            'div', {'class': 'chiplets-inline-block re-bedroom'}).text
    except:
        recamaras = ''
    try:
        banios = tarjeta.find(
            'div', {'class': 'chiplets-inline-block re-bathroom'}).text
    except:
        banios = ''
    resultados = (compra_renta, tipo, precio, superficie,
                  municipio, recamaras, banios)
    return resultados
