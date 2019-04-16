// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {
    
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === 'wolf' && i === queue.length - 1) {
            return "Pls go away and stop eating my sheep"
        } else if (queue[i] === 'wolf' && i != queue.length - 1) {
            return "Oi! Sheep number " + (queue.length - queue.indexOf('wolf') - 1) + "! You are about to be eaten by a wolf!"
        }
    }
}


// best answer

function warnTheSheep(q) {
    return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}