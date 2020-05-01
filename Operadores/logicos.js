//AND lógico (&&)
exp1 && exp2

var a1 = true && true;    // t && t retorna true
var a2 = true && false;   // t && f retorna false
var a3 = false && true;   // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "gato" && "cao";   // t && t retorna cao
var a6 = false && "gato";   // f && t retorna false
var a7 = "gato" && false;   // t && f retorna false


// OU lógico (||)
exp1 || exp2

var o1 = true || true;    // t || t retorna true
var o2 = true || false;   // t || f retorna true
var o3 = false || true;   // f || t retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "gato" || "cao";   // t || t retorna gato
var o6 = false || "gato";   // f || t retorna gato
var o7 = "gato" || false;   // t || f retorna gato

// NOT lógico (!)
!exp1

var n1 = !true     // !t retorna false
var n2 = !false;   // !f retorna true
var n3 = !"gato";  // !t retorna false
