const treeContainerGenerator = function* () {
    let currentContainer = 1
    const maximumContainers = 10

    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "Wood", "logs": [] }
        currentContainer++
    }
}

let treeContainerFactory = treeContainerGenerator()

const forest = [
    {
        "tree": "Oak",
        "qty": 9
    },
    {
        "tree": "Pine",
        "qty": 12
    },
    {
        "tree": "Ash",
        "qty": 6
    },
    {
        "tree": "Balsa",
        "qty": 10
    }
]

const treeStackSkope = function (trees) {
    // Functionality to convert each tree into 4 logs
const processedTrees = trees.map(
    currentTree => ({
        "type": currentTree.tree,
        "logs": Math.floor(currentTree.qty * 4)
        })
    )
    return processedTrees
}


treeStackSkope.containers = []

let allLogs = treeStackSkope(forest)

currentContainer = treeContainerFactory.next().value

allLogs.forEach(
    currentWood => {
        for (i=0; i < currentWood.logs; i++){
            const log = {"type": currentWood.type}
            currentContainer.logs.push(log)

            if(currentContainer.logs.length === 15){
                treeStackSkope.containers.push(currentContainer)
                currentContainer = treeContainerFactory.next().value
            } 
        }

    }
)

if(currentContainer.logs.length > 0){
    treeStackSkope.containers.push(currentContainer)
}

console.log(treeStackSkope.containers)
// Start filling up the 10 available storage containers