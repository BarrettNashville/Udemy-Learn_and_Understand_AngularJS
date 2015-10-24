var things = 
    [1,
     '2',
     function() {
         alert("Hello!");
     }
    ];

// arrays can hold anything including functions, and those functions can be called by indexing into that array and calling the function like so:
things[2]();

console.log(things);