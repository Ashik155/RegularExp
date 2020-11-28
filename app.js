//Regular Expressions !!!!

let reg;
reg = /newyear/i;

// const res = reg.exec("Happ yhsbd newyear")
// console.log(res)
// console.log(res.index)

// const tes = reg.test("newYear9")
// console.log(tes)
// const tes2 = reg.test("newYer9")
// console.log(tes2)

// const str = "Ashik NEwYEar"
// const tes = str.match(reg)
// console.log(tes)

// const str = 'Hey Ashik Happy NEwyear';
// const tes = str.search(reg)
// console.log(tes)

// const str = ' NEWYEAR BHAI';
// const newstr = str.replace(reg,"NAYASAAL")
// console.log(newstr)

// reg = /^he/i;
// const s = "helloWorld";
// const ss = "hloWorldss";

// reg = /h$/i;
// const s = "helloWorld";
// const ss = "hloWorldsshh";

// reg = /^ad$/i;
// const s = "Ashik";
// const ss = "aD";

// reg = /Same?e?i?r/i;
// const s = "samir";
// const ss = "samr";


// reg = /Dhi.raj/i;
// const s = "dhiraj";
// const ss = "dhioraj";

// reg = /har*shad/i;
// const s = "harrrshad";
// const ss = "weewgffhffharshawew";

// reg = /gmail\.com$/i;
// const s = "gmail.com";
// const ss = "yahooo.in"



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