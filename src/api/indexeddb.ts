/**
 * indexeddb.ts
 * Manage local storage
 */

import {APP_NAME} from "@src/Constants";
import {createSignal} from "solid-js";
export let [currentDB, setCurrentDB] = createSignal<IDBDatabase|null>()
const ALL_STORES = ["projects"]
export function initDB() {
    let idb : IDBDatabase;

    const request = indexedDB.open(`${APP_NAME}`, 2);
    request.onerror = (e : Event) => {
        console.error(e);
    }
    request.onsuccess = (e: any) => {
        idb = e.target.result;
        setCurrentDB(idb);
    }

    request.onupgradeneeded = (e: any) => {
        idb = e.target.result;
        for (const s of ALL_STORES){
            if(idb.objectStoreNames.contains(s)){continue}
            const new_store = idb.createObjectStore(s, {keyPath: "id"});
            new_store.createIndex("id", "id", {unique: true});
        };
    }
}

