import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{backgroundColor:"azure" }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link to="/" className='text-dark' >
          Resume Maker.com
        </Link>
      </div>
    </MDBFooter>
  );
}