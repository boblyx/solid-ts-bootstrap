import { onCleanup, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';
import { BASE } from '@src/Constants';
const App: Component = () => {
  onMount(()=>{
       
  });
  return (
    <>
      <div class = "container-fluid p-4">
        <h1>Hello world!</h1>
        <p><a href={`${BASE}/other`}>Click here to go to the other page!</a></p>
      </div>
    </>
  )
};

export default App;
