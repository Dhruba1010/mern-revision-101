const throttler = (fun, delay) => {
    const throttlerId = false;

    if(!throttlerId.current){
        throttlerId.current = true;
        setTimeout(() => {
            throttlerId.current = false;
            fun();
        }, delay);
    }
}