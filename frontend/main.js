document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
			var tab = tabs[0];
			var url = tab.url;

			const el = document.getElementById("site_score");
			const el2 = document.getElementById("site_msg");

			// Fetch the phishing status from the local server
			fetch('http://localhost:5000/post', {
					method: 'POST',
					headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: `URL=${url}`
			})
			.then(response => response.text())
			.then(data => {
					console.log('Server response:', data);
					
					// Update DOM elements based on the response
					if (parseInt(data) === 1) {
							el.textContent = 'Suspicious';
							el2.textContent = 'This website may not be safe >_<';
							el.style.background = "linear-gradient(45deg, #a64812, #e1e354)";
							el.style.transform = "translateZ(25px)";
					} else if (parseInt(data) === 0) {
							el.textContent = 'Safe';
							el2.textContent = 'This website is safe to use :)';
							el.style.background = "linear-gradient(45deg, #00db2f, #06678b)";
							el.style.transform = "translateZ(25px)";
					} else if (parseInt(data) === -1) {
							el.textContent = 'Phishing';
							el2.textContent = 'This website is not safe to use :(';
							el.style.background = "linear-gradient(45deg, #900000, #6d6f08)";
							el.style.transform = "translateZ(25px)";
					} else {
							console.log("Unknown response received from the server.");
					}
			})
			.catch(error => {
					console.error('Fetch error:', error);
			});
	});
});
