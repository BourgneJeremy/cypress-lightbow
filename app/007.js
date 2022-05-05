/**
 * Please write a function which perform the Caesar Cypher
 * Helper: https://www.w3schools.com/charsets/ref_html_ascii.asp
 * --
 * 
 * Example caesar('ab cd'); It returns 'bc de'
 * 
 * For more information about the Caesar cypher:
 * https://fr.wikipedia.org/wiki/Chiffrement_par_décalage
 * 
 *  
 */

 function caesar(str, key = 1) {
    let result = '';
    for (let i = 0 ; i < str.length ; i++) {   
        // Manage all the others chars by keeping the same value
        if (((str.charCodeAt(i) >= 0) && (str.charCodeAt(i) <= 64))
         || ((str.charCodeAt(i) >= 91) && (str.charCodeAt(i) <= 96))
         || (str.charCodeAt(i) >= 123)) {
            result = result + String.fromCharCode(str.charCodeAt(i));
            continue;
        }

        // Manage the uppercase and lowercase loop
        if (((str.charCodeAt(i) + key) > 90) && (str.charCodeAt(i) <= 90))
            result = result + String.fromCharCode(64 + (str.charCodeAt(i) + key - 90));
        else if (((str.charCodeAt(i) + key) > 122) && (str.charCodeAt(i) <= 122))
            result = result + String.fromCharCode(96 + (str.charCodeAt(i) + key - 122));
        else // Default
            result = result + String.fromCharCode(str.charCodeAt(i) + key);
    }
    
    return result;
}

document.querySelector('button[type=button]')
        .addEventListener('click', () => {
            let str = document.querySelector('textarea').value;
            let key = parseInt(document.querySelector('input[type="number"]').value);
            let result = caesar(str, key);
            document.querySelector('#result').textContent = result;
        });
           