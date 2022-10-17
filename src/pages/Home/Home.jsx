import "./Home.css";

export function Home() {

    let formAswered = false;

    const userResultFormAnswer = () => {
        let c1Score = 0;
        let c2Score = 0;
        let c3Score = 0;
        let c4Score = 0;
            
        const opSelected = document.querySelectorAll(".opQuestion");
        opSelected.forEach(opcao => {
            if(opcao.checked) {
                switch(opcao.dataset.value) {
                    case "c1":
                        c1Score += 1;
                        break;
                    case "c2":
                        c2Score += 1;
                        break;
                    case "c3":
                        c3Score += 1;
                        break;
                    case "c4":
                        c4Score += 1;
                        break;
                }
            }
        })
    
        let maxscore = Math.max(c1Score,c2Score,c3Score,c4Score);
        let totalScore = c1Score + c2Score + c3Score + c4Score;

        let answerUser = document.querySelector(".answer__user");

        if(c1Score == maxscore) {
            answerUser.textContent = "Você é um pesquisador! Você vai gostar de desenvolver algoritmos e fazer coisas com computadores que ninguém fez antes. Os pesquisadores normalmente vão para a faculdade e trabalham em universidades, ou como parte da equipe de pesquisa e desenvolvimento em empresas.";
        }
        if(c2Score == maxscore) {
            answerUser.textContent = "Você é um coder! Você adora ajudar as pessoas e sentir o impacto positivo do seu trabalho todos os dias. Coders altruístas estão por aí todos os dias tornando o mundo um lugar melhor.";
        }
        if(c3Score == maxscore) {
            answerUser.textContent = "Você é um Dev. Os devs precisam de habilidades de codificação afiadas, são ótimos depuradores e precisam trabalhar bem em uma equipe de outros desenvolvedores.";
        }
        if(c4Score == maxscore) {
            answerUser.textContent = "Você é o futuro CEO de uma nova startup! Você gosta de correr riscos e construir a próxima grande coisa que ninguém pensou antes.";
        }
        if(totalScore < 4) {
            answerUser.textContent = "Você é o desatento, deixou de responder uma pergunta ou testou para ver o que acontecia se apertasse em finalizar sem responder haha. Na próxima vez, mais atenção!"
        }

        document.querySelector(".form__cont").classList.add("hide");
        document.querySelector(".button__page").classList.add("hide");
        document.querySelector(".warning").classList.add("hide");

        formAswered = true;
    }
    return (
        <section className="form__compoment">
            <article className="home__introduction">
                <h2>Qual é o seu estilo de desenvolvedor?</h2>
                <p className="warning">
                    Responda o questionário abaixo e descubra agora!    
                </p>
            </article>
            <main className="container__questions">
                <form className="form__cont">
                    <fieldset className="question">
                        <h2 className="form__question">O que mais te deixa empolgado?</h2>
                        <label htmlFor="op1">
                            <input type="radio" name="q1" data-value="c1" className="opQuestion"/>
                            Experimentar, descobrir e aprender coisas novas!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q1" data-value="c2" className="opQuestion"/>
                            Ajudar outras pessoas!</label>
                        <label htmlFor="op1">
                            <input type="radio" name="q1" data-value="c3" className="opQuestion"/>
                            Música, filmes, jogos e fazer outras pessoas sorrir!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q1" data-value="c4" className="opQuestion"/>
                            Assumir riscos!</label>
                    </fieldset>
                    <fieldset className="question">
                        <h2 className="form__question">Qual seria o ambiente de trabalho ideal para você?</h2>
                        <label htmlFor="op1">
                            <input type="radio" name="q2" data-value="c1" className="opQuestion"/>
                            Dentro de um laboratório High Tech com vários equipamentos muito avançados!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q2" data-value="c2" className="opQuestion"/>
                            Em um local em que eu aprecio o meu trabalho!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q2" data-value="c3" className="opQuestion"/>
                            Um lugar rodeado por equipamentos legais !
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q2" data-value="c4" className="opQuestion"/>
                            Dentro do conforto do meu lar!</label>
                    </fieldset>
                    <fieldset className="question">
                        <h2 className="form__question">Em quem você se inspira?</h2>
                        <label htmlFor="op1">
                            <input type="radio" name="q3" data-value="c1" className="opQuestion"/>
                            Pessoas que fazem grandes descobertas!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q3" data-value="c2" className="opQuestion"/>
                            Pessoas que se sacrificam para ajudar outras!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q3" data-value="c3" className="opQuestion"/>
                            Pessoas que utilizam muita criatividade e se expressão bastante!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q3" data-value="c4" className="opQuestion"/>
                            Pessoas que criam produtos inovadores!
                        </label>
                    </fieldset>
                    <fieldset className="question">
                        <h2 className="form__question">O que você faz quando encara uma dificuldade?</h2>
                        <label htmlFor="op1">
                            <input type="radio" name="q4" data-value="c1" className="opQuestion"/>
                            Tento achar a solução por conta própria (Buscando online, em livros, etc)!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q4" data-value="c2" className="opQuestion"/>
                            Busco ajuda com alguém!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q4" data-value="c3" className="opQuestion"/>
                            Faço uma pausa, porque isso me ajuda a ser mais criativo!
                        </label>
                        <label htmlFor="op1">
                            <input type="radio" name="q4" data-value="c4" className="opQuestion"/>
                            Vou tentando deiferentes soluções até uma funcionar!
                        </label>
                    </fieldset>
                </form>
                <article className="buttons__page">
                    <button className="button__page"
                        onClick={userResultFormAnswer}
                    >
                        Finalizar
                    </button>
                </article>
                <article>
                    <p className="answer__user"></p>
                </article>
            </main>
        </section>
    );
}