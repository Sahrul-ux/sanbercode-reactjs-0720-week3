import React from 'react';
import './App.css';
import 	DaftarBuah from './tugas11/DaftarBuah';
import  Timer from './tugas12/Timer';
import Lists from './tugas13/Lists';
import Table3 from './tugas14/Table3'


function App() {
	return (
	    <div className="app">
	     {/*<DaftarBuah />*/}
	     {/*<Timer start={10} />*/}
	    	{/*<Lists/>*/}
	    <Timer start={101}/>
	    <Table3/>
	    </div>
	);
}



export default App;