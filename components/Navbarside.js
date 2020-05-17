/* SIDE NAVIGATION BAR COMPONENT */

const Navbarside = () => (
  <>
    <div className="middle">
      <div className="menu">
        <li className="item" id="blog">
          <a href="#where" className="btn">
            Blog
          </a>
        </li>

        <li className="item" id="news">
          <a href="#news" className="btn">
            Notícias
          </a>
          <div className="smenu">
            <a href="#">Amador</a>
            <a href="#">College</a>
            <a href="#">Juvenil</a>
            <a href="#">Profissional</a>
          </div>
        </li>

        <li className="item" id="events">
          <a href="#events" className="btn">
            Eventos
          </a>
          <div className="smenu">
            <a href="#">Nacional</a>
            <a href="#">Sul-americano</a>
            <a href="#">Panamericano</a>
            <a href="#">Internacional</a>
          </div>
        </li>

        <li className="item" id="benef">
          <a href="#benef" className="btn">
            Programas e projetos
          </a>
          <div className="smenu">
            <a href="#">Atividades Beneficentes</a>
            <a href="#">Jogadores</a>
            <a href="#">Programas</a>
            <a href="#">Projetos</a>
          </div>
        </li>

        <li className="item" id="where">
          <a href="#where" className="btn">
            Onde Jogar
          </a>
        </li>

        <li className="item" id="coaches">
          <a href="#coaches" className="btn">
            Treinamento
          </a>
          <div className="smenu">
            <a href="#">Coaching</a>
            <a href="#">Cursos</a>
            <a href="#">Camps</a>
            <a href="#">Escolinhas</a>
          </div>
        </li>

        <li className="item" id="rules">
          <a href="#rules" className="btn">
            Árbitros e Regras
          </a>
          <div className="smenu">
            <a href="#">Árbitros Oficiais</a>
            <a href="#">Cursos</a>
          </div>
        </li>

        <li className="item" id="av">
          <a href="#av" className="btn">
            Audiovisual
          </a>
          <div className="smenu">
            <a href="#">Entrevistas</a>
            <a href="#">Fotos</a>
            <a href="#">Jogos</a>
            <a href="#">Treinamentos</a>
          </div>
        </li>

        <li className="item" id="apps">
          <a href="#apps" className="btn">
            Apps & Games
          </a>
          <div className="smenu">
            <a href="#">Apps</a>
            <a href="#">Jogos Mobile</a>
            <a href="#">Console & PC</a>
          </div>
        </li>

        <li className="item" id="links">
          <a href="#links" className="btn">
            Links
          </a>
          <div className="smenu">
            <a href="#">CBS</a>
            <a href="#">Federações Estaduais</a>
            <a href="#">Panamerica</a>
            <a href="#">Sulamericana</a>
            <a href="#">WSF</a>
          </div>
        </li>
      </div>
    </div>

    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        list-style: none;
        text-decoration: none;
      }

      .middle {
        position: absolute;
        top: 50%;
        left: 50%
        transform: translate(-50%, -50%);        
      }

      .menu {
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
      }

      .item {
        border-top: 1px solid #100B08;
        overflow: hidden;
      }

      .btn {
        display: block;
        padding: 16px 20px;
        background: #100B08;
        color: white;
        text-align: left;
      }

      .btn before {
        content: "";
        position: absolute;
        width: 14px
        height: 14 px
        background: #100B08;
        left: 20px;
        bottom: -7px;
        transform: rotate(45deg);
      }

      .btn i {
        margin-right: 10px;
      }

      .smenu {
        background: #FCC707;
        overflow: hidden;
        transition: max-height 0.3s;
        max-height: 0;
      }

      .smenu a {
        display: block;
        padding: 16px 26px;
        color: #100B08;
        font-size: 14px;
        margin: 4px 0;
        position: relative;
      }

      .smenu a before {
        content: "";
        position: absolute;
        width: 6px;
        height: 100%;
        background: #100B08;
        left: 0;
        top: 0;
        transition: 0.3s;
        opacity: 0;
      }

      .smenu a:hover:before {
        opacity: 1;
      }

      .item:target .smenu {
        max-height: 20em;
        
      }

    `}</style>
  </>
);

export default Navbarside;
