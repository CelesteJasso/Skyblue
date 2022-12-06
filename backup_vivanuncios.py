@app.get("/webScrapping")
async def root():
    driver = webdriver.Chrome()
    registros = []
    for pagina in range(1, 50):
        url = get_url(pagina)
        print(url)
        driver.get(url)
        sopa = BeautifulSoup(driver.page_source, 'html.parser')
        resultados = sopa.find_all(
            'section', {'class': 'sc-b38b1161-0 kFFvKh pcom-property-card-body'})
        for tarjeta in resultados:
            registros.append(extraer_datos(tarjeta))
    driver.close()
    with open('propiedades.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['compra_renta', 'tipo', 'precio',
                        'superficie', 'municipio'])
        writer.writerows(registros)
    return registros


def get_url(num_pagina):
    url = 'https://propiedades.com/'
    url += 'nuevo-leon/residencial-venta?pagina='
    url += str(num_pagina)
    return url


def extraer_datos(tarjeta):
    try:
        compra_renta = 'Venta'
    except:
        compra_renta = ''
    try:
        tipo = tarjeta.find('div', {'class': 'sc-59e9d0ba-0 dSyene'}).text
    except:
        tipo = ''
    try:
        precio = tarjeta.find(
            'div', {'class': 'sc-b38b1161-1 bsdIdD'}).text.strip()
    except:
        precio = ''
    try:
        superficie = tarjeta.find('div', {'class': 'amenities-number'}).text
    except:
        superficie = ''
    try:
        municipio = tarjeta.find('span', {'itemprop': 'addressLocality'}).text
    except:
        municipio = ''
    resultados = (compra_renta, tipo, precio, superficie, municipio)
    return resultados
