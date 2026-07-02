import pandas as pd

df = pd.read_csv("../datasets/raw/aqi/aqi_india_38cols_knn_final.csv")

print(df.columns.tolist())