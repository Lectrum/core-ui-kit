// Core
import component from "./component";
function* test() {
  yield console.log(1);
  yield console.log(2);
  yield console.log(3);
}
const t = test();
t.next();
t.next();
t.next();
document.body.appendChild(component());
