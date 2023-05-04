import React,{useEffect,useState} from 'react';
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
    const[data, setData] = useState([]);
    const[search, setSearch] = useState('');

    
    

    useEffect(()=> {
        fetch('http://localhost:3000/careers')
            .then(response => response.json())
            .then(data => setData(data));
    },[]);

    const handleSearch = () => {
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
        setData(filteredData);
      };
   

    return (
        <div>

            <h1 id='serviceheader'>Services offered</h1>

            <input 
                type='text'
                placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button className='searchbtn' onClick={handleSearch}>Search</button>



            {data.map(service => (
            <ServiceCard key={service.id} service={service} />
            ))}

            
    
              
        </div>
    );
}

export default Services;