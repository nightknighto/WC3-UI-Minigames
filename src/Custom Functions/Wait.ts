import { Timer } from "w3ts/index";

export function wait(howMuch: number) {
    const timer = new Timer();
    const co = coroutine.running();
  
    timer.start(howMuch, false, () => {
      coroutine.resume(co[0]);
    });
  
    coroutine.yield();
  
    timer.destroy();
}
  
  const co = coroutine.create(() => {
    print("test");
    wait(1);
    print("test 2");
  })
  
  coroutine.resume(co);