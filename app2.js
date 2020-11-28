//Regular Expressions !!!!

let reg;
// reg = /[a-z]rey/;
// const s = "arey.com";
// const ss = "yahooo.in"


// reg = /[A-Z]rey/;
// const s = "arey.com";
// const ss = "Arey.in"


// reg = /[A-Za-z]rey/;
// const s = "arey.com";
// const ss = "Arey.in"

// reg = /[0-9]rey/;
// const s = "1rey.com";
// const ss = "10ahooo.in"
// reg = /[0-9][0-9]rey/;
// const s = "1rey.com";
// const ss = "10rey.in"

// reg = /hel{2}o/i;
// const s = "Hello";
// const ss = "helo"

// reg = /hel{2,4}o/i;
// const s = "Helllo";
// const ss = "helllllo"

// reg = /hel{2,}o/i;
// const s = "Hello";
// const ss = "hellllllllo"

//parenthesis 

// reg = /(hel{2}o){2}/i;
// const s = "Hellohello";
// const ss = "helo"

const x = (reg,s)=>{

    if(reg.test(s)){
        console.log("Yes Matches ..., "+ reg +"and " + s )
    }
    else{
        console.log("Not Match")
    }
}

x(reg,s)
x(reg,ss)