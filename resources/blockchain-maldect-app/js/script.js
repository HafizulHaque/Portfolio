window.onload = (event) => {
  console.log('page is fully loaded');
  const step1 = document.querySelector('.step-1');
  const step2 = document.querySelector('.step-2');
  const step3 = document.querySelector('.step-3');
  const step4 = document.querySelector('.step-4');

  const p1 = document.querySelector('.p1');
  const p2 = document.querySelector('.p2');
  const p3 = document.querySelector('.p3');

  const msg = document.getElementById('finalMsg');

  console.log(p1);

  step1.classList.remove('hide');

  let time1 = parseInt(Math.random() * 10 , 10) + 10; // 10~20
  console.log(time1);
  let time2 = parseInt(Math.random() * 5 , 10) + 5; // 10~20
  console.log(time2);
  let time3 = parseInt(Math.random() * 10 , 10) + 20; // 10~20
  console.log(time3);

  let t1 = 0, t2 = 0, t3 = 0;
  let dt1 = 0, dt2 = 0, dt3 = 0;

  dt1 = 10/time1;

  let id1 = setInterval(()=>{
    t1 += dt1;
    console.log(parseInt(t1));
    if(t1>100){
      p1.style.width = `100%`
      p1.innerHTML = '100%';
      p1.classList.remove('progress-bar-animated');
      step2.classList.remove('hide');
      dt2 = 10/time2;
      clearInterval(id1);
    }else{
      p1.style.width = `${parseInt(t1)}%`;
      p1.innerHTML = `${parseInt(t1)}%`;
    } 
  }, 100);

  let id2 = setInterval(()=>{
    t2 += dt2;
    console.log(parseInt(t2));
    if(t2>100){
      p2.style.width = `100%`
      p2.innerHTML = '100%';
      p2.classList.remove('progress-bar-animated');
      step3.classList.remove('hide');
      dt3 = 10/time3;
      clearInterval(id2);
    }else{
      p2.style.width = `${parseInt(t2)}%`;
      p2.innerHTML = `${parseInt(t2)}%`;
    } 
  }, 100);

  let id3 = setInterval(()=>{
    t3 += dt3;
    console.log(parseInt(t3));
    if(t3>100){
      p3.style.width = `100%`
      p3.innerHTML = '100%';
      p3.classList.remove('progress-bar-animated');
      msg.innerHTML = "Your program is benign. No malicious proof was found.";
      step4.classList.remove('hide');
      clearInterval(id3);
    }else{
      p3.style.width = `${parseInt(t3)}%`;
      p3.innerHTML = `${parseInt(t3)}%`;
    } 
  }, 100);
 
  
}