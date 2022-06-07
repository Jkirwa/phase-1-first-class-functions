function receivesAFunction(callback=abc){
    callback();}

    function returnsANamedFunction(){
        return function namedFn(){
            console.log("");
        };
    }
    function returnsAnAnonymousFunction(){
        return () => console.log("")
    }
