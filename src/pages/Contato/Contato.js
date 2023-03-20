// CSS
import styles from "./Contato.module.css";
import { Link } from "react-router-dom";

//imagens
import matheus from '../imagens/matheus.jpeg'
import ionara from '../imagens/ionara.jpeg'
import gabriel from '../imagens/gabriel.jpeg'
import marcus from '../imagens/marcus.jpeg'
import gabiel3 from '../imagens/gabiel3.jpeg'
import miguel from '../imagens/miguel.jpeg'
import gabriel2 from '../imagens/gabriel2.jpeg'
import GitHub from '../imagens/GitHub.png'
import Linkedin from '../imagens/Linkedin.jpg'


const Contato = () => {
  return (
  <div>
    <div className={styles.container_about}>
      <div className={styles.est}>
          <img src={matheus} className={styles.foto} />
          <br />
          <p className={styles.nome}>Matheus Monteiro</p>
          <br />
          <p className={styles.nome} >G.Conhecimento</p>
          <br />
          <div className={styles.rede}>          
            <img src={GitHub} button/>
            <nav>
              <a href="https://github.com/monteiromts"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/matheus-monteiro-pinheiro-teodoro-a2933b201/">
              LinkedIn</a>
            </nav>
          </div>
          
         
          
      </div>

    <div className={styles.container_about}>
    <div className={styles.est}>
         <img src={gabriel} className={styles.foto}/>
         <br/>
         <p className={styles.nome}>Gabriel Costa</p>
         <br/>
        <p className={styles.nome}>G.Engajamento</p>
        <br />
          <div className={styles.rede}>          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/gabrielcostaferreira"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/gabriel-costa-ferreira-813364221/"
              >LinkedIn</a>
            </nav>
          </div>     
      </div>
    </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={ionara} className={styles.foto} />
        <br/>
        <p className={styles.nome}>Ionara da Costa Santana</p>
        <br/>
        <p className={styles.nome} >Co-Facilitadora I</p>
        <br />
          <div className={styles.rede}>          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/narasnt"
              >GitHub</a>
            </nav>           
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/ionara-da-costa-santana-372428235/"
              >LinkedIn</a>
            </nav>
          </div>
      </div>
      </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={miguel} className={styles.foto} />
        <br/>
        <p className={styles.nome}>Miguel A.R de Melo</p>
        <br/>
        <p className={styles.nome} >Co-Facilitadora II</p>
        <br />
          <div className={styles.rede}>          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/miguelodara"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/miguel-melo-27b290245/"
              >LinkedIn</a>
            </nav>
          </div>
     </div>
      </div>

      </div>






      <div className={styles.container_about}>
      <div>
      <div className={styles.est}>
        <img src={gabiel3} className={styles.foto} />
        <br/>
        <p className={styles.nome}>Gabriel Santos</p>
        <br/>
        <p className={styles.nome} >Colaborador I</p>
        <br />
          <div className={styles.rede}>          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/GabrielSAG"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/gabriel-santos-de-almeida-gonçalves-25480624b/?fbclid=IwAR1xvt-HHwpGk33jiSBKKXas-7CRCXX4Abik9jp5xxr2VrKH-LB7lUJ2Qns"
              >LinkedIn</a>
            </nav>
          </div>
      </div>
      </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={gabriel2} className={styles.foto} />
        <br/>
        <p className={styles.nome}>Gabriel Gomes</p>
        <br/>
        <p className={styles.nome} >Colaborador II</p>
        <br />
          <div className={styles.rede}>          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/Perasinho"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/gabriel-gomes-037765188/?_l=pt_BR"
              >LinkedIn</a>
            </nav>
          </div>
      </div>
      </div>

      <div className={styles.container_about}>
      <div className={styles.est}>
        <img src={marcus} className={styles.foto} />
        <br/>
        <p className={styles.nome}>Marcus Vinicius</p>
        <br/>
        <p className={styles.nome} >Colaborador III</p>
        <br />
          <div className={styles.rede}>          
          
            <img src={GitHub}/>
            <nav>
              <a href="https://github.com/0GILGIL0"
              >GitHub</a>
            </nav>
            <br/>
            <img src={Linkedin}/>
            <nav>
              <a href="https://www.linkedin.com/in/marcus-vinícius-gil-de-oliveira-318317249/"
              >LinkedIn</a>
            </nav>
          </div>
      </div>
      </div>
      </div>
</div>
  );
};

export default Contato;