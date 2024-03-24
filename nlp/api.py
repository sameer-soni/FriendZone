from flask import Flask, request, jsonify
from flask_cors import CORS
import nlp  # Import the generated .py file

app = Flask(__name__)
CORS(app)

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data['text']

    # Assuming nlp.sentiment_analysis returns a NumPy array
    result = nlp.sentiment_analysis(text)

    # Convert the NumPy array to a JSON-serializable list
    result_list = result.tolist()

    return jsonify({'sentiment': result_list})

if __name__ == '__main__':
    app.run(debug=True)