//Generator Function to create Containers
const gemContainerGenerator = function*() {
let currentGemContainter= 1
const maxContainers = 30

while(currentGemContainter <= maxContainers) {
    yield {
        "id": currentGemContainter,
        "type": "Minerals",
        "kilograms": []
    }
    currentGemContainter++
}


}

const gemContainerFactory = gemContainerGenerator()



const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside


/*
The gem mine does not exist outside the barricade of the
hëap-skopes. The Lexscopistanians build the barricade
around their facility AND the resource.

a.k.a.
Instead of being located in an outer scope to the
function, the gem mine is enclosed by the scope of
the `gemHeapSkope` function.
*/
    const GemMine = {
    "Onyx": {
    "kilograms": 453
    },
    "Amethyst": {
    "kilograms": 453
    },
    "Bloodstone": {
    "kilograms": 453
    },
    "Emerald": {
    "kilograms": 453
    }
    }

/*
Instead of processing the entirety of the resources in
bulk - which is what the stâck-skope does - this skope
will return an object that has a method for processing
each type of mineral.

We're exposing the functionality of this skope to code
in the outer scope, so that the order in which minerals
are processed can be customized.

Hëap-skopes workshops can process 5 kilograms of a
mineral with each work order. So every time the `process`
function is invoked, subtract 5 from the amount of the
requested mineral from the enclosed GemMine above.
*/

return {
    "process": function (requestedMineral) {
/*
Subtract 5 from the total kilograms available in
the gem mine, but make sure you stop when there
are no minerals left.
*/
        let rawMinerals = GemMine[requestedMineral].kilograms
       
            let processedMinerals = 0
            if ( rawMinerals >= 5  ) {
      /*
        You can reference the `GemMine` variable here
        because it lives in an outer scope:
            e.g. GemMine[requestedMineral].kilograms
     */
                rawMinerals -= 5
                processedMinerals = 5
            } else {
                processedMinerals = rawMinerals
            }
            GemMine[requestedMineral].kilograms = rawMinerals
            return {
                "mineral": requestedMineral,
                "amount": processedMinerals // Change this to the correct amount
            }
        }       
    }
}

const SkopeManager = gemHeapSkope()

function GEMS() {

    let i = 0
    function gemSorter() {
        let counter = 0
        let gems = ["Onyx", "Amethyst", "Bloodstone", "Emerald"] 
        let GemContainer = gemContainerFactory.next().value
        let gemsToPackage = []
        //While loop that runs the function to create mineral objects   enough times to fill a container
        while(counter < (565/5) && i < 4) {             
            let gemReturn = SkopeManager.process(gems[i])
            //Switch statement that checks to see if there are more of the current Gem type left.
            switch(gemReturn.amount) {  
                case 5:
                    gemsToPackage.push(gemReturn)
                    break
                case 3:
                    gemsToPackage.push(gemReturn)
                    //if there aren't enough gems to create another packet of 5 the gem                                         indicator increases by 1.
                    i++                             
                    break
            }
            counter ++
        }
            GemContainer.kilograms = gemsToPackage  // adds the sorted gems into the container
            return GemContainer                 // returns the container

        }

        //function that runs the gemSorter function 4 times to sort all the gems into containers
    let gemCounter = function() {       
        let GEMS = []
        for (x=0; x <= 3; x++){
            let gemSort = gemSorter()
            GEMS.push(gemSort)
        }
        console.log(GEMS)
        return GEMS
    }
    gemCounter()
}


GEMS()










/*
The SkopeManager variable represents the object with the
`process` method on it.
*/

/*
Process the gems in any order you like until there none
left in the gem mine.
*/


/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/


/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/