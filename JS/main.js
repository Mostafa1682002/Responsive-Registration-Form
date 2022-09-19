let form=document.querySelector('form'),
    nextBtn=document.querySelector('.nextBtn'),
    backBtn=document.querySelector('.backBtn'),
    inputFrist=document.querySelectorAll('.frist input'),
    inputSecond=document.querySelectorAll('.second input');


nextBtn.addEventListener('click',()=>{
    inputFrist.forEach((input)=>{
        if(input.value!=''){
            form.classList.add('active');
        }else{
            form.classList.remove('active');
        }
    })
})

backBtn.addEventListener('click',()=>{
    form.classList.remove('active');
})