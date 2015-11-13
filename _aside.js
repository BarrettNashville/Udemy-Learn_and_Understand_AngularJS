window.addEventListener('hashchange', function() {
    
    /* shows that this event fires when the hash (the part after the # in the url) has changed */
    //console.log('Hash changed!: ' + window.location.hash);
    
    /* let's do different things based upon the value of the hash, which by the way might look like a folder structure */
    if(window.location.hash === '#/bookmark/1') {
        console.log('Page 1 is cool');
    }
    
    if(window.location.hash === '#/bookmark/2') {
        console.log('Let me go get Page 2.');
    }
    
    if(window.location.hash === '#/bookmark/3') {
        console.log('Here\'s page 3.');
    }
    
    /* this can be tested by just changing the value in the url of the browser */
    
    /* from the browser's perspective, you're not telling it to go out and get a new page because the anchor doesn't exist.
       But in the JavaScript I can look at the value of the hash and do whatever I want.
       This concept is a fundamental key to single page applications.
       You still go out and get new html behind the scenes using AJAX / JSON/ APIs without refreshing the page.
       You pretend like each hash value corresponds to a page. 
    */
});
