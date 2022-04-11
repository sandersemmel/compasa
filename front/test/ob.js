// ABSTRACT

// {DATA_ABOUT_ME}


// SUBJECT
    // HAS A LIST OF DEPENDENTS, LIST<{DATA_ABOUT_ME}
    // IF SUBJECT DETERMINES DATA TO BE CHANGED, NOTIFIES DEPENDENTS
    // CONTACTS OBSERVER BASED THE INFORMATION THEY GIVE

// OBSERVER
    // HAS // {DATA_ABOUT_ME}
    // SENDS SUBJECT DATA HOW TO CONNECT TO ME
    // THIS DATA CAN CONTAIN ANYTHING, EVEN INSTRUCTIONS HOW TO DISCONNECT




/* PROBLEMS */    
// SUBJECT DIES, ALL DATA IS LOST OF OBSERVERS
// COULD REQUIRE LOTS OF MEMORY TO STORE THE OBSERVERS

/* FIXES ? */
// HAVE OBSERVERS SEND NOW AND THEN {DATA_ABOUT_ME}


const listeners = [];
// how do you decouple this
// how to access this 'listeners' out of this context? expose it?

let ob = {

    subscribe(func) {
        listeners.push(func);
    },

    dispatch(){
        listeners.forEach(e=>{e.listenercb()})
    }  

}


function listenercallback(){
    console.log("hello i am listener");
}

let listener = {
    listenerid: "hey",
    listenercb: listenercallback
    // TODO malicious callback?

}

ob.subscribe(listener);
//ob.subscribe(() => console.log('listener 2'));






console.log("first log")
ob.dispatch();


// first log
// listener 1
// listener 2

