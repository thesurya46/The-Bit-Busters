from flask import Flask, jsonify

app = Flask(__name__)

projects = [
    {"id": 1, "title": "AI Assistant", "description": "AI tool", "github": "https://github.com/bitbusters/ai-assistant"},
    {"id": 2, "title": "DevOps Dashboard", "description": "DevOps app", "github": "https://github.com/bitbusters/devops-dashboard"}
]

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
