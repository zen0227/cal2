const ary=[];

function n1(){
    ary.push(1);
    app();
}

function n2(){
    ary.push(2);
    app();
}

function n3(){
    ary.push(3)
    app()
}

function n4(){
    ary.push(4);
    app();
}

function n5(){
    ary.push(5);
    app();
}

function n6(){
    ary.push(6);
    app();
}

function n7(){
    ary.push(7);
    app();
}

function n8(){
    ary.push(8);
    app();
}

function n9(){
    ary.push(9);
    app();
}

function n0(){
    ary.push(0);
    app();
}

function del(){
    ary.pop();
    app();
}


function add(){
    ary.push('+');
    app();
}

function sub(){
    ary.push('-');
    app();
}

function multi(){
    ary.push('×');
    app();
}

function div(){
    ary.push('÷');
    app();
}

function nl(){
    ary.push('(');
    app();
}

function nr(){
    ary.push(')');
    app();
}

function app(){
    let str = ary.join("")
    myform.mytext.value = str;
}

function multidiv(ary){
    for(i=0; i<ary.length; i++){
        if(ary[i]=='×'){
            ary[i-1] = ary[i-1]*ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }
            }
            ary.splice(ary.length-2,2);
        }else if(ary[i]=='÷'){
            ary[i-1] = ary[i-1]/ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }   
            }
            ary.splice(ary.length-2,2);
        }
    }
}

function addsub(ary){
    for(i=0; i<ary.length; i++){
        if(ary[i]=='+'){
            ary[i-1] = ary[i-1]+ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }
            }
            ary.splice(ary.length-2,2);
        }else if(ary[i]=='-'){
            ary[i-1] = ary[i-1]-ary[i+1];
            if(i+2!=ary.length){
                for(let l=i+2; l<ary.length; l++){
                    ary[l-2] = ary[l];
                }   
            }
            ary.splice(ary.length-2,2);
        }
    }
}


function equal(){
    
    //search(ary);
    multidiv(ary);
    addsub(ary);
    myform.mytext.value = ary[0] ;
}

/*function search(ary){
    const mary = [];
    const s = [];
    let n = 0;
    for(i=0; i<ary.length; i++){
        if(ary[i]=='('){
            s[n]=i;
            n++;
        }else if(ary[i]==')'){
            let l = i - s[n-1];
            for(let x=0; x<l-1; x++){
                mary[x] = ary[s[n-1]+1+x];
            }
            multidiv(mary);
            addsub(mary);
            ary[s[n-1]] = mary[0];
            if(i!=ary.length-1){
                for(let x=0; x<ary.length-i; x++){
                    ary[s[n-1]+1+x] = ary[i+1+x];
                }
            }
            ary.splice(ary.length-i+s[n-1],i-s[n-1]);
            i = s[n-1];
        }else{
            ;
        }
        
    }
}
*/
