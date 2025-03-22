import { onCleanup, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';
import { BASE } from '../Constants';
import {A, Navigate} from '@solidjs/router';
import {currentDB} from '@src/api/indexeddb';


const Landing: Component = () => {
  onMount(()=>{
    const db : IDBDatabase = currentDB();
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
            <A href="./other" type="button" class="btn btn-primary">Item 1</A>
        </div>
        <div class="p-3 justify-content-center d-flex">
            <A href="./other" type="button" class="btn btn-primary">Item 2</A>
        </div>
      </div>
    </>
  )
};

export default Landing;
