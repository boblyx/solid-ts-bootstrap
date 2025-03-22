import { createSignal, onCleanup, onMount, Switch, Match } from 'solid-js';
import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';
import { isMobile } from './utils/general';
import { BASE } from '@src/Constants';
import Topbar from './components/Topbar';
import {initDB} from './api/indexeddb';

const [ready, setReady] = createSignal(false);
const App: Component = (props:any) => {
  onMount(()=>{
    // Check if mobile or is desktop
    initDB();
    setReady(true);
  });
  return (
    <>
      <div class = "container-fluid p-3">
        <Switch>
            <Match when={ready() === true && isMobile()}>
                <div>
                    {/*Mobile Version*/}
                    <Topbar/>
                    {props.children}
                </div>
            </Match>
            <Match when={ready() === true}>
                <div>
                    {/*Desktop version*/}
                    <Topbar/>
                    {props.children}
                </div>
            </Match>
        </Switch>
      </div>
    </>
  )
};

export default App;
