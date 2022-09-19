let form=document.querySelector('form'),
    nextBtn=document.querySelector('.nextBtn'),
    backBtn=document.querySelector('.backBtn'),
    inputFrist=document.querySelectorAll('.frist input');



nextBtn.addEventListener('click',(e)=>{
    inputFrist.forEach((input)=>{
        if(input.value!=''){
            form.classList.add('active');
        }else{
            form.classList.remove('active');
        }
    })
})

backBtn.addEventListener('click',(e)=>{
    form.classList.remove('active');
})

