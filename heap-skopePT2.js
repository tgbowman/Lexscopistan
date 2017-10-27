//Generator Function to create Containers
const gemContainerGenerator = function*() {
    let currentGemContainter= 1
    const maxContainers = 30
    
    while(currentGemContainter <= maxContainers) {
        yield {
            "id": currentGemContainter,
            "type": "Minerals",
            "kilograms": [],
            "capacity": 565
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
   
   let GEMS = function() {
    const totalContainers = []
    const SkopeManager = gemHeapSkope()
    let gems = ["Onyx", "Amethyst", "Bloodstone", "Emerald"]
    let i = 0
    let currentContainer = gemContainerFactory.next().value
    let packet 
        do{
            packet = SkopeManager.process(gems[i])
            currentContainer.kilograms.push(packet)
            currentContainer.capacity -= packet.amount
            if(packet.amount !== 5){i++}
            if(i===gems.length){totalContainers.push(currentContainer)}
            if(currentContainer.capacity <= gems.length) {
                totalContainers.push(currentContainer)
                currentContainer = gemContainerFactory.next().value
            }
        } while (i < gems.length)
        console.log(totalContainers)
        return totalContainers
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