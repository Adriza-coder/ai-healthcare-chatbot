                 AI Healthcare Chatbot
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
   Frontend          Backend             AI/ML
        │                │                │
     HTML/CSS/JS      Flask          Random Forest
        │                │                │
        │           Flask Session    Pandas/NumPy
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
                 Symptom Processing
                         │
                  ┌──────┴──────┐
                  ▼             ▼
              Synonyms      Fuzzy Match
                  │             │
                  └──────┬──────┘
                         ▼
                  Disease Prediction
                         │
                         ▼
                 Medical Information

                 # 🩺 AI Healthcare Chatbot

> An AI-powered healthcare assistance chatbot that uses Machine Learning to analyze user-reported symptoms and provide a preliminary disease prediction along with disease information and precautionary guidance.

# 🩺 About the Project

The **AI Healthcare Chatbot** is a web-based Artificial Intelligence and Machine Learning project designed to provide users with preliminary healthcare information based on the symptoms they enter.

The system combines a conversational chatbot interface with a **Random Forest Machine Learning classifier**. Instead of depending entirely on predefined chatbot messages, the application processes the symptoms entered by the user, converts them into machine-readable features, and uses the trained Machine Learning model to predict a possible disease.

The chatbot also asks additional questions related to the predicted condition. This allows it to collect more information before producing the final result.

The final response contains:

- Possible disease prediction
- Model confidence score
- Disease description
- Suggested precautions
- Health-related motivational message

The project is developed primarily as an **educational and academic demonstration of Artificial Intelligence in healthcare**.

---

# 🎯 Problem Statement

Healthcare information is widely available on the internet, but users often face difficulties when trying to understand their symptoms.

A person experiencing multiple symptoms may:

- Search different websites for each symptom.
- Receive too much unrelated information.
- Find conflicting information.
- Misinterpret medical terminology.
- Become unnecessarily worried.
- Have difficulty identifying which symptoms are relevant.

A conversational AI system can provide a simpler way for users to organize their symptoms and receive preliminary information.

The goal of this project is therefore to develop a chatbot that can:

1. Understand commonly entered symptoms.
2. Identify relevant symptoms from user text.
3. Apply Machine Learning for disease classification.
4. Ask additional questions.
5. Provide preliminary information.
6. Display precautionary suggestions.

---

# 💡 Proposed Solution

The proposed solution is an **AI-powered conversational healthcare assistant**.

The user interacts with the chatbot using normal text.

The system then:

```text
User Input
     ↓
Symptom Extraction
     ↓
Symptom Normalization
     ↓
Feature Vector Creation
     ↓
Random Forest Classification
     ↓
Initial Disease Prediction
     ↓
Additional Questions
     ↓
Updated Symptoms
     ↓
Final Prediction
     ↓
Disease Information
     ↓
Precautions

🏗️ System Architecture
                    ┌───────────────────────┐
                    │         USER          │
                    │                       │
                    │  Enters symptoms and  │
                    │  answers questions    │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     FRONTEND          │
                    │                       │
                    │ HTML + CSS + JS       │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     FLASK SERVER      │
                    │                       │
                    │     /chat API         │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  SYMPTOM EXTRACTION   │
                    │                       │
                    │ • Keyword Matching    │
                    │ • Synonyms            │
                    │ • Regex               │
                    │ • Fuzzy Matching      │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  FEATURE VECTOR       │
                    │                       │
                    │ Binary symptom        │
                    │ representation        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   RANDOM FOREST       │
                    │    CLASSIFIER         │
                    │                       │
                    │ Disease Prediction    │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │ GUIDED QUESTIONS      │
                    │                       │
                    │ Additional symptoms   │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  FINAL PREDICTION     │
                    │                       │
                    │ Disease               │
                    │ Confidence Score      │
                    │ Description           │
                    │ Precautions           │
                    └───────────────────────┘
