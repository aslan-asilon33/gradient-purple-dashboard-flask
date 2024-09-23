from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('dashboard.html')

@app.route('/dashboard-v2')
def dashboard_v2():
    return render_template('dashboard-2.html')

@app.route('/analytics')
def analytics():
    return render_template('analytics.html')

@app.route('/widgets')
def widgets():
    return render_template('widgets.html')

if __name__ == '__main__':
    app.run(debug=True)
