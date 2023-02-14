import React from 'react';
import '../scss/All_companies.scss';
import useFetch from '../hook/useFetch';
import Pagination from './Pagination_companies';

const All_contacts = () => {
    const {loading, error, data} = useFetch('https://cogip-api.pierre-mauriello.be/companies')

    if(loading) return <p>Loading</p>
    if(error) return <p>Unable to load</p>

    return (
        <section className='section_last_invoices'>
            <h3>All companies</h3>
            <hr className='yellow_rectangle_3'/>
            <input type="text" placeholder='Search company' className='input_text'/>
            <Pagination data={data}/>
        </section>
    );
};

export default All_contacts;