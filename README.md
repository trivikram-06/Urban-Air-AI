# 🌍 Urban-Air-AI

> **AI-Powered Urban Air Quality Intelligence Platform**

Urban-Air-AI is an intelligent web application that predicts the **Air Quality Index (AQI)** using Machine Learning and provides actionable insights through analytics, smart alerts, weekly analysis, and health recommendations. The platform is designed to assist both citizens and city administrators in understanding and responding to urban air pollution.

---

## 📖 About the Project

Air pollution has become a major concern in urban areas due to increasing vehicle emissions, industrial activities, and construction work. Although monitoring stations collect large amounts of pollution data, users often lack intelligent tools to interpret and act on this information.

Urban-Air-AI addresses this challenge by combining **Machine Learning**, **FastAPI**, and **React** to provide an AI-powered platform capable of predicting AQI and presenting useful insights through an intuitive dashboard.

---

## ✨ Features

### 🌫 AQI Prediction
- Predicts Air Quality Index using a trained Machine Learning model.
- Supports prediction based on PM2.5 and PM10 pollution levels.
- Displays AQI value along with its air quality category.

### 📊 Analytics Dashboard
- Interactive visualization of pollution trends.
- Easy-to-understand charts and statistics.

### 📅 Weekly Analysis
- Displays air quality trends over the past seven days.
- Helps users identify pollution patterns and variations.

### 🚨 Smart Alerts
Generates intelligent alerts based on AQI conditions, including:
- High AQI Alert
- School Advisory
- Hospital Advisory
- Traffic Control Alert
- Construction Warning

### ❤️ Health Recommendations
Provides personalized recommendations based on predicted AQI, such as:
- Wear a mask
- Reduce outdoor activities
- Close windows
- Avoid strenuous exercise

### 🏭 Pollution Source Attribution
Highlights possible pollution contributors including:
- Vehicle Emissions
- Industrial Activities
- Construction Dust
- Biomass Burning

### 🗺 Interactive Pollution Map
Displays pollution hotspots for better visualization and understanding.

---

# 🏗️ System Architecture

```text
                 User
                   │
                   ▼
        React Frontend (Vite)
                   │
           REST API Request
                   │
                   ▼
          FastAPI Backend
                   │
      Machine Learning Model
                   │
                   ▼
          AQI Prediction
                   │
                   ▼
 Dashboard • Analytics • Alerts
 Weekly Analysis • Recommendations
```

---

# ⚙️ Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js + Vite |
| Backend | FastAPI |
| Programming Language | Python |
| Machine Learning | Scikit-Learn |
| Data Processing | Pandas, NumPy |
| Charts | Chart.js |
| Version Control | Git & GitHub |

---

# 🤖 Machine Learning

The prediction model was trained using historical air quality datasets.

### Input Parameters

- PM2.5
- PM10

### Output

- Air Quality Index (AQI)

The trained model is integrated with the FastAPI backend to provide real-time predictions.

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/trivikram-06/Urban-Air-AI.git
cd Urban-Air-AI
```

---

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8001
```

Backend will run at:

```
http://localhost:8001
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 📂 Project Structure

```text
Urban-Air-AI/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── models/
│   └── utils/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── dataset/
│
├── README.md
│
└── LICENSE
```

---

# 🔄 Workflow

1. User enters pollution values (PM2.5 and PM10).
2. React frontend sends data to the FastAPI backend.
3. FastAPI processes the request.
4. The Machine Learning model predicts the AQI.
5. The prediction is returned to the frontend.
6. Dashboard displays:
   - AQI Prediction
   - Analytics
   - Weekly Analysis
   - Smart Alerts
   - Health Recommendations

---

# 🎯 Future Enhancements

- Live CPCB AQI data integration
- Weather data integration
- Satellite imagery analysis
- Hyperlocal AQI prediction
- IoT sensor connectivity
- Mobile application
- Multilingual support
- Real-time notifications

---

# 👥 Team

**Team Name:** STS

| Name | Registration Number |
|------|---------------------|
| Trivikram A | 22MIS1118 |
| Shivanesh D | 22MIS1146 |
| Sridev Prasaath L | 22MIS1224 |

**College:** VIT Chennai

**Hackathon:** ET AI Hackathon 2.0

---

# 📌 Repository

GitHub: https://github.com/trivikram-06

---

# 🙏 Acknowledgements

We thank:
- VIT Chennai
- ET AI Hackathon 2.0
- React Community
- FastAPI
- Scikit-Learn
- Pandas
- NumPy

for their tools, documentation, and support.

---

# 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project useful:

- ⭐ Star this repository
- 🍴 Fork the project
- 🐛 Report issues
- 🤝 Contribute to improve the project

---

<p align="center">
Made with ❤️ by <b>Team STS</b>
</p>
