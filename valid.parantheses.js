// //Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // An input string is valid if:

// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.
// // Every close bracket has a corresponding open bracket of the same type.


// const string ="([)]"
// const string = "({{{{}}}))"
// const string = "({[)"
// const string = 
// "{[]}"
const string ="(]"
const checker = (s) =>{
    
    let res = []
    s = s.split('')
    for (char of s){
        
  
        switch (char){
            case '(':
                res.push(char);
                break;
            case '{':
                res.push(char);
                break;
            case '[':
                res.push(char);
                break;
            
            case ')':
                if(res.length === 0 || !res.includes('(')){
                    return false
                }else{
                    // console.log(res.pop())
                    if(res[res.length -1]==='('){
                        res.pop();
                    }
                    // res.splice(res.indexOf('('),1)
                }
                break;
            case '}':
                if(res.length === 0 || !res.includes('{')){                    
                    return false
                }else{
                    
                    if(res[res.length -1]==='{'){
                        res.pop();
                    }
                }
                break;

            case ']':
                
                if(res.length === 0 || !res.includes('[')){
                    return false
                }else{
                    // console.log(res)
                    
                    if(res[res.length -1]==='['){
                        res.pop();
                    }
                    // console.log('main', res)
                }
                break;               
        }
        // console.log(res,'char is: ', char)
        
        
    
    }

    
    return res.length === 0? true:false
   
    
}

console.log(checker(string));

