#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd
import plotly.express as px


# In[3]:


df=pd.read_csv('Ventastoditos.csv')


# In[4]:


df.head()


# In[5]:


df.columns


# In[6]:


sitios=['AllProperty','Flat']


# In[7]:


sitio_AllP=sitios[0] 
sitio_AllP=df['Sitio'].str.contains(sitio_AllP, case=False)
AllP=df[sitio_AllP]
AllP


# In[8]:


sitio_Flat=sitios[1] 
sitio_Flat=df['Sitio'].str.contains(sitio_Flat, case=False)
Flat=df[sitio_Flat]
Flat


# In[9]:


Publicado=df.loc[df['Publicado']=='Hace +30 días'] # filtro # Asignacion de la variable
Publicado


# In[10]:


sitio_Flat.value_counts()


# In[11]:


type(Publicado)


# In[13]:


fig=px.bar(df,x=df['Publicado'], y=df['Sitio'])
fig.show()


# In[14]:


fig=px.bar(df,x=df['Precio'], y=df['Recamaras'])
fig.show()


# In[15]:


fig=px.bar(df,x=df['Precio'], y=df['Ubicacion'])
fig.show()


# In[16]:


precio_max=df['Precio'].max()
df[df['Precio']==precio_max]


# In[ ]:




