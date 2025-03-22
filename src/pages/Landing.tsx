import { onCleanup, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';
import { BASE } from '../Constants';
import {A, Navigate} from '@solidjs/router';


const Landing: Component = () => {
  onMount(()=>{
    
  });
  return (
    <>
      <div class = "p-4 container-fluid">
        <div class="p-2 justify-content-center d-flex">
            <h2>My App</h2>
        </div>
      </div>
      <div>
        <div class="p-3 justify-content-center d-flex">
            <A href="./other" type="button" class="btn btn-primary">Login</A>
        </div>
      </div>
    </>
  )
};

export default Landing;
