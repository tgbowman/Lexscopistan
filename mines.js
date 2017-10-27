const metalContainerGenerator = function*() {
    let currentMetalContainter= 1
    const maxContainers = 30
    
    while(currentMetalContainter <= maxContainers) {
        yield {
            "id": currentMetalContainter,
            "type": "Metals",
            "kilograms": [],
            "capacity": 565
        }
        currentMetalContainter++
    }
}
let metalContainerFactory = metalContainerGenerator()

const metalHeapSkope = function() {

    let mountain = {
        
            "mine1":{
                "coal":5302,
                "gold": 2775
            },
            "mine2": {
                "iron": 3928,
                "copper": 901
            }
        }

    return {
        "process": function(requestedMetal) {
                    let rawMetal 
                    let processedMetals 
                    let currentMine
                    
                    if(mountain.mine1.hasOwnProperty(requestedMetal) === true){
                        currentMine = mountain.mine1
                        rawMetal= mountain.mine1[requestedMetal]
                    } else {
                        currentMine = mountain.mine2
                        rawMetal= mountain.mine2[requestedMetal]
                        }

                    if ( rawMetal >= 5  ) {
                        rawMetal -= 5
                        processedMetals = 5
                        } else {
                            processedMetals = rawMetal
                            }

                    currentMine[requestedMetal] = rawMetal

                    return {
                            "metal": requestedMetal,
                            "amount": processedMetals // Change this to the correct amount
                        }
        } 

    }
}

let METAL = function() {
    const totalContainers = []
    const SkopeManager = metalHeapSkope()
    let metals = ["coal", "gold", "iron", "copper"]
    let i = 0
    let currentContainer = metalContainerFactory.next().value
    let packet 
        do{
            packet = SkopeManager.process(metals[i])
            currentContainer.kilograms.push(packet)
            currentContainer.capacity -= packet.amount
            if(packet.amount !== 5){i++}
            if(i===metals.length){totalContainers.push(currentContainer)}
            if(currentContainer.capacity <= metals.length) {
                totalContainers.push(currentContainer)
                currentContainer = gemContainerFactory.next().value
            }
        } while (i < metals.length)
        console.log(totalContainers)
        return totalContainers
    }

METAL()
