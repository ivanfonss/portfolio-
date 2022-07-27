(()=>{

    const nome = document.querySelector('[data-form="nome"]')
    const nomeLabel = document.querySelector('[data-form="nomeLabel"]')
    
    const email = document.querySelector('[data-form="email"]')
    const emailLabel = document.querySelector('[data-form="emailLabel"]')

    const assunto = document.querySelector('[data-form="assunto"]')
    const assuntoLabel = document.querySelector('[data-form="assuntoLabel"]')

    const mensagem = document.querySelector('[data-form="mensagem"]')
    const mensagemLabel = document.querySelector('[data-form="mensagemLabel"]')

    nome.addEventListener('click', ()=>{
        nomeLabel.style.display="block"
        nome.setAttribute('placeholder','')
    })

    email.addEventListener('click', ()=>{
        emailLabel.style.display="block"
        email.setAttribute('placeholder','')
    })

    assunto.addEventListener('click', ()=>{
        assuntoLabel.style.display="block"
        assunto.setAttribute('placeholder','')
    })

    mensagem.addEventListener('click', ()=>{
        mensagemLabel.style.display="block"
        mensagem.setAttribute('placeholder','')
    })






})()