const openTable = () => {
    
    const btn = document.querySelector('.caballos-layout__racebook--button');
	const table = document.querySelector('.caballos-layout__open-table');
	
	btn.addEventListener('click', function() {
		table.style.display = 'block';
	});

};

export default openTable;
