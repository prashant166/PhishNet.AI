<h1>PhishNet.AI (AI-enabled Phishing Link Detection and Alert System)</h1>
<h1>Table of Content</h1> <ul> <li>Introduction</li> <li>Installation</li> <li>Directory Tree</li> <li>Terminology Used</li> <li>Result</li> <li>Conclusion</li> </ul> <h2>Introduction</h2> <p> In today's digital age, phishing attacks have become a significant threat to individuals and organizations alike. On the rise in both sophistication and frequency, phishing schemes often trick users into divulging sensitive information through fraudulent websites, particularly banking sites and online services. During our development and research for PhishNet.AI, we came across a well-crafted fake banking website that mimicked a legitimate financial institution, reinforcing the importance of a robust phishing detection system.
PhishNet.AI is an AI-powered phishing detection and alert system designed to protect users from falling victim to such attacks. This tool helps identify malicious URLs and alerts users in real time. By incorporating machine learning models and web scraping techniques, PhishNet.AI can effectively differentiate between safe and phishing websites, helping users stay protected online.
  
https://github.com/user-attachments/assets/cc08cac2-108c-4142-a23a-09f15339301b
https://github.com/user-attachments/assets/c4a795f4-8903-4fae-ac33-bf5f24201b5f
https://github.com/user-attachments/assets/8abfe011-cb10-47a5-81e8-4656574c7c57
https://github.com/user-attachments/assets/928f25bd-3990-4935-ab7d-4a4d158bb173


</p> <h2>Installation</h2> <ol> <li>Download the zip file and unzip the contents into a folder.</li> <li>Go to Chrome settings and navigate to "Manage Extensions".</li> <li>Enable "Developer Mode" at the top right.</li> <li>Select "Load unpacked" and import the manifest file from the folder.</li> </ol> 

<h3>Terminology Used</h3> <ul> <li><strong>Support Vector Machine (SVM):</strong> A classifier used for both linear and non-linear data classification.</li> <li><strong>Decision Tree:</strong> A graph-based model consisting of nodes that test conditions and terminal nodes that represent class labels.</li> <li><strong>K-Nearest Neighbour (KNN):</strong> A distance-based classifier that assigns equal weights to each attribute.</li> <li><strong>Rotation Forest (RoF):</strong> An ensemble classifier where the feature set is randomly split, and Principal Component Analysis (PCA) is applied.</li> <li><strong>Random Forest (RF):</strong> An ensemble learning method that builds multiple decision trees using random attribute selection and bagging.</li> </ul> <h3>Result</h3> <p>Here are the accuracy results of various models used for phishing detection:</p> <table> <tr> <th></th> <th>Algorithm</th> <th>Accuracy</th> <th>Precision</th> <th>Accuracy_max_ft_3000</th> </tr> <tr> <td>0</td> <td>KNN</td> <td>0.905222</td> <td>1.000000</td> <td>0.905222</td> </tr> <tr> <td>1</td> <td>NB</td> <td>0.978723</td> <td>1.000000</td> <td>0.971954</td> </tr> <tr> <td>2</td> <td>ETC</td> <td>0.979691</td> <td>0.991453</td> <td>0.979691</td> </tr> <tr> <td>3</td> <td>RF</td> <td>0.975822</td> <td>0.990826</td> <td>0.975822</td> </tr> <tr> <td>4</td> <td>SVC</td> <td>0.971954</td> <td>0.974138</td> <td>0.974855</td> </tr> <tr> <td>5</td> <td>AdaBoost</td> <td>0.961315</td> <td>0.954128</td> <td>0.961315</td> </tr> <tr> <td>6</td> <td>XGB</td> <td>0.968085</td> <td>0.950413</td> <td>0.968085</td> </tr> <tr> <td>7</td> <td>LR</td> <td>0.967118</td> <td>0.940000</td> <td>0.956480</td> </tr> <tr> <td>8</td> <td>GBDT</td> <td>0.946809</td> <td>0.931373</td> <td>0.959381</td> </tr> <tr> <td>9</td> <td>BgC</td> <td>0.959381</td> <td>0.861538</td> <td>0.959381</td> </tr> <tr> <td>10</td> <td>DT</td> <td>0.932302</td> <td>0.838095</td> <td>0.931335</td> </tr> </table> <h3>Conclusion</h3> <p> PhishNet.AI demonstrates the effectiveness of various machine learning models in detecting phishing links. By exploring different algorithms, performing data analysis, and testing on phishing datasets, the project identifies Gradient Boosting Classifier as a strong performer, achieving up to 95.6% accuracy in classifying phishing URLs. This model reduces the likelihood of phishing attacks, protecting users from malicious websites. </p>
