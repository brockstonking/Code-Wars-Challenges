// My name is State Trooper Mark ("skidmark" ) McDingle.

// My job is maintaining 117 miles of the Interstate, keeping it clean and clear of dead varmints.

// It is a serious job and I take my job seriously.

// I am the Road-Kill Detective



// Every time I find some dead critter I scrape it up and record what type it was in my dead-critter notebook.

// Mostly I just cruise up and down the interstate and only find a few racoons or the occasional squirrel...

// But recently the road-kill has become much more exotic.

// There must be some illegal private zoo back in the woods with a major security problem.

// But that's none of my business... Anything beyond the fog-line is out of my jurisdiction.

// Evidence
// Here are some photos of what I came across last week:

// There was a thing that looked like a hyena

// ==========h===yyyyyy===eeee=n==a========
// a long black and white smudge that probably once was a penguin

// ======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=
// and an unlucky bear that was hit going the other direction

// =====r=rrr=rra=====eee======bb====b=======
// Kata Task
// Even for a professional like me, the identification of flattened exotic animals is not always easy!

// If it ever happens that I can't find all of the remains, or if there are gaps or other parts that I don't recognise, then I record it as ?? in my dead-critter notebook.

// What I really need is a program that I can scan my photos into which can give back the correct answer straight away.

// Something like this:

// Input
// photo (not null)
// Output
// the detected animal name, or ?? if unknown^
// ^ Note: An array/list of all "known" animals is preloaded in a variable called ANIMALS (refer to the initial solution)

const ANIMALS = ['penguin']
const roadKill = str => {
    let dirOne = str.split('=').filter(e=>e).reduce((r, e) => {
        r = r.concat([...new Set(e.split(''))])
        return r;
    }, []).reduce((r, e, i) => {
        if (i == 0) {
            r.push(e)
        } else if (r[r.length - 1] !== e) {
            r.push(e)
        }
        return r;
    }, []).join('');
    let dirTwo = str.split('=').filter(e=>e).reduce((r, e) => {
        r = r.concat([...new Set(e.split(''))])
        return r;
    }, []).reduce((r, e, i) => {
        if (i == 0) {
            r.push(e)
        } else if (r[r.length - 1] !== e) {
            r.push(e)
        }
        return r;
    }, []).reverse().join('');
    return ANIMALS.includes(dirOne) 
    ? dirOne
    : ANIMALS.includes(dirTwo)
    ? dirTwo
    : '??'
}

console.log(roadKill("======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n="))