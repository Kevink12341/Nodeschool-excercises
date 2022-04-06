som = 0
function number(test) {
    for (let i = 2; i < test.length; i++ ) {
        som += Number(test[i])
    };
    console.log(som)
};

const abcd = process.argv
number(abcd);
