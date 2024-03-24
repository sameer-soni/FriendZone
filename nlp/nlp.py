#!/usr/bin/env python
# coding: utf-8

# Sentiment Analysis

# In[2]:


def sentiment_analysis(a):

  #import and download
  import numpy as np
  import pandas as pd
  from sklearn.preprocessing import LabelEncoder
  import nltk
  import re
  from nltk.tokenize import word_tokenize,sent_tokenize,RegexpTokenizer
  from nltk.corpus import stopwords
  from nltk.stem.wordnet import WordNetLemmatizer
  nltk.download('punkt')
  nltk.download('stopwords')
  nltk.download('wordnet')

  #getting dataset
  df=pd.read_csv("train.csv",encoding='latin1')
  le=LabelEncoder()
  X_train=list(df["text"])[:10000]
  df_encoded=df.apply(le.fit_transform,axis=0)
  dff=df_encoded.values
  y_train=list(dff[:10000 ,3])
  for i in range(len(y_train)):
    if y_train[i]==2:
      y_train[i]=1
  X_test=[a]

  tokenizer=RegexpTokenizer(r'\w+')
  en_stopwords=set(stopwords.words('english'))
  wnet=WordNetLemmatizer()

  #preprocessing method
  def getcleantext(text):

    #convert to lower case
    text=str(text)
    text=text.lower()

    #tokenize
    tokens=tokenizer.tokenize(text)
    new_tokens=[]

    #stopwords removal
    for i in tokens :
      if i not in en_stopwords:
        new_tokens.append(i)

    #lemmatization
    lemmatized_tokens=[]
    for i in new_tokens:
      lemmatized_tokens.append(wnet.lemmatize(i))

    clean_text=" ".join(lemmatized_tokens)
    return clean_text

  #preprocessing training dataset
  X_clean=[]
  for i in X_train:
    s=getcleantext(i)
    X_clean.append(s)
  Xt_clean=[getcleantext(X_test[0])]

  #Vectorization
  from sklearn.feature_extraction.text import CountVectorizer
  cv=CountVectorizer(ngram_range=(1,2))
  X_vec=cv.fit_transform(X_clean).toarray()
  Xt_vec=cv.transform(Xt_clean).toarray()

  #Multinomial Naive Bayes
  from sklearn.naive_bayes import MultinomialNB
  mn=MultinomialNB()
  mn.fit(X_vec,y_train)
  y_pred=mn.predict(Xt_vec)
  x=list(y_pred)[0]
  return x

