import { onCleanup, onMount, Match, Switch } from 'solid-js';
import type { Component} from 'solid-js';
import * as bootstrap from 'bootstrap';
import {APP_NAME} from '@src/Constants';
import {isMobile} from '@src/utils/general';


const Topbar: Component = () => {
  onMount(()=>{
  });

  return (
    <>
      <div class = "container-fluid p-4">
        <nav class="navbar bg-body-tertiary fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand ms-3" href="#">{APP_NAME}</a>
            <Switch>
                {/* Hamburger Button for mobile*/}
                <Match when={isMobile() === true}>
                    <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasNavbar" 
                    aria-controls="offcanvasNavbar" 
                    aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                </Match>

                {/* Navbar for desktop*/}
                <Match when={isMobile() === false}>
                    <div></div>
                </Match>
            </Switch>
          </div>
        </nav>
      </div>
    </>
  )
};

export default Topbar;
