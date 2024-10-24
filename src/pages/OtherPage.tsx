import { onCleanup, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';
import { BASE } from '../Constants';


const OtherPage: Component = () => {
  onMount(()=>{
    
  });
  return (
    <>
      <div class = "container-fluid p-4">
        <h1>Other Page!</h1>
        <p><a href={`${BASE}`}>Click here to go back!</a></p>
      </div>
    </>
  )
};

export default OtherPage;
