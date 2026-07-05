import sys

print("=" * 50)
print(sys.executable)
print("=" * 50)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.predict import router as predict_router

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(predict_router)

@app.get("/")
def home():
    return {
        "message": "Urban Air AI Backend Running"
    }