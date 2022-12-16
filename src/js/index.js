import {topNav} from './components/topNav'
import {tabs, tabsHorses} from './components/tabs';
import openTable from './components/openTable';
(()=>{
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('banca')) {
		// functions here
		tabs();
	}else if (document.body.classList.contains('caballos')) {
		// functions here
		tabsHorses();
		openTable();
	}
})();
