<h1>PhishNet.AI (AI-enabled Phishing Link Detection and Alert System)</h1>
<h1>Table of Content</h1> <ul> <li>Introduction</li> <li>Installation</li> <li>Directory Tree</li> <li>Terminology Used</li> <li>Result</li> <li>Conclusion</li> </ul> <h2>Introduction</h2> <p> In today's digital age, phishing attacks have become a significant threat to individuals and organizations alike. On the rise in both sophistication and frequency, phishing schemes often trick users into divulging sensitive information through fraudulent websites, particularly banking sites and online services. During our development and research for PhishNet.AI, we came across a well-crafted fake banking website that mimicked a legitimate financial institution, reinforcing the importance of a robust phishing detection system.
PhishNet.AI is an AI-powered phishing detection and alert system designed to protect users from falling victim to such attacks. This tool helps identify malicious URLs and alerts users in real time. By incorporating machine learning models and web scraping techniques, PhishNet.AI can effectively differentiate between safe and phishing websites, helping users stay protected online.

</p> <h2>Installation</h2> <ol> <li>Download the zip file and unzip the contents into a folder.</li> <li>Go to Chrome settings and navigate to "Manage Extensions".</li> <li>Enable "Developer Mode" at the top right.</li> <li>Select "Load unpacked" and import the manifest file from the folder.</li> </ol> <h2>Directory Tree</h2>
bash
Copy code
├── frontend
│   ├── icons
│   │   ├── 128x128.png
│   │   ├── 16x16.png
│   │   ├── 32x32.png
│   │   ├── 48x48.png
│   │   └── url_list.pdf
│   ├── js
│   │   ├── jquery.js
│   │   └── plugin_ui.js
│   ├── main.js
│   ├── manifest.json
│   ├── plugin_ui.css
│   ├── plugin_ui.html
│   ├── README.md
│   ├── style.css
│   ├── tempstorage.json
│   └── test.html
├── LICENSE
├── phish-api
│   ├── app.py
│   ├── app.yaml
│   ├── Procfile
│   ├── __pycache__
│   │   ├── app.cpython-310.pyc
│   │   └── app.cpython-38.pyc
│   ├── README.md
│   ├── requirements.txt
│   ├── SVM_Model.pkl
│   └── Web_Scrapped_websites.csv
├── README.md
└── sms-email-spam-classifier-main
    ├── app.py
    ├── model.pkl
    ├── nltk.txt
    ├── Procfile
    ├── requirements.txt
    ├── setup.sh
    ├── sms-spam-detection.ipynb
    ├── spam.csv
    └── vectorizer.pkl
<h3>Terminology Used</h3> <ul> <li><strong>Support Vector Machine (SVM):</strong> A classifier used for both linear and non-linear data classification.</li> <li><strong>Decision Tree:</strong> A graph-based model consisting of nodes that test conditions and terminal nodes that represent class labels.</li> <li><strong>K-Nearest Neighbour (KNN):</strong> A distance-based classifier that assigns equal weights to each attribute.</li> <li><strong>Rotation Forest (RoF):</strong> An ensemble classifier where the feature set is randomly split, and Principal Component Analysis (PCA) is applied.</li> <li><strong>Random Forest (RF):</strong> An ensemble learning method that builds multiple decision trees using random attribute selection and bagging.</li> </ul> <h3>Result</h3> <p>Here are the accuracy results of various models used for phishing detection:</p> <table> <tr> <th></th> <th>Algorithm</th> <th>Accuracy</th> <th>Precision</th> <th>Accuracy_max_ft_3000</th> </tr> <tr> <td>0</td> <td>KNN</td> <td>0.905222</td> <td>1.000000</td> <td>0.905222</td> </tr> <tr> <td>1</td> <td>NB</td> <td>0.978723</td> <td>1.000000</td> <td>0.971954</td> </tr> <tr> <td>2</td> <td>ETC</td> <td>0.979691</td> <td>0.991453</td> <td>0.979691</td> </tr> <tr> <td>3</td> <td>RF</td> <td>0.975822</td> <td>0.990826</td> <td>0.975822</td> </tr> <tr> <td>4</td> <td>SVC</td> <td>0.971954</td> <td>0.974138</td> <td>0.974855</td> </tr> <tr> <td>5</td> <td>AdaBoost</td> <td>0.961315</td> <td>0.954128</td> <td>0.961315</td> </tr> <tr> <td>6</td> <td>XGB</td> <td>0.968085</td> <td>0.950413</td> <td>0.968085</td> </tr> <tr> <td>7</td> <td>LR</td> <td>0.967118</td> <td>0.940000</td> <td>0.956480</td> </tr> <tr> <td>8</td> <td>GBDT</td> <td>0.946809</td> <td>0.931373</td> <td>0.959381</td> </tr> <tr> <td>9</td> <td>BgC</td> <td>0.959381</td> <td>0.861538</td> <td>0.959381</td> </tr> <tr> <td>10</td> <td>DT</td> <td>0.932302</td> <td>0.838095</td> <td>0.931335</td> </tr> </table> <h3>Conclusion</h3> <p> PhishNet.AI demonstrates the effectiveness of various machine learning models in detecting phishing links. By exploring different algorithms, performing data analysis, and testing on phishing datasets, the project identifies Gradient Boosting Classifier as a strong performer, achieving up to 95.6% accuracy in classifying phishing URLs. This model reduces the likelihood of phishing attacks, protecting users from malicious websites. </p>
