console.log("script loaded");

function setActiveButton(clicked) {
	document.querySelectorAll('.cta-buttons .btn').forEach(b => b.classList.remove('btn--active'));
	if (clicked) clicked.classList.add('btn--active');
}

document.addEventListener('DOMContentLoaded', () => {
	const btnHome = document.getElementById('btn-home');
	const btnFeatures = document.getElementById('btn-features');
	const btnBoom = document.getElementById('btn-boom');

	if (btnHome) btnHome.addEventListener('click', () => {
		setActiveButton(btnHome);
		console.log('Home clicked');
		// For demo: navigate to top (if there were pages)
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	if (btnFeatures) btnFeatures.addEventListener('click', () => {
		setActiveButton(btnFeatures);
		console.log('Features clicked');
		// For demo: show a tiny inline message
		alert('Features: This demo shows Home, Features, and Boom buttons.');
	});

	if (btnBoom) btnBoom.addEventListener('click', () => {
		setActiveButton(btnBoom);
		console.log('Boom clicked');
		// Boom effect: quick background flash
		const body = document.body;
		body.style.transition = 'background-color 220ms ease';
		const original = getComputedStyle(body).backgroundColor;
		body.style.backgroundColor = '#fff7ed';
		setTimeout(() => { body.style.backgroundColor = original; }, 220);
	});
});