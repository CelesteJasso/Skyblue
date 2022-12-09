import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('juegos_olimpicos.csv')  # Importo el archivo
df.columns

Participantes = df['ID'].unique()

for ID in Participantes:
    print(df[df['ID'] == ID].shape[0])


Años = df['Anio'].unique()
for Anio in Años:
    print(df[df['Anio'] == Anio].shape[0])
