window.onload = function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 4
            },
            960: {
                items: 6
            },
            1280: {
                items: 10
            }
        }
    })

    document.querySelector("#navegar").onclick = function (evt) {
        evt.preventDefault();

        if (document.querySelector(".esquerda nav").style.display == "none" | document.querySelector(".esquerda nav").style.display == "") {
            document.querySelector(".esquerda nav").style.cssText = "display: block; transition: .3s ease all;"
        }
        else {
            document.querySelector(".esquerda nav").style.cssText = "display: none; transition: .3s ease all;"
        }
    }

    document.querySelectorAll(".botao-assistir")[0].onclick = function(evt) {
        evt.preventDefault()
        document.querySelectorAll(".trailer")[0].style.display = "block"
    }
    
    document.querySelectorAll(".fechar a")[0].onclick = function(evt) {
        evt.preventDefault()
        var principal = this.parentElement.parentElement
        principal.style.display = "none"

        principal.querySelectorAll("iframe")[0].src = principal.querySelectorAll("iframe")[0].src
    }
    
    resizeDescricao()
}

window.onresize = resizeDescricao

function resizeDescricao() {
    let descricao = document.querySelectorAll(".descricao")

    for (var i = 0; i < descricao.length; i++) {
        var texto = descricao[i].textContent.trim()
        var ultimos = texto.substring(descricao[i].textContent.trim().length - 3)

        if (ultimos == "...") {
            texto = texto.substring(0, descricao[i].textContent.trim().length - 3)
        }

        if (window.outerWidth <= 400) {
            descricao[i].textContent = texto.substring(0, 80).trim() + "..."
        }
        else if (window.outerWidth <= 600) {
            descricao[i].textContent = texto.substring(0, 200).trim() + "..."
        }
        else if (window.outerWidth <= 960) {
            descricao[i].textContent = texto.substring(0, 250).trim() + "..."
        }
        else if (window.outerWidth <= 1280) {
            descricao[i].textContent = texto.substring(0, 300).trim() + "..."
        }
    }
}

